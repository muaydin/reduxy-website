# Deployment Guide

This guide will help you deploy the Reduxy.ai website to production.

## 🚀 Quick Deployment Steps

### 1. Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click "New repository" or go to [github.com/new](https://github.com/new)
3. Repository details:
   - **Repository name**: `reduxy-website`
   - **Description**: `Official marketing website for Reduxy.ai - the privacy gateway for LLMs`
   - **Visibility**: Public
   - **Initialize**: Do NOT initialize with README, .gitignore, or license (we already have these)

4. Click "Create repository"

### 2. Push Code to GitHub

After creating the repository, run these commands in your terminal:

```bash
# Add the GitHub repository as remote origin
git remote add origin https://github.com/YOUR_USERNAME/reduxy-website.git

# Push the main branch
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### 3. Deploy to Vercel

#### Option A: Deploy via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "New Project"
3. Import your `reduxy-website` repository
4. Configure project:
   - **Project Name**: `reduxy-website`
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)

5. Add environment variables (optional):
   ```
   SITE_URL=https://www.reduxy.ai
   NEXT_PUBLIC_SITE_URL=https://www.reduxy.ai
   ```

6. Click "Deploy"

#### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

### 4. Configure Custom Domain

1. In Vercel dashboard, go to your project
2. Click on "Settings" → "Domains"
3. Add your domain: `reduxy.ai`
4. Configure DNS records as instructed by Vercel:

   **For apex domain (reduxy.ai):**
   ```
   Type: A
   Name: @
   Value: 76.76.19.61
   ```

   **For www subdomain (www.reduxy.ai):**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

5. Wait for DNS propagation (can take up to 48 hours)

## 🔧 Environment Variables

Set these environment variables in Vercel:

| Variable | Value | Description |
|----------|-------|-------------|
| `SITE_URL` | `https://www.reduxy.ai` | Main site URL |
| `NEXT_PUBLIC_SITE_URL` | `https://www.reduxy.ai` | Public site URL |
| `SUPPORT_EMAIL` | `support@reduxy.ai` | Support email |
| `SALES_EMAIL` | `sales@reduxy.ai` | Sales email |

## 📊 Analytics Setup

### Vercel Analytics
Vercel Analytics is already configured and will automatically start collecting data once deployed.

### Plausible Analytics (Optional)
1. Sign up at [plausible.io](https://plausible.io)
2. Add `reduxy.ai` as a site
3. Add environment variable in Vercel:
   ```
   NEXT_PUBLIC_PLAUSIBLE_DOMAIN=reduxy.ai
   ```

## 🌟 Preview Deployments

Vercel automatically creates preview deployments for:
- Pull requests to `main` branch
- Pushes to any branch

Each preview deployment gets a unique URL for testing.

## 🔒 Branch Protection

After setting up the repository, configure branch protection:

1. Go to GitHub repository → Settings → Branches
2. Add rule for `main` branch:
   - ✅ Require a pull request before merging
   - ✅ Require status checks to pass before merging
   - ✅ Require branches to be up to date before merging
   - ✅ Include administrators

## 📝 Post-Deployment Checklist

- [ ] Website loads at your domain
- [ ] All pages are accessible
- [ ] Contact form submits (you'll need to implement backend)
- [ ] Navigation works correctly
- [ ] Dark mode toggle functions
- [ ] Mobile responsiveness
- [ ] SEO meta tags are present
- [ ] Sitemap is generated at `/sitemap.xml`
- [ ] Analytics are tracking (if configured)

## 🚨 Troubleshooting

### Build Failures
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify environment variables are set correctly

### Domain Issues
- DNS changes can take up to 48 hours
- Check DNS propagation with tools like [whatsmydns.net](https://www.whatsmydns.net)
- Ensure DNS records match Vercel's requirements exactly

### Contact Form
The contact form is currently frontend-only. To make it functional:
1. Implement a backend API (Vercel Functions, Netlify Functions, or external service)
2. Or integrate with services like Formspree, Netlify Forms, or HubSpot

## 📞 Support

If you need help with deployment:
- Check [Vercel Documentation](https://vercel.com/docs)
- Review [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- Contact the development team

---

**Deployment URLs:**
- **Production**: https://www.reduxy.ai (after domain setup)
- **Vercel URL**: https://reduxy-website.vercel.app (automatic)
- **GitHub Repository**: https://github.com/YOUR_USERNAME/reduxy-website 