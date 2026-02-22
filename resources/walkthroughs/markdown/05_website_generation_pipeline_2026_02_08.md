# Website Generation Pipeline — Walkthrough

**Date:** February 8, 2026

---

## What Was Built

### Site Brief Template

[site_brief_template.md](file:///c:/Users/justi/OneDrive/Desktop/Business%20Files/Business%20Ideas/Setup%20Concierge/Resources/Templates/site_brief_template.md) — 9-section form covering brand identity, pages, content, services, contact, design, SEO, and hosting.

### Industry Playbooks

| Playbook | File |
|----------|------|
| Nonprofit & Community | [nonprofit_community_playbook.md](file:///c:/Users/justi/OneDrive/Desktop/Business%20Files/Business%20Ideas/Web%20Development/Industry%20Playbooks/nonprofit_community_playbook.md) |
| Service Business | [service_business_playbook.md](file:///c:/Users/justi/OneDrive/Desktop/Business%20Files/Business%20Ideas/Web%20Development/Industry%20Playbooks/service_business_playbook.md) |

Each includes: page structure, copy frameworks, SEO seeds, design direction, CTA strategy, common mistakes.

### Vite Starter Template

Complete static site scaffold with premium design system:

| File | Purpose |
|------|---------|
| `index.html` | Homepage with nav, hero, stats, services, testimonial, CTA, footer |
| `css/variables.css` | Design tokens (swap from brand kit) + dark mode |
| `css/reset.css` | Browser normalization |
| `css/styles.css` | Full component styles with hover effects, glassmorphism |
| `css/responsive.css` | Mobile-first breakpoints |
| `js/main.js` | Nav toggle, scroll animations, active link tracking |
| `package.json` | Vite dev server |

### Next.js Starter Template

[README.md](file:///c:/Users/justi/OneDrive/Desktop/Business%20Files/Business%20Ideas/Web%20Development/Templates/NextJS%20Starter/README.md) with init commands, project structure, client config pattern, and deployment guide.

### `/build-site` Workflow

[build-site.md](file:///c:/Users/justi/OneDrive/Desktop/Business%20Files/Business%20Ideas/.agent/workflows/build-site.md) — 11-step workflow: read brief → read brand kit → read playbook → copy template → replace placeholders → generate pages → copy assets → preview → verify → iterate → deliver.

---

## Final Structure

```
Web Development/
├── Templates/
│   ├── Vite Starter/        (7 files — ready to clone)
│   ├── NextJS Starter/      (README with setup guide)
│   └── Hybrid Starter/      (planned Phase 2)
├── Brand Kits/              (drop client kits here)
├── Industry Playbooks/      (2 playbooks built)
├── Builds/                  (generated sites go here)
├── Resources/
└── Action Items/
```
