
## Onboarding for ThunderBayHomeServices SaaS

### 1. Environment Variables (Netlify)
```bash
env set PIT_TOKEN "pit-774ff74d-2679-4806-b8ec-5d6222967dd7"
env set LOCATION_ID "k2aNHMKb5hD0nNzq3kHp"
```

### 2. Deploy the Function
Your Netlify pipeline will build the new serverless function automatically on push:
```bash
npm ci && npm run build
git push origin main
```

### 3. Embed the Quote Form
In your `Home.tsx` (already wired), the `<QuoteForm />` component posts to `/.netlify/functions/submit-quote`.

### 4. Map GHL MCP in Go High Level
No widget setup per customer required—MCP & PIT handle multi-tenant lead routing. Log into GHL → see leads under your configured pipeline.

### 5. Visual Flow
```
Browser → QuoteForm → submit-quote serverless → GHL MCP endpoint (MCP_URL)
→ Go High Level pipeline & workflows → SMS/Email/Calendar → Dashboard
```
