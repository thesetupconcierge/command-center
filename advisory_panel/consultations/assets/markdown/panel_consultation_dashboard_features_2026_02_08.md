# Advisory Panel Consultation — Interactive Dashboard Features

**Date:** February 8, 2026  
**Concept:** Interactive single-page HTML dashboard for Setup Concierge  
**Goal:** Accountability tool that tracks all 66 action items, with flexibility for future AI chat integration

---

## The Concept

We're building a local HTML dashboard — one file, no server, double-click to open. It pulls together all action items across WNQ, Setup Concierge website, and Black Nexus into an interactive tracker. Future versions will include an AI chat panel to continue working with Antigravity directly from the dashboard.

**V1 Priorities:**

- Accountability — keep the needle moving
- Low overhead — no complex setup
- Flexible foundation — easy to extend later

**Question for the panel:** What features should V1 include to maximize accountability and usefulness, without overbuilding?

---

## Panel Responses

### 🎯 Marcus Chen — Product Manager

> "For V1, ruthlessly prioritize **the daily question: 'What should I do right now?'** Everything else is noise.
>
> **Must-have features:**
>
> 1. **'Focus Mode'** — Show only 3-5 tasks for today, not all 66. Decision fatigue kills productivity.
> 2. **Progress ring** — A big, satisfying completion percentage at the top. Visual momentum matters.
> 3. **One-click status toggle** — ⬜ → 🔄 → ✅ with a single click. No modals, no extra steps.
> 4. **'Blocked' flag** — Tasks waiting on the client should be visually distinct (red border, greyed out) so you're not staring at things you can't do right now.
>
> **Skip for V1:** Calendar view, Gantt charts, notifications. They're overhead disguised as features."

---

### 📈 Raymond Cross — Growth Advisor

> "The chat panel is the killer feature — but you're right not to rush it. For V1, here's the bridge:
>
> **Decision Log** — A simple timestamped text input at the bottom of the dashboard. Type a quick note like 'Sent WNQ invoice' or 'Decided to raise photography price to $600' and hit Enter. It saves to localStorage and creates a running journal.
>
> Why? Because when you DO connect AI chat later, that log becomes context. The AI can read your decision history and pick up exactly where you left off. Build the habit now, wire the intelligence later.
>
> Also: add a **'Quick Launch' bar** at the top with direct links to your most-used tools — WordPress admin, Wix editor, this Gemini conversation, your email. One click to jump into action."

---

### 🏗️ Victor Oduya — Project Architect

> "Think in **layers**. V1 should nail the data layer so V2+ can add intelligence on top.
>
> **Architecture recommendations:**
>
> 1. Store all task data as a **JSON object** in the HTML. This makes it trivial to update, export, or eventually pull from an API.
> 2. Use **localStorage** for state (checkbox status, notes) so nothing is lost between sessions.
> 3. Structure the HTML with **semantic sections** and data attributes — when you add AI chat later, it can read the DOM to understand what's on screen.
>  
> **Feature suggestion:** Add an **'Export Snapshot'** button that copies the current dashboard state as formatted text. That way you can paste it into a chat with Antigravity to sync up instantly."

---

### 🔧 Derek Simmons — Ops Manager

> "Accountability = **streaks and pressure**. The dashboard needs to create gentle urgency.
>
> **Add these:**
>
> 1. **'Days Since Last Update'** counter per area. If WNQ hasn't had a task completed in 5+ days, it turns red. Guilt works.
> 2. **Weekly velocity** — How many tasks did you complete this week vs. last week? Even a simple ↑↓ arrow next to a number.
> 3. **'Items Waiting on Client' count** — Big and visible. This is ammo for follow-up conversations. *'Hey WNQ, I've got 8 items waiting on your team.'*
>
> **Skip:** Anything that requires manual data entry beyond toggling a checkbox. If it takes effort to maintain, you'll stop using it by week 2."

---

### 📣 Nina Rodriguez — Marketing Manager

