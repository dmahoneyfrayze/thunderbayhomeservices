import type { Handler, HandlerEvent } from '@netlify/functions';
// Using native fetch in Node 18+

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
        const { name, email, phone, companyName, businessType, message, source = 'Tools Page' } = JSON.parse(event.body || '{}');

        if (!email) {
            return { statusCode: 400, body: 'Email is required' };
        }

        // Split name
        const nameParts = name ? name.split(' ') : [];
        const firstName = nameParts[0] || '';
        const lastName = nameParts.slice(1).join(' ') || '';

        // Construct JSON-RPC 2.0 Payload for MCP
        // Tool: contacts_upsert-contact (requires body_ prefix for args)
        const payload = {
            jsonrpc: "2.0",
            method: "tools/call",
            params: {
                name: "contacts_upsert-contact",
                arguments: {
                    body_email: email,
                    body_firstName: firstName,
                    body_lastName: lastName,
                    body_tags: ["MCP Lead", source, businessType].filter(Boolean),
                    body_source: source,
                    body_phone: phone,
                    body_companyName: companyName,
                    body_locationId: LOCATION_ID
                    // Omitting customFields for now as schema suggests strings but API usually needs objects.
                    // keeping it simple to ensure basic lead capture works first.
                }
            },
            id: Date.now()
        };

        console.log(`Sending MCP Request to ${MCP_URL} with LocationID: ${LOCATION_ID}`);

        // Use global fetch
        const response = await fetch(MCP_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${PIT_TOKEN}`,
                'locationId': LOCATION_ID,
                'Content-Type': 'application/json',
                'Accept': 'application/json, text/event-stream'
            },
            body: JSON.stringify(payload)
        });

        const responseText = await response.text();
        console.log('MCP Response:', response.status, responseText.substring(0, 500)); // Log first 500 chars

        if (!response.ok) {
            throw new Error(`MCP Error: ${response.status} ${responseText}`);
        }

        // Parse response (Handle SSE stream)
        let responseData: any = null;

        // Try parsing as plain JSON first
        try {
            responseData = JSON.parse(responseText);
        } catch (e) {
            // If failed, try parsing as SSE
            console.log('Parsing as SSE...');
            const lines = responseText.split('\n');
            for (const line of lines) {
                if (line.startsWith('data: ')) {
                    const content = line.substring(6).trim();
                    if (content === '[DONE]') continue;
                    try {
                        const parsed = JSON.parse(content);
                        // We look for the message that has the result
                        if (parsed.result) {
                            responseData = parsed;
                            break;
                        }
                    } catch (err) {
                        // ignore parse errors for individual lines
                    }
                }
            }
        }

        if (!responseData) {
            throw new Error('Could not parse MCP response (Not JSON or valid SSE)');
        }

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
