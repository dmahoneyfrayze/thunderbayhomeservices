import type { Handler, HandlerEvent } from '@netlify/functions';
import fetch from 'node-fetch';

const MCP_URL = 'https://services.leadconnectorhq.com/mcp/';
const PIT_TOKEN = process.env.PIT_TOKEN;
const LOCATION_ID = process.env.LOCATION_ID;

export const handler: Handler = async (event: HandlerEvent) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    if (!PIT_TOKEN || !LOCATION_ID) {
        console.error('Missing configuration: PIT_TOKEN or LOCATION_ID');
        return { statusCode: 500, body: 'Server configuration error' };
    }

    try {
        const { name, email, message, source = 'Tools Page' } = JSON.parse(event.body || '{}');

        if (!email) {
            return { statusCode: 400, body: 'Email is required' };
        }

        // Split name
        const nameParts = name ? name.split(' ') : [];
        const firstName = nameParts[0] || '';
        const lastName = nameParts.slice(1).join(' ') || '';

        // Construct JSON-RPC 2.0 Payload for MCP
        // Tool: contacts_upsert-contact (as per GHL docs)
        const payload = {
            jsonrpc: "2.0",
            method: "tools/call",
            params: {
                name: "contacts_upsert-contact",
                arguments: {
                    email: email,
                    firstName: firstName,
                    lastName: lastName,
                    tags: ["MCP Lead", source],
                    customFields: [
                        { key: "message_content", value: message || "No message" }
                    ]
                }
            },
            id: Date.now()
        };

        console.log('Sending MCP Request:', JSON.stringify(payload, null, 2));

        const response = await fetch(MCP_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${PIT_TOKEN}`,
                'locationId': LOCATION_ID,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        const responseText = await response.text();
        console.log('MCP Response:', response.status, responseText);

        if (!response.ok) {
            throw new Error(`MCP Error: ${response.status} ${responseText}`);
        }

        // Parse response to check for application-level errors
        const responseData: any = JSON.parse(responseText);
        if (responseData.error) {
            throw new Error(`MCP Application Error: ${JSON.stringify(responseData.error)}`);
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ success: true, data: responseData.result })
        };

    } catch (error: any) {
        console.error('Submission Failed:', error);
        return {
            statusCode: 502,
            body: JSON.stringify({ success: false, error: error.message })
        };
    }
};
