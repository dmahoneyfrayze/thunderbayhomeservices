
## Frayze AI Chat & Quote Widget Setup

To enable the 24/7 AI chatbot and instant-quote engine on your site, add the following snippet just above the closing `</body>` tag in `index.html`:

```html
<!-- Frayze HomeServices AI Widget -->
<script src="https://cdn.thunderbayhomeservices.com/widget.js"
        data-customer="YOUR_GHL_PIPELINE_ID"
        data-api-key="YOUR_PUBLIC_WIDGET_KEY">
</script>
```

1. **Replace** `YOUR_GHL_PIPELINE_ID` with your Go High Level pipeline/webhook ID.
2. **Replace** `YOUR_PUBLIC_WIDGET_KEY` with your Frayze public widget key.
3. **Deploy** the updated site (`npm run build` then deploy via Netlify or your CI/CD).

Once live, the chatbot will automatically load your configured services (from `src/config/servicesConfig.tsx`) and start capturing qualified leads.
