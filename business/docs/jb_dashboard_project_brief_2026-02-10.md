# 🧠 Project Brief: Black Nexus Command Center

**For:** JB Scott (`jblaflare-code`)  
**From:** Justice McKinney (`thesetupconcierge`)  
**Date:** February 10, 2026

---

## What You're Building

A **single-page dashboard** that tracks everything Black Nexus needs to get off the ground — entity formation, branding, operations, and go-to-market. Think of it as mission control for our business.

It's one HTML file. No frameworks. No installs. Just HTML + CSS + JavaScript.

> You'll use your AI coding assistant (Antigravity) to help you build this. Ask it questions, have it explain code, and use it to iterate. That's the whole point — this is a real project built with real tools.

---

## What It Should Do

1. **Display task sections** — each section is a phase of our business plan
2. **Let you check tasks off** — clicking a task cycles it through states (todo → in progress → done)
3. **Show progress** — some kind of visual indicator of how far along each phase is
4. **Look good** — dark theme, clean layout, feels professional

Beyond that? **Your call.** Make design choices. Pick colors. Decide the layout. The only rule is: it should work and it should look like something you'd be proud to show someone.

---

## The Task Data

Here are the actual tasks the dashboard needs to display. Copy this into your JavaScript:

```javascript
const TASKS = {
  entity_formation: {
    title: "Entity Formation",
    phase: 1,
    tasks: [
      "File Articles of Organization (Wyoming)",
      "Appoint Wyoming Registered Agent",
      "Draft Operating Agreement (51/49 voting, 50/50 profit)",
      "Partner reviews and signs Operating Agreement",
      "Obtain EIN from IRS",
      "Get Wyoming Certificate of Good Standing",
      "File Illinois Foreign LLC Application",
      "Appoint Illinois Registered Agent"
    ]
  },
  branding: {
    title: "Branding & Identity",
    phase: 2,
    tasks: [
      "Define brand positioning and one-liner",
      "Create logo (primary + icon)",
      "Establish color palette and typography",
      "Design social media templates",
      "Create pitch deck template"
    ]
  },
  github_collab: {
    title: "GitHub & Collaboration",
    phase: "Active",
    tasks: [
      "GitHub collaboration guide created ✅",
      "GitHub org created: blacknexuscda ✅",
      "JB invited to org ✅",
      "Create first repo and push initial files",
      "Enable branch protection on main"
    ]
  },
  operations: {
    title: "Operations Setup",
    phase: 3,
    tasks: [
      "Open Black Nexus business bank account",
      "Draft Management Agreement (SC → BN)",
      "Draft Partner Vesting Schedule",
      "Set up bookkeeping (Wave or QuickBooks)",
      "Create SOP library"
    ]
  },
  go_to_market: {
    title: "Go-to-Market",
    phase: 4,
    tasks: [
      "Launch Black Nexus website or landing page",
      "Announce on social media",
      "Identify first 3 outreach targets",
      "Close first Black Nexus client"
    ]
  }
};
```

---

## Technical Requirements

| Requirement | Details |
|---|---|
| **Files** | Single `index.html` (CSS and JS can be inline or separate files — your choice) |
| **Theme** | Dark background, light text. Beyond that, go wild. |
| **Responsive** | Should look decent on a phone and a laptop |
| **State** | Task states should persist on refresh (use `localStorage`) |
| **No frameworks** | Pure HTML, CSS, and JavaScript — no React, no Tailwind, no npm |

### Concepts You'll Practice

- **HTML structure** — semantic elements, sections, headings
- **CSS layout** — flexbox or grid, media queries for mobile
- **JavaScript** — DOM manipulation, event listeners, `localStorage`, loops
- **Data-driven rendering** — building HTML from a JavaScript object (the `TASKS` data above)

---

## How to Work

### Phase 1: Build Locally

1. Create a folder on your computer for this project (e.g. `command-center`)
2. Create `index.html` inside it (and optionally `style.css` + `script.js`)
3. Open `index.html` in your browser to preview as you build
4. Use your AI assistant to help — ask it to explain things as you go

> 💡 **Tip:** Keep your browser open next to your editor. Save the file, refresh the browser, see your changes. That's the feedback loop.

### Phase 2: Push to GitHub (When You're Ready)

When your dashboard is working and you're happy with it, connect it to the team repo:

```bash
# From inside your project folder:
git init
git remote add origin https://github.com/blacknexuscda/command-center.git
git add .
git commit -m "feat: initial dashboard build"
git push -u origin main
```

> If you haven't used Git before, ask your AI assistant to walk you through it step by step. That's part of the learning.

### Phase 3: Pull Requests (Ongoing)

After the first push, future changes go through **Pull Requests** so we can review each other's work:

```bash
git checkout -b feature/add-progress-bars
git add .
git commit -m "feat: add progress bars to each section"
git push origin feature/add-progress-bars
```

Then go to GitHub → your repo → create a **Pull Request**. Justice will review and leave feedback.

---

## Stretch Goals (If You Want More)

These are optional. Don't feel pressured — but if you're feeling it:

- [ ] Add a progress ring or progress bar for each phase
- [ ] Add an activity log (type a note, hit enter, it saves with a timestamp)
- [ ] Add a scorecard at the top (total tasks, % complete, etc.)
- [ ] Add smooth animations when checking off tasks
- [ ] Make it installable as a PWA (Progressive Web App)

---

## What "Done" Looks Like

- [ ] All 5 task sections render with their tasks
- [ ] Clicking a task changes its state (and it persists on refresh)
- [ ] The page looks clean and professional on desktop and mobile
- [ ] Code is pushed to `blacknexuscda/command-center` on GitHub
- [ ] You can explain what your code does if someone asks

---

## Reference

Justice built a version of this for Setup Concierge (his consulting company). You can look at it for inspiration — but **don't copy it**. Build yours from scratch. That's how you learn.

The reference dashboard is at:

```
file:///C:/GitHub Local/Business Ideas/Setup Concierge/Dashboard/index.html
```

> You won't have access to this file directly — ask Justice if you want to see it in action. Or better yet, build yours first, then compare.

---

*Black Nexus CDA — Creative Development Agency*  
*github.com/blacknexuscda*
