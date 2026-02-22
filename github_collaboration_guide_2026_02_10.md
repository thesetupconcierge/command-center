# Black Nexus — GitHub Collaboration Guide

**Updated:** February 10, 2026

---

## Team

| Role | Name | GitHub Username | Access Level |
|------|------|----------------|-------------|
| Founder / Lead | Justice McKinney | [thesetupconcierge](https://github.com/thesetupconcierge) | Owner |
| Partner / Co-Founder | JB Scott | [jblaflare-code](https://github.com/jblaflare-code) | Member |

---

## GitHub Organization

- **Org Name:** [`blacknexuscda`](https://github.com/blacknexuscda) ✅ Created
- **Plan:** Free (unlimited private repos, unlimited collaborators)
- **Visibility:** Private repos only (business IP protection)

---

## Repository Structure

| Repo | Purpose | Visibility |
|------|---------|-----------|
| `brand-kit` | Logo, colors, typography, templates | Private |
| `black-nexus-site` | Marketing website (Vite) | Private |
| `client-projects` | Client deliverables & case studies | Private |
| `sops` | Standard operating procedures | Private |
| `pitch-decks` | Investor/client pitch materials | Private |

---

## Branching & Workflow

### Git Flow (simplified)

```
main          ← production-ready, protected
  └── dev     ← integration branch
       └── feature/xyz  ← individual work
```

### Rules

1. **Never push directly to `main`** — always use Pull Requests
2. **Branch naming:** `feature/short-description`, `fix/bug-name`, `docs/update-name`
3. **PR reviews:** At least 1 approval before merging
4. **Commit messages:** Use conventional format: `feat:`, `fix:`, `docs:`, `chore:`

### Example Workflow

```bash
# Start new feature
git checkout dev
git pull origin dev
git checkout -b feature/add-services-page

# Work, commit, push
git add .
git commit -m "feat: add services page with 3-tier pricing"
git push origin feature/add-services-page

# Create PR on GitHub: feature/add-services-page → dev
# After review + approval → merge
# When dev is stable → PR from dev → main
```

---

## Permissions

| Setting | Value |
|---------|-------|
| Base permissions | Write |
| Branch protection on `main` | ✅ Require PR, 1 approval |
| Branch protection on `dev` | Optional |
| Force push | ❌ Disabled on main |
| Delete branches after merge | ✅ Enabled |

---

## Sharing HTML Pages (Free Hosting)

Use **GitHub Pages** for previews and demos:

1. Go to repo → Settings → Pages
2. Source: `main` branch, `/docs` folder (or root)
3. URL: `https://blacknexuscda.github.io/repo-name/`

> This is free and works for static HTML/CSS/JS — perfect for site previews, dashboards, and pitch decks shared via link.

---

## Separation of Concerns

| Workspace | Owner | Purpose |
|-----------|-------|---------|
| `C:\GitHub Local\Business Ideas\` | Justice (local) | Personal workspace, Setup Concierge, WNQ, Career Hub |
| `black-nexus-llc` GitHub Org | Justice + JB | Shared Black Nexus business repos |

> **Rule:** Black Nexus shared assets live in the GitHub org. Personal/Setup Concierge work stays local and is never pushed to the org.

---

*Created Feb 10, 2026 — Setup Concierge*
