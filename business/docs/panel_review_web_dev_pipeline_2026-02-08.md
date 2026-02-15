# Advisory Panel Review — Website Generation Pipeline

**Date:** February 8, 2026  
**Subject:** Complete review of the Web Development pipeline, templates, and workflow  
**Requested By:** Justice, Founder  
**In Response To:** Vite Starter template, industry playbooks, `/build-site` workflow, and overall pipeline architecture

---

## Panel Members Weighing In

| Panelist | Expertise | Focus Area |
|----------|-----------|------------|
| **Marcus Chen** | Product / Growth | Workflow efficiency, scalability, client onboarding |
| **Maya Chen** | UI/UX Design | Visual quality, interaction design, accessibility |
| **Victor Oduya** | Full-Stack Engineering | Code architecture, performance, maintainability |
| **Jasmine Taylor** | Digital Marketing | SEO, conversion, industry positioning |
| **Dr. Amara Okonkwo** | Business Strategy | Pricing, competitive positioning, service packaging |
| **Derek Simmons** | Operations | Process optimization, delivery, QA |

---

## 1. Overall Architecture — Marcus Chen

**Verdict: Strong foundation, needs a few structural upgrades**

> The three-lane approach (Vite / Next.js / Hybrid) is smart — it covers the full spectrum of client needs without overengineering. But I see two gaps:

### Recommendations

| # | Improvement | Why |
|---|------------|-----|
| 1 | **Add a `client-config.json` standard** | Instead of `{{PLACEHOLDER}}` find-and-replace, use a single JSON config file per build. A script reads it and hydrates all templates. Less error-prone, faster iteration. |
| 2 | **Add a `Drafts/` stage** | Before a build moves to `Builds/`, it should live in `Drafts/`. Only promoted to `Builds/` after client approval. This prevents half-finished sites from cluttering the deliverables folder. |
| 3 | **Version the templates** | Templates should have a version number (e.g., `v1.2`). When you improve the template, existing client sites can see what version they're on and decide whether to upgrade. |
| 4 | **Component library** | Extract reusable sections (pricing tables, FAQ accordions, team grids, gallery lightboxes) into a `Components/` folder that any template can pull from. |

---

## 2. Design & Interactions — Maya Chen

**Verdict: Premium interactions are excellent, but missing critical UX elements**

> The 13 interactive features are impressive — especially the custom cursor, card tilt, and gradient mesh. But premium design isn't just about effects. It's about the *experience*.

### What's Missing

| # | Missing Element | Impact |
|---|----------------|--------|
| 1 | **Accessibility (a11y)** | No `prefers-reduced-motion` media query. Users with vestibular disorders will get sick from all these animations. **Must add.** |
| 2 | **Focus states** | Keyboard users have no visible focus indicators. Every interactive element needs `:focus-visible` styles. |
| 3 | **Dark mode toggle** | The CSS supports dark mode but there's no toggle button in the HTML or JS to switch themes. Add a sun/moon toggle in the nav. |
| 4 | **Skip to content link** | Screen reader users need a skip link before the nav. This is basic accessibility. |
| 5 | **Image lazy loading** | No `loading="lazy"` on images. For media-heavy portfolio sites, this is critical for performance. |
| 6 | **404 page** | No error page template. Every site needs a branded 404. |
| 7 | **Favicon set** | Only one favicon referenced. Need `apple-touch-icon`, `manifest.json`, and multiple sizes. |

### Design Enhancements

| # | Enhancement | Details |
|---|------------|---------|
| 1 | **Micro-interactions on form inputs** | Floating labels, subtle validation animations, character counters |
| 2 | **Scroll progress bar** | Thin gradient bar at top of page showing scroll position |
| 3 | **Back to top button** | Appears after scrolling past the hero, smooth scrolls back |
| 4 | **Image reveal effect** | Images slide in with a color overlay wipe (not just fade) |
| 5 | **Testimonial carousel** | Support multiple testimonials with auto-rotation + dots |

---

## 3. Code Architecture — Victor Oduya

**Verdict: Clean structure, but needs production hardening**

> The CSS is well-organized with BEM naming and the JS is dependency-free which is great. But a few things need attention for production:

### Technical Improvements

| # | Issue | Fix |
|---|-------|-----|
| 1 | **No CSS minification** | Add a `vite.config.js` with CSS and JS minification. The template doesn't have one. |
| 2 | **`main.js` should be a module** | Use `<script type="module">` instead of regular `<script>`. This enables tree-shaking and modern JS features. |
| 3 | **CSS custom property fallbacks** | `--color-primary: {{PRIMARY_COLOR}}` will break if not replaced. Add fallback values: `--color-primary: var(--fallback, #3b82f6)`. |
| 4 | **Image optimization pipeline** | Add a script or Vite plugin for image compression (WebP conversion, responsive `srcset`). Portfolio sites with unoptimized images will fail Core Web Vitals. |
| 5 | **Meta tag template expansion** | Missing `twitter:card`, `canonical`, `robots`, and structured data (`JSON-LD` for local business). |
| 6 | **Contact form handler** | The HTML references a contact page but there's no form handler. Add a Formspree/Netlify Forms/Web3Forms integration pattern. |
| 7 | **Print stylesheet** | Service businesses print proposals. Add a `@media print` stylesheet. |

