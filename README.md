# Reduxy.ai Website

The official marketing website for Reduxy.ai - the privacy gateway for LLMs.

## 🚀 Overview

This is the marketing and documentation website for Reduxy.ai, built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui. The site provides information about our privacy gateway for AI applications, including features, pricing, documentation, and contact information.

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI)
- **Icons**: Lucide React
- **SEO**: next-seo, next-sitemap
- **Analytics**: Vercel Analytics & Speed Insights
- **Deployment**: Vercel

## 📁 Project Structure

```
src/
├── app/
│   ├── (marketing)/          # Marketing pages with shared layout
│   │   ├── contact/         # Contact page
│   │   ├── pricing/         # Pricing page
│   │   └── layout.tsx       # Marketing layout with header/footer
│   ├── demo/                # Interactive PII detection demo
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Homepage
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── code-tabs.tsx        # Code example tabs
│   ├── hero.tsx             # Hero section
│   ├── site-footer.tsx      # Site footer
│   └── site-header.tsx      # Site header with navigation
└── lib/
    └── utils.ts             # Utility functions
```

## ✨ Key Features

### Interactive Demo Page (`/demo`)
- **Live PII Detection**: Real-time demonstration of our marketing redaction endpoint
- **500 Character Limit**: Showcases the endpoint's built-in limitations for demo purposes
- **No Authentication Required**: Public endpoint for easy testing and demonstrations
- **Advanced NLP**: Powered by spaCy's en_core_web_lg model with transformer capabilities
- **Beautiful Results Display**: 
  - Side-by-side comparison of original vs. redacted text
  - Detailed PII entity breakdown with confidence scores
  - Performance metrics and processing time
  - Color-coded entity types for easy identification
- **Example Text Library**: Pre-built examples for quick testing
- **Real-time API Integration**: Direct connection to production marketing endpoint
- **Configurable Gateway URL**: Uses `NEXT_PUBLIC_REDUXY_GATEWAY_ADDRESS` environment variable
- **Responsive Design**: Works seamlessly on desktop and mobile devices

### Marketing Integration
- **Hero Section CTA**: "Try Live Demo" button prominently featured
- **Seamless Navigation**: Integrated with existing site navigation
- **Brand Consistent**: Matches the existing design system and UI components

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/reduxy/reduxy-website.git
cd reduxy-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Add the following to your `.env.local`:
```bash
# Gateway Configuration for Demo Page
NEXT_PUBLIC_REDUXY_GATEWAY_ADDRESS=https://your-gateway-url.com
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Styling

The website uses:
- **Tailwind CSS** for utility-first styling
- **shadcn/ui** for pre-built accessible components
- **Dark mode support** with system preference detection
- **Responsive design** for all screen sizes

## 📊 SEO & Analytics

- **next-sitemap** automatically generates sitemap.xml and robots.txt
- **Open Graph** and **Twitter Card** meta tags
- **Structured data** for better search engine understanding
- **Vercel Analytics** for visitor insights
- **Vercel Speed Insights** for performance monitoring

## 🚢 Deployment

### Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Link to Vercel project:
```bash
vercel link
```

3. Set environment variables in Vercel dashboard

4. Deploy:
```bash
vercel --prod
```

### Custom Domain Setup

1. In Vercel dashboard, go to Project Settings > Domains
2. Add your custom domain (e.g., reduxy.ai)
3. Configure DNS records as instructed:
   - For apex domain: A record pointing to Vercel IP
   - For www subdomain: CNAME pointing to cname.vercel-dns.com

## 🌍 Environment Variables

Create a `.env.local` file based on `.env.example`:

```bash
# Site Configuration
SITE_URL=https://www.reduxy.ai
NEXT_PUBLIC_SITE_URL=https://www.reduxy.ai

# API Configuration
REDUXY_API_KEY=your_api_key_here
NEXT_PUBLIC_REDUXY_API_KEY=your_public_api_key

# Support Configuration
SUPPORT_EMAIL=support@reduxy.ai
SALES_EMAIL=sales@reduxy.ai

# Analytics
PLAUSIBLE_DOMAIN=reduxy.ai
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your_vercel_analytics_id
```

## 📄 Content Management

### Adding New Pages

1. Create a new file in `src/app/(marketing)/your-page/page.tsx`
2. Use the marketing layout by placing it in the `(marketing)` folder
3. Add navigation links in `src/components/site-header.tsx` and `src/components/site-footer.tsx`

### Code Examples

Use the `<CodeTabs>` component to display code examples in multiple languages:

```tsx
import { CodeTabs } from "@/components/code-tabs"

<CodeTabs examples={[
  {
    language: "curl",
    label: "cURL",
    code: `curl https://api.reduxy.ai/v1/chat/completions ...`
  },
  {
    language: "javascript", 
    label: "JavaScript",
    code: `const response = await fetch(...)`
  }
]} />
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Make your changes
4. Run tests: `npm run lint`
5. Commit your changes: `git commit -m 'Add new feature'`
6. Push to the branch: `git push origin feature/new-feature`
7. Open a Pull Request

## 📋 TODO

- [ ] Add MDX support for blog and documentation
- [ ] Implement contact form backend
- [ ] Add search functionality for docs
- [ ] Create changelog page with automated updates
- [ ] Add testimonials and case studies
- [ ] Implement cookie consent banner
- [ ] Add security page with detailed compliance info

## 📞 Support

- **Email**: support@reduxy.ai
- **Documentation**: [docs.reduxy.ai](https://docs.reduxy.ai)
- **Issues**: [GitHub Issues](https://github.com/reduxy/reduxy-website/issues)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ by the Reduxy team.
