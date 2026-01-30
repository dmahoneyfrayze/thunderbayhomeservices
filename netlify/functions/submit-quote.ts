import type { Handler, HandlerEvent } from '@netlify/functions';
import fetch from 'node-fetch';

type QuoteRequest = {
  name: string;
  email: string;
  phone: string;
  service: string;
  address: string;
  details: string;
  datetime: string;
};

// Model Context Protocol endpoint & auth
const MCP_URL = 'https://services.leadconnectorhq.com/mcp/';
const PIT_TOKEN = process.env.PIT_TOKEN as string;       // pit‑774ff74d‑2679‑4806‑b8ec‑5d6222967dd7
const LOCATION_ID = process.env.LOCATION_ID as string;  // k2aNHMKb5hD0nNzq3kHp

export const handler: Handler = async (event: HandlerEvent) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }
  if (!PIT_TOKEN || !LOCATION_ID) {
    return { statusCode: 500, body: 'MCP token or location ID not configured' };
  }
  let data: QuoteRequest;
  try {
    data = JSON.parse(event.body || '{}');
  } catch (err) {
    return { statusCode: 400, body: 'Invalid JSON' };
  }

  // Forward to GoHighLevel MCP to create a lead
  try {
    await fetch(MCP_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${PIT_TOKEN}`,
        'Content-Type': 'application/json',
        locationId: LOCATION_ID,
      },
      body: JSON.stringify(data),
    });
  } catch (err) {
    console.error('Error calling MCP endpoint:', err);
    return { statusCode: 502, body: 'Failed to forward to MCP endpoint' };
  }

  return { statusCode: 200, body: 'OK' };
};
