# Advisory Panel Review: Guides & Walkthroughs Page

**Date:** 2026-02-09
**Feature:** `Dashboard/guides.html` — Searchable resource hub with MD/PDF toggle
**Status:** Live (file-based, local)

---

## Feature Summary

A new page added to the Command Center dashboard that organizes all 37 workspace documents into 8 color-coded categories (Walkthroughs, Guides, Strategy, Templates, Consultations, Action Items, Client Docs, Reference). Includes full-text search with highlighting, category filters, and an MD/PDF toggle that switches card links between raw markdown and formatted PDF versions. 25 of 37 docs now have PDFs.

---

## Panel Members Consulted

| Panelist | Role | Relevance |
|----------|------|-----------|
| Marcus Chen | Product Manager | Feature strategy, UX flow, scalability |
| Maya Chen | Visual Designer | UI polish, card design, visual hierarchy |
| Nina Rodriguez | Marketing Manager | Content organization, naming, discoverability |
| Derek Simmons | Ops & Team Manager | SOPs, workflow integration, maintainability |

---

## Marcus Chen — Product Manager

### Rating: 8/10

> *"This solves a real pain point — document sprawl. The toggle is clever because it serves dual purposes: practicing markdown literacy AND having polished read-only versions. Smart."*

**What Works:**

- Category system is well-structured — 8 categories covers the full spectrum
- Search + filter combo means zero friction to find anything
- `localStorage` persistence on the toggle is a nice touch
- The "MD ONLY" dimming when a PDF doesn't exist is honest UX

**Refinements:**

1. **Add "Recently Opened" section** — Track the last 5 clicked docs in localStorage and surface them at the top. This is the #1 pattern for doc portals
2. **Card click should preview, not navigate** — Consider an inline preview pane (split view) instead of opening a new tab. This keeps context
3. **Add doc count per area** — The area tags (WNQ, System, etc.) should be filterable too, not just categories
4. **Sort within sections** — Allow alphabetical or date-based sorting toggle

**Priority:** Recently Opened → Area filters → Preview pane

---

## Maya Chen — Visual Designer

### Rating: 9/10

> *"The design language is cohesive with the dashboard. The color-coded categories with matching accent bars, icon backgrounds, and tags create excellent visual rhythm."*

**What Works:**

- Left-edge accent bars on cards create strong visual grouping
- The toggle pill design is clean and immediately readable
- Glassmorphism cards are consistent with the dashboard aesthetic
- Search highlighting in gold is subtle but effective

**Refinements:**

1. **Add a mini hero** — A one-line stat banner at the top: "37 docs • 25 PDFs • 8 categories" gives instant context
2. **Animate the toggle transition** — When switching MD↔PDF, cards should subtly fade/shift to signal the change. Right now there's no transition feedback
3. **Consider card thumbnails** — Even a small icon or colored stripe pattern unique to each doc type would add personality
4. **Improve the empty state** — The 📭 icon is fine but adding a "Try clearing your search" link would be more helpful

**Priority:** Stat banner → Toggle animation → Empty state CTA

---

## Nina Rodriguez — Marketing Manager

### Rating: 7.5/10

> *"The organization is solid but the naming could work harder. Some titles are developer-speak, not client-speak. If a client ever sees this, they should understand every title instantly."*

**What Works:**

- Descriptions on every card are essential — good call
- Category names are plain English (not "docs" or "assets")
- Putting Walkthroughs first in the sort order makes sense for onboarding

**Refinements:**

1. **Title clarity pass** — Some titles are jargon-heavy:
   - "Website Generation Pipeline" → "How Client Sites Get Built"
   - "System Refinements" → "Behind the Scenes: System Upgrades"
   - "Frequency Separation" (in Photoshop README) — will confuse non-photographers
2. **Add "Recommended Reading" section** — Flag 3-5 docs as "Start Here" for anyone new. A pinned section at the top with gold borders
3. **Description length** — Some are too terse ("Cheat sheet for all slash commands"). Add *why* someone would read it: "Quick-ref when you forget a command mid-workflow"
4. **Consider audience tagging** — "Internal" vs. "Client-Facing" badges would help Justice know what's safe to share

**Priority:** Recommended Reading → Audience tagging → Title pass

---

## Derek Simmons — Ops & Team Manager

### Rating: 8.5/10

> *"From an ops standpoint this is exactly right — a single pane of glass for documentation. The MD/PDF toggle is operationally smart because it forces the question: 'Has this been finalized enough for PDF?' That's a built-in quality gate."*

**What Works:**

- `/generate-pdfs` workflow integration means this isn't manual maintenance
- Skipping existing PDFs in the batch process saves time
- The `KNOWN_PDFS` approach is pragmatic for a file:// based system

**Refinements:**

1. **Auto-detect new PDFs** — Instead of hardcoding `KNOWN_PDFS`, scan at page load. You could use a small JSON manifest file that the `/generate-pdfs` workflow auto-generates after each run
2. **Add "Last Updated" timestamp to cards** — Shows doc freshness at a glance. Critical for ops — stale docs are dangerous
3. **Version indicator** — If the .md has been modified since the PDF was generated, show a ⚠️ "PDF may be outdated" badge
4. **Bulk actions** — A "Generate All Missing PDFs" button right on the page would be cleaner than running a slash command

**Priority:** Manifest file → Last Updated → Stale PDF warning

---

## Consensus Recommendations

### 🟢 Quick Wins (implement now)

| # | Recommendation | Effort | Panelist |
|---|---------------|--------|----------|
| 1 | Add stat banner: "37 docs • 25 PDFs • 8 categories" | 5 min | Maya |
| 2 | Add "Recently Opened" tracking (localStorage) | 15 min | Marcus |
| 3 | Animate toggle transition (CSS fade) | 5 min | Maya |
| 4 | Improve empty state with "clear search" link | 5 min | Maya |

### 🟡 High Impact (next iteration)

| # | Recommendation | Effort | Panelist |
|---|---------------|--------|----------|
| 5 | Area filters (WNQ, System, Advisory, etc.) | 20 min | Marcus |
| 6 | "Recommended Reading" pinned section | 15 min | Nina |
| 7 | Last Updated timestamp on cards | 20 min | Derek |
| 8 | Auto-generate PDF manifest from workflow | 30 min | Derek |

### 🔵 Future Enhancements (V2)

| # | Recommendation | Effort | Panelist |
|---|---------------|--------|----------|
| 9 | Inline preview pane (split view) | 1-2 hrs | Marcus |
| 10 | Audience badges (Internal/Client-Facing) | 15 min | Nina |
| 11 | Stale PDF warning (md modified > pdf date) | 30 min | Derek |
| 12 | Title clarity pass across all docs | 30 min | Nina |

---

## Panel Vote

| Panelist | Ship as-is? | Top priority |
|----------|-------------|-------------|
| Marcus Chen | ✅ Yes | Recently Opened |
| Maya Chen | ✅ Yes | Stat banner + toggle animation |
| Nina Rodriguez | ✅ Yes, with title review planned | Recommended Reading |
| Derek Simmons | ✅ Yes | PDF manifest auto-gen |

**Verdict: ✅ SHIP — with Quick Wins as immediate follow-up**

---

*Consultation recorded: 2026-02-09 01:56 CST*
