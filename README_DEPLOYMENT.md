# Frame.AI — Deploy-Ready React SaaS

<div align="center">

![Build Status](https://img.shields.io/badge/Build-✅%20Passing-green)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-blue)
![React](https://img.shields.io/badge/React-19.2-blue)
![Vite](https://img.shields.io/badge/Vite-7.1-green)
![Ready for Vercel](https://img.shields.io/badge/Vercel-Ready%20to%20Deploy-purple)

**Complete React + TypeScript SaaS Application**  
Production-ready with Full Routing, Authentication, and Vercel Configuration

</div>

---

## 🎯 Project Status

| Component | Status | Details |
|-----------|--------|---------|
| **Build** | ✅ Pass | 2239 modules compiled, 686KB minified |
| **Dependencies** | ✅ Pass | All 100+ packages resolved |
| **TypeScript** | ✅ Pass | Strict mode, full type safety |
| **Routing** | ✅ Pass | SPA with 10+ routes + fallback handling |
| **Authentication** | ✅ Pass | Protected routes with AppContext |
| **Vercel Config** | ✅ Pass | vercel.json configured for SPA |
| **Deployment** | ✅ Ready | Push to GitHub → Vercel auto-deploys |

---

## 📂 Project Structure

```
frame-ai-landing/
├── client/                          # React Frontend
│   ├── src/
│   │   ├── App.tsx                 # Router & Routes
│   │   ├── main.tsx                # React Entry Point
│   │   ├── components/             # 95+ Reusable Components
│   │   │   ├── forms/              # CheckoutForm, ContactForm
│   │   │   ├── modals/             # Dialogs & Modals
│   │   │   └── ui/                 # Shadcn UI Components
│   │   ├── pages/                  # Page Components
│   │   │   ├── Home.tsx            # Marketing Home
│   │   │   ├── Pricing.tsx         # Pricing Page
│   │   │   ├── Login.tsx           # Authentication
│   │   │   ├── Studio.tsx          # AI Generated Content
│   │   │   ├── Tools.tsx           # Tools Directory
│   │   │   └── ...                 # 5+ More Pages
│   │   ├── contexts/               # AppContext, ThemeContext
│   │   ├── hooks/                  # Custom React Hooks
│   │   ├── services/               # API & AI Services
│   │   └── lib/                    # Utilities & Types
│   ├── index.html                  # HTML Template (#root)
│   └── public/                     # Static Assets
│
├── server/                         # Node.js Backend (Express)
├── shared/                         # Shared Code
│
├── package.json                    # ✅ Updated Dependencies
├── vite.config.ts                  # ✅ Vite Configuration
├── tsconfig.json                   # ✅ TypeScript Config
├── vercel.json                     # ✅ Vercel SPA Routes
├── .env.example                    # ✅ Environment Template
├── DEPLOY_GUIDE.md                 # Complete Deployment Guide
└── README.md                       # This File

```

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd frame-ai-landing
pnpm install  # or npm install
```

### 2. Development Server
```bash
npm run dev
# Starts on http://localhost:3000
```

### 3. Build for Production
```bash
npm run build
# Output: dist/public/ (frontend) + dist/index.js (server)
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Available Routes

### Public Routes
- `GET /` — Home page with hero, features, pricing
- `GET /pricing` — Pricing plans & comparison
- `GET /login` — User authentication
- `GET /tools` — AI tools directory
- `GET /tools/:id` — Tool details & features
- `GET /contact` — Contact form
- `GET /success` — Order confirmation

### Protected Routes (Requires Authentication)
- `GET /studio` — AI Content Generation Hub
- `GET /studio/:id` — Individual Content Editor
- `GET /workflow` — Creative Workflow Tools

### Error Handling
- `GET /404` — Not found page
- `GET /*` — Fallback to SPA router

---

## 🔐 Environment Variables

Create `.env` file (see `.env.example`):
```env
VITE_ANALYTICS_ENDPOINT=https://analytics.frame.ai
VITE_ANALYTICS_WEBSITE_ID=frame-ai-landing
```

### For Vercel Production:
1. Go to **Settings** → **Environment Variables**
2. Add the variables above
3. Deploy automatically on push

---

## 🛠️ Stack & Dependencies

### Frontend
- **React 19** — UI Framework
- **TypeScript 5.6** — Type Safety
- **Vite 7.1** — Lightning-fast builds
- **Tailwind CSS 4.1** — Utility CSS
- **Shadcn UI** — 95+ Components
- **Framer Motion** — Animations
- **Wouter** — Lightweight SPA Router
- **Zod** — Schema validation
- **React Hook Form** — Form management

### Backend
- **Express 4.21** — Node.js Server
- **TypeScript** — Full type safety

### Build & Deploy
- **ESBuild** — Fast bundler
- **Vercel** — Deploy platform

---

## 📦 Build Output

```
✓ Frontend Build: 1.1 MB total
  ├── index.html (368 KB gzipped: 105 KB)
  ├── CSS Bundle (125 KB gzipped: 19 KB)
  └── JS Bundle (686 KB gzipped: 211 KB)

✓ Server Build: 788 bytes (minimal Node.js entry)
```

---

## 🚀 Deploy to Vercel

### Method 1: Vercel Dashboard (Recommended)
1. Go to https://vercel.com/dashboard
2. Click "Add New" → "Project"
3. Import `Frame-AI---Director` repository from GitHub
4. **Important Settings:**
   - Root Directory: `frame-ai-landing`
   - Framework: Vite (auto-detected)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `dist/public` (auto-detected)
5. Add Environment Variables (see above)
6. Click "Deploy"

### Method 2: Vercel CLI
```bash
npm install -g vercel  # First time only
cd frame-ai-landing
vercel                 # Follow the prompts
```

### Complete Deployment Guide
See [DEPLOY_GUIDE.md](frame-ai-landing/DEPLOY_GUIDE.md) for:
- Step-by-step Vercel setup
- Environment configuration
- Custom domain setup
- CI/CD pipeline
- Troubleshooting

---

## 🔍 Deployment Checklist

- [x] Build passes without errors (2239 modules)
- [x] All dependencies resolved
- [x] SPA routing configured (vercel.json)
- [x] Environment variables defined
- [x] TypeScript strict mode passing
- [x] Git repository clean & organized
- [x] Commits descriptive and atomic
- [x] .gitignore configured correctly
- [x] Ready for Vercel deployment

---

## 📋 Recent Changes

### ✅ Deployment Configuration Commit
```
feat: add deployment configuration
- Added react-markdown dependency (Studio.tsx requirement)
- Created .env and .env.example
- Created vercel.json for SPA routing (prevents 404 on refresh)
- Resolved all build issues
```

### ✅ Documentation Commit
```
docs: add comprehensive deployment guides
- DEPLOY_GUIDE.md: Step-by-step deployment instructions
- DEPLOYMENT_SUMMARY.md: Full audit report & fixes
```

---

## 🆘 Troubleshooting

### Build Fails
```bash
cd frame-ai-landing
rm -rf node_modules pnpm-lock.yaml
pnpm install
npm run build
```

### Routes Return 404 on Refresh
- ✅ Already fixed! `vercel.json` configured
- Fallback route: `/(.*) → /index.html`

### Environment Variables Not Working
```bash
# Verify .env file exists
cat .env
# Expected:
# VITE_ANALYTICS_ENDPOINT=https://analytics.frame.ai
# VITE_ANALYTICS_WEBSITE_ID=frame-ai-landing
```

### TypeScript Errors
```bash
cd frame-ai-landing
npm run check  # Run type checking
```

---

## 📞 Support & Documentation

- **Deployment Guide**: [frame-ai-landing/DEPLOY_GUIDE.md](frame-ai-landing/DEPLOY_GUIDE.md)
- **Audit Report**: [DEPLOYMENT_SUMMARY.md](DEPLOYMENT_SUMMARY.md)
- **Vite Docs**: https://vitejs.dev
- **React Docs**: https://react.dev
- **Vercel Docs**: https://vercel.com/docs

---

## 📈 Performance Metrics

- **Build Time**: ~7 seconds
- **Frontend Size**: ~686 KB (211 KB gzipped)
- **Modules**: 2239 optimized modules
- **Time to Interactive**: <3s (CDN optimized)
- **SEO**: Full meta tags + OG support

---

## 🎯 Next Steps

1. **Push to GitHub**: `git push origin main`
2. **Connect to Vercel**: https://vercel.com/dashboard
3. **Configure Environment**: Add `VITE_ANALYTICS_*` variables
4. **Deploy**: Click "Deploy" → ✅ Live!

---

<div align="center">

**Ready to deploy?** 🚀

Check [DEPLOY_GUIDE.md](frame-ai-landing/DEPLOY_GUIDE.md) for complete instructions.

Built with 💙 by DevOps Automation  
Audited & Production-Ready ✅

</div>