### Recommended `vite.config.js`

```javascript
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    minify: 'terser',
    cssMinify: true,
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about.html',
        services: 'services.html',
        portfolio: 'portfolio.html',
        contact: 'contact.html',
      },
    },
  },
});
```

---

## 4. Marketing & SEO — Jasmine Taylor

**Verdict: Playbooks are a unique differentiator, but need more depth**

> The industry playbooks are brilliant — I haven't seen another agency do this. But they need to go deeper to be truly "industry leading."

### Playbook Enhancements

| # | Enhancement | Details |
|---|------------|---------|
| 1 | **Add 3 more playbooks** | E-Commerce, Creative/Artist, and Restaurant/Local were planned but not built. Build them. |
| 2 | **Sample copy in each playbook** | Don't just describe what to write — provide actual draft copy that can be customized. Give 3 headline variations, not just a framework. |
| 3 | **Competitor analysis section** | Each playbook should show 3-5 best-in-class example sites from that industry with notes on what makes them great. |
| 4 | **Google Business Profile setup** | For local businesses, this is more important than the website itself. Add a GBP checklist to relevant playbooks. |
| 5 | **Analytics setup** | Every playbook should specify which analytics events to track (e.g., "CTA clicks," "form submissions," "scroll depth"). |

### SEO Template Additions

| Tag | Template |
|-----|----------|
| Canonical | `<link rel="canonical" href="{{DOMAIN}}/{{PAGE}}" />` |
| Robots | `<meta name="robots" content="index, follow" />` |
| Twitter Card | `<meta name="twitter:card" content="summary_large_image" />` |
| JSON-LD | Local Business structured data block |
| Sitemap | Auto-generate `sitemap.xml` during build |
| OG Image | Generate per-page OG images |

---

## 5. Business Strategy — Dr. Amara Okonkwo

**Verdict: This is a productizable service — package it properly**

> You're building what agencies charge $5K-$15K for. The pipeline approach gives you a speed advantage — you can deliver in days what takes others weeks. **Package this as a standalone service offering.**

### Pricing Framework

| Tier | Includes | Suggested Price |
|------|----------|----------------|
| **Starter** | Vite static site, 3-5 pages, 1 playbook, template design | $800 – $1,500 |
| **Professional** | Vite or Next.js, 5-8 pages, brand kit integration, custom design | $2,000 – $4,000 |
| **Premium** | Next.js full-stack, unlimited pages, custom features, retainer | $5,000 – $10,000+ |

### Competitive Positioning

> Don't compete with Squarespace/Wix (DIY) or WordPress freelancers (commodity). Position as:
> **"Agency-quality websites, built in days, not months."**
>
> Your differentiator: industry playbooks + premium interactions + fast turnaround.

### Service Add-Ons

| Add-On | Price |
|--------|-------|
| Brand Kit Design (from scratch) | $500 |
| Monthly Maintenance Retainer | $200/mo |
| SEO Optimization Package | $300 |
| Photography Integration (your Setup Concierge photo service) | $400/session |
| Content Writing (from playbook frameworks) | $300/page |

---

## 6. Process & QA — Derek Simmons

**Verdict: Workflow is good, but needs a client approval gate and QA checklist**

### Process Improvements

| # | Improvement | Details |
|---|------------|---------|
| 1 | **Client preview stage** | Before delivery, deploy to a preview URL (Netlify deploy preview or Vercel preview). Client reviews there, not on your machine. |
| 2 | **Sign-off document** | After client approves, create a delivery receipt noting: pages delivered, hosting details, what's included in maintenance, what costs extra. |
| 3 | **Browser testing matrix** | Test on Chrome, Safari, Firefox, Edge + mobile Safari, Chrome Android. Add to QA checklist. |
| 4 | **Performance budget** | Set targets: LCP < 2.5s, FID < 100ms, CLS < 0.1. Test with Lighthouse before delivery. |
| 5 | **Handoff documentation** | For each delivered site, create a `CLIENT_GUIDE.md` explaining: how to update content, how to request changes, how to contact support. |

---

## Consensus: Top 10 Priority Actions

| Priority | Action | Owner | Difficulty |
|----------|--------|-------|------------|
| 🔴 1 | Add `prefers-reduced-motion` + focus states + skip link (accessibility) | Template update | Easy |
| 🔴 2 | Add `vite.config.js` with multi-page build + minification | Template update | Easy |
| 🔴 3 | Create `client-config.json` hydration system | Workflow update | Medium |
| 🔴 4 | Add dark mode toggle, back-to-top button, scroll progress bar | Template update | Easy |
| 🟡 5 | Build 3 remaining industry playbooks | New content | Medium |
| 🟡 6 | Add contact form handler pattern (Formspree/Netlify Forms) | Template update | Easy |
| 🟡 7 | Create a reusable `Components/` library (FAQ, gallery, pricing table, testimonial carousel) | New folder | Medium |
| 🟡 8 | Add SEO meta tags (canonical, twitter, JSON-LD, sitemap) | Template update | Easy |
| 🟡 9 | Create `Drafts/` stage and client preview workflow | Folder + workflow | Medium |
| 🟢 10 | Package pricing tiers and create a service page for Setup Concierge | Business strategy | Low |

---

*Panel review complete. Ready for implementation of priority items.*
