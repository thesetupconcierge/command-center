# CMS Deep Dive — Content Management for Setup Concierge

**Date:** 2026-02-09  
**Purpose:** Understand CMS concepts and how they apply to client website workflows

---

## What Is a CMS?

A **Content Management System** separates two things that are usually tangled together:

| Layer | What it does | Example |
|-------|-------------|---------|
| **Content** | The data — text, images, dates, bios, prices | "Warriors Never Quit" heading, team bios, event dates |
| **Presentation** | How that data looks on screen — layout, colors, fonts | The HTML/CSS template that displays the heading |

**Without a CMS:** You edit the website directly. Change a heading? Open the page editor, find the text, retype it. Add an event? Copy a section, paste, manually fill out fields.

**With a CMS:** You edit a form or spreadsheet. The website reads from it automatically.

---

## The Three Types of CMS

### 1. Traditional CMS (WordPress, Squarespace, Wix)

Content + presentation bundled together. You edit within the platform.

```
┌──────────────────────────────┐
│         Wix / WordPress       │
│  ┌─────────┐  ┌────────────┐ │
│  │ Content  │→ │  Templates │ │
│  │ Database │  │  (built-in)│ │
│  └─────────┘  └────────────┘ │
│         → Renders website     │
└──────────────────────────────┘
```

**Pros:** All-in-one, easy for clients, built-in hosting  
**Cons:** Locked to that platform, limited customization, slow for bulk changes

### 2. Headless CMS (Sanity, Strapi, Contentful)

Content lives in a separate system. Your website pulls from it via API.

```
┌──────────┐        ┌──────────────┐
│ Headless │  API   │ Your Website │
│   CMS    │───────→│ (Vite/Next)  │
│ (Sanity) │        │ Reads data   │
└──────────┘        └──────────────┘
```

**Pros:** Use any frontend, one CMS feeds multiple sites, powerful content modeling  
**Cons:** Requires dev setup, two systems to manage

### 3. File-Based / Flat CMS (Markdown, Google Sheets, Airtable)

No database — content lives in files or spreadsheets you already use.

```
┌──────────────┐        ┌──────────────┐
│ Google Sheet │  read   │ Build Script │
│ or Markdown  │────────→│ Generates    │
│ files        │         │ HTML pages   │
└──────────────┘        └──────────────┘
```

**Pros:** Zero cost, no new tools, you already know how to edit spreadsheets  
**Cons:** Manual rebuild step, no live preview for clients

---

## Wix Content Manager (Built-In CMS)

Wix has a CMS built in — it's called **Content Manager** (formerly Wix Data). Here's how it works:

### Core Concepts

| Term | What it means |
|------|--------------|
| **Collection** | A database table (like a spreadsheet) — e.g., "Team Members" |
| **Field** | A column in the collection — e.g., "Name", "Bio", "Photo" |
| **Dynamic Page** | A page template that auto-generates one page per row in the collection |
| **Dataset** | The connection between a collection and page elements |
| **Repeater** | A layout component that loops over rows (like a card grid) |

### Example: WNQ Team Page

**Currently:** Each team member's bio, image, and role is manually placed on the page.

**With CMS:**

1. Create a "Team Members" collection:

   | Name | Role | Bio | Photo | Order |
   |------|------|-----|-------|-------|
   | Daryl | Founder | "Warriors Never Quit was born..." | daryl.jpg | 1 |
   | Jane | Coach | "With 10 years of fitness..." | jane.jpg | 2 |

2. On the Team Page, add a **Repeater** connected to this collection
3. Each card in the repeater maps fields → elements (Name → heading, Bio → paragraph, Photo → image)
4. **To add a new member:** Just add a row to the collection. The page updates automatically.

### Collections You Could Create for WNQ

| Collection | Fields | Used On |
|-----------|--------|---------|
| Team Members | Name, Role, Bio, Photo, SortOrder | Team page |
| Events | Title, Date, Location, Description, Image, RegistrationLink | Events page |
| Testimonials | Quote, Author, Rating | Homepage |
| Programs | Name, Description, Price, Schedule, Image | Programs page |
| Gallery | Image, Caption, Category, Date | Gallery page |
| FAQs | Question, Answer, Category | FAQ section |

### How to Set It Up

1. **Wix Editor** → Click "+" icon → **CMS** → **Create Collection**
2. Name it (e.g., "Team Members"), add fields
3. Enter your data rows
4. On the page, add a **Repeater** element
5. Click **Connect to Data** → select your collection
6. Map each element in the repeater to a field
7. Preview — the repeater auto-populates from the collection

### Wix CMS Pricing

- **Free:** 1 collection, 50 items
- **Business plan ($17/mo):** 25 collections, 10,000 items
- **Business Elite ($159/mo):** Unlimited

> WNQ's existing Wix plan likely supports CMS — check Settings → Subscriptions.

---

## How a CMS Fits Into Your Workflow

### Current Process (Manual)

```
Client provides info → You manually build/edit each page → Upload images one by one → Test → Publish
```

**Time per update:** 30–60 minutes for simple content changes

### With Wix CMS

```
Client provides info → You enter it into collections → Site auto-updates → Publish
```

**Time per update:** 5–10 minutes

### With Headless CMS + /build-site

```
Client fills out CMS forms → /build-site reads CMS data → Generates complete site → Deploy
```

**Time per new site:** Mostly automated

---

## Headless CMS Options (For Future /build-site Integration)

| Platform | Free Tier | Best For |
|----------|-----------|----------|
| **Sanity** | 3 users, 10K API calls/mo | Flexible content modeling, great DX |
| **Strapi** | Self-hosted (free forever) | Full control, open source |
| **Contentful** | 1 space, 5K records | Enterprise-ready, robust |
| **Airtable** | Free for basic use | Spreadsheet-like, non-technical clients love it |
| **Google Sheets** | Free | Zero learning curve, instant collaboration |

### Simplest Starting Point: Google Sheets as CMS

For your `/build-site` workflow, Google Sheets is the fastest path:

1. Create a Sheet per content type (Team, Events, etc.)
2. Share it with the client for content input
3. Your build script reads the sheet via Google Sheets API
4. Generates pages from templates using the data
5. Output = complete website, ready to deploy

**No new tools for the client to learn. They already know spreadsheets.**

---

## Action Items

- [ ] **Quick win:** Set up Wix Content Manager for WNQ Events (replace manual event editing)
- [ ] **Next:** Create Team Members collection in Wix for WNQ
- [ ] **Explore:** Google Sheets as CMS input for `/build-site` workflow
- [ ] **Future:** Evaluate Sanity.io for headless CMS when client volume grows

---

## Key Takeaway

> **A CMS doesn't replace you — it makes you faster.**  
> Instead of being a manual content editor, you become the architect of the system.  
> Clients can update their own content. You focus on design, strategy, and scaling.
