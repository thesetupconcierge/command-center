# Advisory Panel Review — WNQ Custom Website Build

**Date:** February 12, 2026
**Session Focus:** WNQ custom website build — page structure, Coach tribute, staging site alignment
**Led By:** 👔 Darius Cole (Sprint Command Ops Director)
**Panelists:** Derek Simmons · Noa Chen · Aiden Shah · Mira Voss · RayRay Navarro

---

## Briefing Summary

Action item **a9** — Build WNQ website using /build-site pipeline ($3,000 deliverable). Current build has 1 of 8 required pages: `index.html` (Home). The client's staging site on Wix already has a defined structure and content that our custom build needs to match *and exceed*. This review audits the gap and directs the build.

---

## 🔑 Critical Finding: This Is an 8-Page Site, Not 6

The brand kit says 6 pages. The **client's actual requirements** (from gameplan + staging site) demand **8 pages**:

| Page | Status | Notes |
|---|---|---|
| Home | ✅ Built | `index.html` — polished, 374 lines |
| About | ❌ Missing | Board members (Ike, Terrence, Carley) + mission |
| Events | ❌ Missing | Sneaker Ball, Career Workshop, Youth Clinic |
| Donate | ❌ Missing | 4 donation tiers |
| Volunteers | ❌ Missing | Ways to help + form |
| Contact | ❌ Missing | Contact form + social |
| **Coach Tribute** | ❌ Missing | **Museum-style memorial** — 7 sections, emotionally core |
| **Scholarship** | ❌ Missing | Linked from tribute — eligibility, essay, giving levels |

> [!IMPORTANT]
> The Coach Ike Riley Sr. Tribute page is the **emotional core** of this website. The client specifically asked for a "living museum / memorial feel." This is NOT a standard bio page — it's the centerpiece that makes WNQ unique.

---

## Panel Feedback

### 👔 Darius Cole — Ops Director (Sprint Command Lead)

> **Directive: Reorder the build to front-load what the client cares about most.**

The client meeting notes make it crystal clear — Ike wants the **Coach tribute** prominently featured. We need to build the tribute and scholarship pages *before* the standard pages (contact, volunteers). Those are boilerplate. The tribute is what sells this as a $3K custom build vs a $200 Wix template.

**Build order should be:**