> "Make it **feel premium**. This dashboard is a reflection of your brand — even if only you see it.
>
> **Design suggestions:**
>
> 1. **Dark mode default** — Dark background, gold (#FFB81C) and blue (#0047AB) accents. These are your WNQ brand colors and they look stunning on dark backgrounds.
> 2. **Glassmorphism cards** — Frosted glass effect on each section. Modern, clean, professional.
> 3. **Micro-animations** — Checkboxes should animate when toggled. Progress bars should fill smoothly. These tiny details make you WANT to use the tool.
> 4. **Setup Concierge branding** in the corner — logo or wordmark. You're building your own ops tool. Own it."

---

### 📱 Jasmine Taylor — Social Media Manager

> "The chat panel should start as a **'Captain's Log'** — quick voice to your future self.
>
> Each entry has:
>
> - Timestamp (auto)
> - A short note (typed)
> - Optional tag: `#decision`, `#blocker`, `#win`, `#idea`
>
> Filter by tag later. When you add AI chat, those tags become structured context. For now, it's just a fast way to journal your day without opening another app.
>
> Also: **add a 'Wins' section** at the top. List completed items with dates. Seeing what you've DONE is as motivating as seeing what's left."

---

### 💰 Evelyn Tran — Financial Strategist

> "Add a **Revenue Tracker widget** — not just a line item, but a visual.
>
> - Monthly goal bar (set a target, see the fill)
> - Invoiced vs. Collected breakdown
> - Running total for the year
>
> When you complete a photography session or close a Black Nexus deal, seeing that revenue bar fill up connects the task grind to actual money. That's accountability with teeth."

---

### 🎨 Maya Chen — Visual Designer

> "The layout should follow a **3-column approach** on desktop, collapsing to single column on mobile:
>
> | Left (narrow) | Center (main) | Right (narrow) |
> |---|---|---|
> | Quick Stats | Task Tracker | Captain's Log |
> | Progress rings | Filtered task lists | Decision journal |
> | Quick Links | Phase sections | Chat (future) |
>
> Use **CSS Grid** so the layout is dead simple to adjust later. And please — a sticky header with the scorecard so you always see progress even while scrolling.
>
> **Color palette suggestion:**
>
> - Background: `#0a0a0f` (near-black)
> - Cards: `rgba(255,255,255,0.05)` with `backdrop-filter: blur(20px)`
> - Primary accent: `#FFB81C` (gold)
> - Secondary: `#0047AB` (blue)
> - Success: `#4ade80`
> - Warning: `#f59e0b`
> - Danger: `#ef4444`"

---

### 🧠 James Worthington — Business Strategist

> "One feature that will pay dividends: **'This Week's Priorities' — editable.**
>
> Auto-populate from the 🔴 High Priority items, but let Justice drag/reorder or pin specific tasks. The act of choosing your top 5 for the week is itself an accountability practice. It forces strategic thinking: *'What actually moves the business forward this week?'*
>
> V2 idea for later: the AI chat reads your weekly priorities and checks in — *'You set 5 priorities on Monday. You've completed 2. What's blocking the other 3?'*"

---

### 📝 Sarah Okonjo — Documentation Manager

> "**Keep the markdown files as the source of truth.** The HTML dashboard should be a *view* into the data, not a replacement for it.
>
> For V1, hardcode the data into the HTML (fast to build). But structure it so that in V2, you could have Antigravity regenerate the dashboard from the markdown files whenever tasks change. The `/build-site` workflow pattern you already have would work perfectly for this.
>
> Also: add a **'Last Synced' timestamp** so you know when the dashboard was last updated from the source files."

---

## Consensus: V1 Feature List

| Feature | Champion | Priority |
|---------|----------|----------|
| **Progress rings / scorecard header** | Marcus, Maya | 🔴 Must |
| **Interactive checkboxes** (⬜→🔄→✅) | Marcus, Derek | 🔴 Must |
| **Filter by area** (WNQ / SC / BN) | Marcus | 🔴 Must |
| **Blocked items highlighted** | Marcus, Derek | 🔴 Must |
| **Captain's Log** (timestamped notes) | Raymond, Jasmine | 🔴 Must |
| **Quick Links bar** | Raymond | 🟡 Nice |
| **Dark mode + glassmorphism** | Nina, Maya | 🔴 Must |
| **Micro-animations** | Nina | 🟡 Nice |
| **3-column layout** (Stats / Tasks / Log) | Maya | 🔴 Must |
| **Revenue tracker widget** | Evelyn | 🟡 Nice |
| **"This Week's Priorities" section** | James | 🟡 Nice |
| **Wins section** (completed items) | Jasmine | 🟡 Nice |
| **Days since last update counter** | Derek | 🟡 Nice |
| **Export Snapshot button** | Victor | 🟡 Nice |
| **Last Synced timestamp** | Sarah | 🟡 Nice |
| **Data stored as JSON in HTML** | Victor | 🔴 Must (architecture) |

---

## Recommended V1 Scope

**Build these (core):**

- Progress scorecard with rings
- Interactive 3-state checkboxes per task
- Filter/collapse by area and phase
- Blocked items visually flagged
- Captain's Log panel (timestamped notes, localStorage)
- Dark mode with gold/blue accents and glass cards
- Data as JSON, state in localStorage

**Include if time allows:**

- Quick Links bar
- Revenue widget
- Micro-animations on interactions
- Export Snapshot

**Defer to V2:**

- AI chat integration (API key + Gemini connection)
- Auto-sync from markdown files
- Weekly priorities editing
- Streak/velocity tracking

---

*Panel consultation completed — February 8, 2026*
