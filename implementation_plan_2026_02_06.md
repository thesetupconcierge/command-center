# Black Nexus — Multi-Page Website

Build a premium, deployment-ready website for **Black Nexus LLC** ("The Brain Behind Studio Flow") — a Clinical Development Agency (CDA) offering digital diagnostics, structural implementation, and AI-powered performance services. The site will live on a new, dedicated domain.

## Proposed Changes

### Design System & Architecture

A **Vite** project (vanilla HTML/CSS/JS, no framework) for fast dev server and easy static deployment to any host (Vercel, Netlify, Cloudflare Pages, traditional hosting, etc.).

**Design direction:**

- Dark-mode-first aesthetic (matches the existing Phase 1 HTML)
- Color palette: deep navy/charcoal backgrounds (`#0f0f0f`, `#1a1a2e`), **accent red** (`#e94560`), **gold** (`#f5c518`), white text
- Inter font family, glassmorphism cards, smooth scroll, micro-animations
- Fully responsive (mobile → desktop), print-friendly

---

### Pages (5 total)

#### 1. Homepage (`index.html`)

- **Hero section** — Bold tagline ("The Brain Behind Studio Flow"), animated subtitle, primary CTA ("See Our Work" / "Get Started")
- **Services overview** — 3 card previews of Starter/Pro/Premium
- **Featured work** — 2-3 portfolio thumbnails (WNQ, V8 Engine)
- **Social proof / stats** — Key metrics or partner logos
- **CTA banner** — "Let's build something" with contact link

#### 2. Services (`services.html`)

- **3-tier pricing cards**: Starter / Pro / Premium
  - **Starter ($500–$1K)**: Website build, basic brand kit, social setup
  - **Pro ($1.5K–$3K)**: Full branding, content strategy, ongoing support
  - **Premium ($5K+)**: AI-powered creative pipeline, video production, retainer
- Comparison table with feature checklist
- "Not sure? Let's talk" CTA

#### 3. Work / Portfolio (`work.html`)

- **Case study cards** — WNQ web revamp, V8 Engine/Studio Flow, Art Transformations
- Each card: thumbnail, description, "View Details" expand
- Filterable by category (Branding, Web, Video, AI)

#### 4. About (`about.html`)

- **Brand story** — Mission, vision, "The Brain Behind Studio Flow"
- **BEAF Framework** visual — 4 pillars (Business, Education, Art, Finance)
- **Founder profile** — Justice, Creative Director / Fractional CTO
- **Capabilities grid** — Tech, Creative, Strategy, Community

#### 5. Contact (`contact.html`)

- **Intake form** — Name, email, project type, budget range, message
- Contact info and social links
- Embedded map or location indicator (Chicago area)

---

### Shared Components

- **Navigation** — Sticky top bar, dark glass effect, mobile hamburger menu
- **Footer** — Brand lockup, social links, quick links, copyright
- **Scroll animations** — Intersection Observer fade-in effects
- **Page transitions** — Smooth cross-page feel

---

### Project Structure

```
black-nexus-site/
├── index.html
├── services.html
├── work.html
├── about.html
├── contact.html
├── css/
│   └── styles.css          # Full design system + page styles
├── js/
│   └── main.js             # Nav, animations, form handling
├── assets/
│   └── images/             # Generated hero images, thumbnails
└── package.json            # Dev server only (Vite or live-server)
```

> [!IMPORTANT]
> **Domain**: The site will be prepared for deployment on a new domain (not setupconcierge.com). All links and references will be domain-agnostic so you can point any domain at it.

## Verification Plan

### Browser Testing

- Open each page in the browser and verify layout, navigation, and responsiveness
- Test mobile viewport (375px width) and desktop (1440px)
- Verify all navigation links work between pages
- Verify contact form validates inputs
- Verify scroll animations trigger correctly
- Check print stylesheet renders cleanly
