
import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');
const envPath = path.join(rootDir, '.env');

// Simple .env parser since we don't assume dotenv is installed
function loadEnv() {
    if (fs.existsSync(envPath)) {
        const content = fs.readFileSync(envPath, 'utf-8');
        content.split('\n').forEach(line => {
            const [key, value] = line.split('=');
            if (key && value) {
                process.env[key.trim()] = value.trim();
            }
        });
        console.log('✅ Loaded .env file');
    } else {
        console.warn('⚠️ No .env file found at', envPath);
    }
}

loadEnv();

const PIT_TOKEN = process.env.PIT_TOKEN;
const LOCATION_ID = process.env.LOCATION_ID;
const MCP_URL = 'https://services.leadconnectorhq.com/mcp/';

if (!PIT_TOKEN || !LOCATION_ID) {
    console.error('❌ Missing Credentials');
    console.error('Please ensure you have a .env file in the root directory with:');
    console.error('PIT_TOKEN=your_token_here');
    console.error('LOCATION_ID=your_location_id_here');
    process.exit(1);
}

async function listTools() {
    console.log('🔍 Querying GHL MCP Server for available tools...');

    const payload = {
        jsonrpc: "2.0",
        method: "tools/list",
        params: {},
        id: Date.now()
    };

    try {
        const response = await fetch(MCP_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${PIT_TOKEN}`,
                'locationId': LOCATION_ID,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status} ${await response.text()}`);
        }

        const data = await response.json();

        if (data.error) {
            console.error('❌ MCP Error:', data.error);
            return;
        }

        const tools = data.result?.tools || [];
        console.log(`✅ Found ${tools.length} tools:\n`);

        tools.forEach(tool => {
            console.log(`🛠️  Tool: ${tool.name}`);
            console.log(`   Description: ${tool.description || 'No description'}`);
            console.log(`   Schema:`);
            console.log(JSON.stringify(tool.inputSchema, null, 2));
            console.log('-'.repeat(50));
        });

    } catch (error) {
        console.error('❌ Failed to list tools:', error);
    }
}

listTools();
