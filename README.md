# ThunderBayHomeServices Microsite

A high-performance React microsite for lead generation in the Northwestern Ontario home services market. Connects local contractors with homeowners via an AI-powered quoting engine.

## 🚀 Key Features

- **Code-Split Architecture**: Built with Vite + React for optimal performance. Critical pages eager loaded, secondary pages lazy loaded.
- **Asset Optimization**: WebP image formats, preloaded LCP hero images, and optimized assets in `public/`.
- **Serverless Backend**: Netlify Functions handle lead submission (`submit-lead.ts`) directly to GoHighLevel via MCP.
- **Responsive Design**: Mobile-first, Tailwind-styled UI with high accessibility standards.

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript, Vite, Framer Motion
- **Backend**: Netlify Functions (Node.js)
- **Styling**: Tailwind CSS (custom design system)
- **Deployment**: Netlify

## 📦 Project Structure

```
├── netlify/functions/     # Serverless backend (Lead submission)
├── public/                # Static assets (images, favicon)
├── src/
│   ├── components/        # Reusable UI components
│   ├── pages/             # Route pages (Lazy loaded)
│   ├── assets/            # Source assets
│   └── App.tsx            # Main router
└── vite.config.ts         # Build configuration
```

## ⚡️ Development

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Dev Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## 🌍 Environment Variables

Required in Netlify for lead submission to work:

```bash
PIT_TOKEN="pit-..."
LOCATION_ID="k2..."
PIPELINE_NAME="HomeServiceLeads"
STAGE_NAME="New Lead"
```

##  Deployment

Push to `main` branch to trigger automatic Netlify deployment.

```bash
git push origin main
```
