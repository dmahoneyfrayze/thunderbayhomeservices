
## Onboarding for ThunderBayHomeServices SaaS

### 1. Environment Variables (Netlify)
```bash
env set PIT_TOKEN "pit-774ff74d-2679-4806-b8ec-5d6222967dd7"
env set LOCATION_ID "k2aNHMKb5hD0nNzq3kHp"
env set PIPELINE_NAME "HomeServiceLeads"
env set STAGE_NAME "New Lead"
```

### 2. Deploy the Function
Your Netlify pipeline will build the new serverless function automatically on push:
```bash
npm ci && npm run build
git push origin main
```

### 3. Embed the Quote Form
In your `Home.tsx` (already wired), the `<QuoteForm />` component POSTs to `/.netlify/functions/submit-quote` with the following JSON schema:
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "phone": "123-456-7890",
  "service": "Plumbing",
  "address": "123 Main St",
  "details": "Leaky faucet",
  "datetime": "2026-02-01T14:00",
  "account": "ContractorAccountName",
  "source": "SiteNameOrURL"
}
```

### 4. Go High Level MCP Mapping
No widget setup per customer required—MCP & PIT handle multi-tenant lead routing. On each form submission, the serverless function:
1. Upserts the Contact via `contacts_upsert`.
2. Creates an Opportunity via `opportunities_add` in your specified pipeline & stage, with custom fields for account and source.

Check your Go High Level pipeline for new leads and set up workflows to handle SMS/email confirmations and calendar invites.

### 5. Visual Flow
```
Browser → QuoteForm → submit-quote serverless → MCP(contacts_upsert) → MCP(opportunities_add)
→ GHL Pipeline & Workflows → SMS/Email/Calendar → Dashboard
```
