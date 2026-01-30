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

const GHL_WEBHOOK_URL = process.env.GHL_WEBHOOK_URL as string;

const handler: Handler = async (event: HandlerEvent) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }
  if (!GHL_WEBHOOK_URL) {
    return { statusCode: 500, body: 'Webhook URL not configured' };
  }
  let data: QuoteRequest;
  try {
    data = JSON.parse(event.body || '{}');
  } catch (err) {
    return { statusCode: 400, body: 'Invalid JSON' };
  }

  // Post to GoHighLevel webhook
  try {
    await fetch(GHL_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  } catch (err) {
    console.error('Error forwarding to GHL webhook:', err);
    return { statusCode: 502, body: 'Failed to forward to webhook' };
  }

  return { statusCode: 200, body: 'OK' };
};

export { handler };