1. Coach Tribute (highest emotional impact — shows the client we understand their vision)
2. Scholarship (linked from tribute — shows depth)
3. About (board members — connects to Coach's legacy)
4. Events (active content)
5. Donate (revenue-generating)
6. Volunteers + Contact (standard, build last)

---

### 🛡️ RayRay Navarro — Delivery & QA Lead

> **Verdict: The image strategy is the bottleneck. Solve it now.**

The `assets/images/` folder has 121 giant PNG cutouts (10-19MB each) from the same photo session — that's ~1.5GB of essentially the same 3 people. This is what caused the previous build session to hang.

**Action items:**

1. **Do NOT copy all 121 cutouts into the build.** Select 3-5 best cutouts for the board member cards
2. **The user is downloading more media from WNQ's social/Wix** — wait for those before building photo-heavy pages (tribute, events gallery)
3. **For the tribute page specifically:** We need Coach's photos from the original `/ike-riley-sr-life` Wix page. The tribute content references his coaching days, family, and career — cutout photos of board members won't cut it
4. **Optimize all images** — compress PNGs to WebP, target <500KB per image for web performance

> [!WARNING]
> The Coach Tribute page **cannot be fully built without Coach's actual photos**. The user needs to provide historical photos from the family. Build the HTML structure and placeholder layout now, but flag to the user that photos are required.

---

### 🎨 Noa Chen — Creative & Brand Director

> **Verdict: The tribute page needs a completely different design treatment from the rest of the site.**

The copy guide and tribute content doc are explicit: *"Dark, reverent background with gold accents. Large photos. Timeline markers. Pull quotes between sections."* This is NOT the same light/purple design as the homepage.

**Design specifications for the tribute:**

- **Background:** Near-black (`#0a0a0a`) with subtle gradient
- **Accent:** Gold (`#FFB81C`) for timeline markers, borders, and pull quotes
- **Typography:** Larger, more editorial. Serif for quotes, Outfit for headers
- **Layout:** Full-width photo sections, timeline with year markers, large pull quotes between sections
- **Mood:** Museum memorial — think National Memorial for Peace and Justice, not a standard nonprofit "about us"

**For the rest of the site:**

- The staging site uses Royal Blue (#0047AB) + Gold (#FFB81C), but our brand kit has Purple (#5B2D8E) as primary
- **Decision needed:** Which palette does the client actually want? The brand kit and staging site disagree

> [!CAUTION]
> The brand kit JSON uses **Purple (#5B2D8E)** as primary. The staging Wix site and original branding docs use **Royal Blue (#0047AB)**. These are different colors. The current `index.html` build uses purple. If the client prefers royal blue, we need to update `variables.css`.

---

### 📊 Aiden Shah — Revenue Strategist

> **Verdict: The tribute page IS the sales pitch. Build it like a case study.**

This is a $3,000 deliverable. What's going to make Ike say "yes, this is worth the money"?

Not the donate page. Not the contact form. It's seeing his **father's legacy presented in a way Wix never could**. A museum-style tribute with timeline animations, large photos, pull quotes, and smooth scroll transitions — that's what justifies custom over template.

**Revenue priorities:**

1. **Tribute page = demo page.** When you send the preview link, lead with this page
2. **Donation tiers should match the scholarship page** — both use the same WNQ giving levels ($25, $100, $250, $500)
3. **The membership structure** from the gameplan (`membership_structure.md`) isn't in scope for this build — don't scope-creep into Phase 3 territory

---

### 🧭 Mira Voss — Workflow Strategist

> **Verdict: Separate what you can build NOW vs what's blocked on the client.**

| Can Build Now | Blocked on Client |
|---|---|
| About page (board bios + cutout photos exist) | Coach Tribute photos (need historical images) |
| Events page (3 events defined, dates TBD) | Event dates (still TBD from client) |
| Donate page (4 tiers defined) | Scholarship award amounts |
| Volunteers page (copy + form) | Testimonials for testimonials section |
| Contact page (copy + social links) | Impact statistics (youth mentored, etc.) |
| Tribute HTML structure + content | Coach's personal/family photos |
| Scholarship HTML structure + content | Application form integration method |

**Recommendation:** Build everything you can NOW — all 7 pages with HTML structure and existing content. For blocked items, use professional placeholders (e.g., "Date Announced Soon" instead of "TBD"). When photos arrive, slot them in.

---

### 👔 Derek Simmons — Ops & Team Manager

> **Verdict: This is a well-documented project. Execute the build in one sprint.**

The documentation quality on this project is excellent — copy guide, tribute content, scholarship plan, gameplan, and branding guidelines are all ready. The only risk is scope creep (membership tiers, testimonials, photo galleries — all Phase 3/4 items).

**My directive:**

1. **Stick to the 8-page scope.** Resist adding Phase 3/4 features
2. **Use the existing CSS design system.** The `variables.css`, `styles.css`, and `responsive.css` already define everything — don't rewrite
3. **The nav needs 8 items, not 6.** Add "Legacy" (tribute) and keep Scholarship as a linked sub-page from Legacy
4. **Time estimate:** 7 remaining pages × ~45 min avg = **~5 hours of build work**

---

## Consensus Action Items

| Priority | Action | Owner |
|---|---|---|
| **P0** | Decide: Purple (#5B2D8E) vs Royal Blue (#0047AB) as primary color — ask the user | Justice |
| **P0** | Build Coach Tribute page structure (7 sections + scholarship link) | AI |
| **P0** | Build About page (3 board members with cutout photos) | AI |
| **P1** | Build Events, Donate, Volunteers, Contact pages | AI |
| **P1** | Build Scholarship page structure | AI |
| **P1** | Update nav to 8 pages (add Legacy link) | AI |
| **P2** | Wait for user's downloaded media, then integrate into pages | AI |
| **P2** | Compress/optimize all images to WebP <500KB | AI |

---

## Revised Build Order

```
1. Coach Tribute (legacy.html)     ← emotional core, demo page
2. Scholarship (scholarship.html)  ← linked from tribute
3. About (about.html)              ← board members, connects to Coach
4. Events (events.html)            ← active content
5. Donate (donate.html)            ← revenue-generating
6. Volunteers (volunteers.html)    ← form-based
7. Contact (contact.html)          ← standard
8. Nav update + image optimization ← polish
```

---

*Panel adjourned. Next step: confirm color palette with user, then begin build starting with Coach Tribute.*
