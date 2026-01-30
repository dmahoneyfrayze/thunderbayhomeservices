
import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');
const envPath = path.join(rootDir, '.env');

// Load .env
if (fs.existsSync(envPath)) {
    const content = fs.readFileSync(envPath, 'utf-8');
    content.split('\n').forEach(line => {
        const [key, value] = line.split('=');
        if (key && value) {
            process.env[key.trim()] = value.trim();
        }
    });
}

const PIT_TOKEN = process.env.PIT_TOKEN;
const LOCATION_ID = process.env.LOCATION_ID;
const MCP_URL = 'https://services.leadconnectorhq.com/mcp/';

if (!PIT_TOKEN || !LOCATION_ID) {
    console.error('❌ Missing Credentials in .env');
    process.exit(1);
}

async function testSubmission() {
    console.log('🚀 Testing MCP Lead Submission...');

    const email = `test_${Date.now()}@test.com`;
    const firstName = "Test";
    const lastName = "Lead";
    const source = "Script Verification";

    const payload = {
        jsonrpc: "2.0",
        method: "tools/call",
        params: {
            name: "contacts_upsert-contact",
            arguments: {
                body_email: email,
                body_firstName: firstName,
                body_lastName: lastName,
                body_tags: ["MCP Lead", source],
                body_source: source,
                body_locationId: LOCATION_ID
            }
        },
        id: Date.now()
    };

    try {
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

        console.log(`Response Status: ${response.status}`);

        const text = await response.text();
        console.log('Raw Response:', text.substring(0, 300));

        if (text.includes('"status": 403') || text.includes('"success": false')) {
            throw new Error('GHL Access Denied (403) - Check Permissions');
        }

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        console.log('✅ Lead submitted successfully!');
        console.log(`📧 Email used: ${email}`);

    } catch (error) {
        console.error('❌ Submission Failed:', error);
    }
}

testSubmission();
