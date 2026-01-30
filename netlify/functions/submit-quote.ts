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
  account?: string;
  source?: string;
};

// Model Context Protocol endpoint & auth
const MCP_URL = 'https://services.leadconnectorhq.com/mcp/';
const PIT_TOKEN = process.env.PIT_TOKEN as string;
const LOCATION_ID = process.env.LOCATION_ID as string;
const PIPELINE = process.env.PIPELINE_NAME || 'HomeServiceLeads';
const STAGE = process.env.STAGE_NAME || 'New Lead';

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

  // 1) Upsert contact
  try {
    await fetch(MCP_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${PIT_TOKEN}`,
        'Content-Type': 'application/json',
        locationId: LOCATION_ID,
      },
      body: JSON.stringify({
        tool: 'contacts_upsert',
        data: { contact: {
          firstName: data.name,
          email: data.email,
          phone: data.phone,
        } }
      }),
    });
  } catch (err) {
    console.error('Error upserting contact via MCP:', err);
    return { statusCode: 502, body: 'Contact upsert failed' };
  }

  // 2) Add opportunity (lead)
  try {
    await fetch(MCP_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${PIT_TOKEN}`,
        'Content-Type': 'application/json',
        locationId: LOCATION_ID,
      },
      body: JSON.stringify({
        tool: 'opportunities_add',
        data: { opportunity: {
          contactEmail: data.email,
          pipeline: PIPELINE,
          stage: STAGE,
          customFields: {
            service: data.service,
            address: data.address,
            details: data.details,
            preferredDateTime: data.datetime,
            account: data.account || '',
            source: data.source || '',
          }
        } }
      }),
    });
  } catch (err) {
    console.error('Error adding opportunity via MCP:', err);
    return { statusCode: 502, body: 'Opportunity creation failed' };
  }

  return { statusCode: 200, body: 'OK' };
};
