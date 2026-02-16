# WNQ — Wix "Best Flow" Build Guide

> **Reference Mockup:** [Live Preview](https://thesetupconcierge.github.io/command-center/business/mockups/wnq_best_flow_mockup.html)
> **Approach:** Start a **blank page** in Wix Editor, then add sections top-to-bottom matching this guide.

---

## 🎨 Design Tokens (Use These Everywhere)

```text
Background Dark:  #0D0D0D
Card Dark:        #1A1A1A
Gold Accent:      #FFB81C
Text White:       #F5F5F5
Text Dim:         #999999
Heading Font:     Playfair Display (available in Wix)
Body Font:        Inter (or Helvetica Neue in Wix)
```

---

## Section 1: HERO ⏱️ 10 min

**Wix Element:** Add Section → Blank (Full-Width)

| Setting | Value |
|---------|-------|
| **Background** | Solid `#0D0D0D` |
| **Height** | At least 600px (or "Fit to Screen") |

### Elements to Add

1. **Badge Text** (Text → Paragraph, small)

   ```text
   🦁 WARRIORS NEVER QUIT FOUNDATION
   ```

   - Font: Inter, 10px, letter-spacing 3px, color `#FFB81C`
   - Center aligned

2. **Headline** (Text → Title)

   ```text
   Faith in Action.
   Hope in Motion.
   ```

   - Font: Playfair Display, Bold, 56px (desktop) / 32px (mobile)
   - "Action" in `#FFB81C`, rest in `#F5F5F5`

3. **Subtext** (Text → Paragraph)

   ```text
   From the court to the classroom to the city block — we are empowering lives daily across Chicagoland.
   ```

   - Font: Inter, 16px, color `#999999`
   - Max width ~500px, centered

4. **Two Buttons** (side by side)
   - **"Give Now"** → Gold fill `#FFB81C`, black text, rounded corners
   - **"See Our Impact"** → Transparent, white border, white text

---

## Section 2: LEADERSHIP CUT OUTS ⏱️ 20 min

**Wix Element:** Add Section → Blank, 3 Columns

| Setting | Value |
|---------|-------|
| **Background** | Solid `#1A1A1A` |
| **Padding** | 80px top/bottom |

### Elements to Add

1. **Section Label** (centered above columns)

   ```text
   OUR BOARD
   ```

   - Font: Inter, 10px, letter-spacing 4px, color `#FFB81C`

2. **Section Title**

   ```text
   The Faces Behind the Mission
   ```

   - Font: Playfair Display, 36px, `#F5F5F5`

3. **Subtitle**

   ```text
   Driven by Integrity & Strength — the pillars that define everything we do.
   ```

   - Font: Inter, 14px, `#999999`

4. **Three Columns — Board Members:**
   - Use **Image** elements with transparent PNG cutouts from your Lightroom Edited folder
   - Below each image, add:

   **Column 1 (Center, Larger):**

   ```text
   Name: Ike Riley
   Title: PRESIDENT & FOUNDER
   ```

   **Column 2:**

   ```text
   Name: Terrence Acquah
   Title: BOARD MEMBER
   ```

   **Column 3:**

   ```text
   Name: Carley Riley
   Title: BOARD MEMBER
   ```

   - Names: Playfair Display, 18px, `#FFB81C`
   - Titles: Inter, 10px, letter-spacing 1px, `#999999`

> 💡 **Pro Tip:** Upload the cut-out PNGs with transparent backgrounds. Wix will layer them cleanly over the dark section.

---

## Section 3: IMPACT PILLARS ⏱️ 15 min

**Wix Element:** Add Section → Blank, 3 Columns

| Setting | Value |
|---------|-------|
| **Background** | Solid `#0D0D0D` |

### Section Header (centered)

```text
Label: THE WORK
Title: Proof of Purpose
Subtitle: Faith in Action isn't just a slogan — here's where it happens.
```

### Three Columns

**Column 1:**

```text
🏀
Sports Outreach
Mentoring through athletics and youth clinics — carrying forward Coach's 23-year tradition.
```

**Column 2:**

```text
🥘
Community Assistance
Clothing drives, food assistance, and emergency support for our neighbors in need.
```

**Column 3:**

```text
🎟️
Legacy Events
The Sneaker Ball, fundraisers, and community gatherings that bring Chicago together.
```

- Emoji: 36px
- Titles: Playfair Display, 20px, `#FFB81C`
- Body: Inter, 13px, `#999999`

### Gold Dividers

- Add **vertical lines** (Add → Shape → Line) between columns
- Color: `#FFB81C`, opacity 60%, height ~60% of section

---

## Section 4: BRAND TRINITY STRIP ⏱️ 5 min

**Wix Element:** Add Section → Blank (Narrow, ~120px height)

| Setting | Value |
|---------|-------|
| **Background** | Gradient: `#1A1A1A` → `#1f1811` → `#1A1A1A` (or just solid `#1A1A1A`) |

### Single Line of Text (centered)

```text
INTEGRITY  ·  STRENGTH  ·  FAITH
```

- Font: Playfair Display, Bold, 28px (desktop) / 18px (mobile)
- "INTEGRITY" in `#FFB81C`, rest in `#F5F5F5`
- Letter-spacing: 6px

> 💡 If you can't color individual words in Wix, make 3 separate text boxes and position them inline with gold dot dividers (small circles, `#FFB81C`).

---

## Section 5: COACH TRIBUTE TEASER ⏱️ 10 min

**Wix Element:** Add Section → Blank

| Setting | Value |
|---------|-------|
| **Background** | Solid `#1A1A1A` |
| **Padding** | 80px top/bottom |

### Elements

1. **Label**

   ```text
   THE LEGACY
   ```

   - Inter, 10px, `#FFB81C`, letter-spacing 4px

2. **Quote (large, italic)**

   ```text
   "If I can help one young man stay out of trouble or come to Christ through sports, all the sacrifice is worth it."
   ```

   - Playfair Display, Italic, 24px, `#FFB81C`

3. **Attribution**

   ```text
   — COACH IKE RILEY SR.
   ```

   - Inter, 12px, `#999999`, letter-spacing 2px

4. **Link Button**

   ```text
   Read His Full Story →
   ```

   - Text link style, `#FFB81C`, underline on hover
   - Link to: Coach's Legacy page

---

## Section 6: GIVING ENGINE ⏱️ 15 min

**Wix Element:** Add Section → Blank

| Setting | Value |
|---------|-------|
| **Background** | Solid `#0D0D0D` |

### Header

```text
Label: JOIN THE MOVEMENT
Title: Every Dollar Fights for the Next Generation
Subtitle: Your donation directly funds equipment, meals, mentorship, and scholarships.
```

### Four "Give Cards" (use Wix Boxes or Columns)

| Card | Amount | Label |
|------|--------|-------|
| 1 | **$25** | Supporter |
| 2 | **$50** | Champion |
| 3 | **$100** | Warrior |
| 4 | **$250+** | Legacy Builder |

- Box: `#1A1A1A` background, 1px border `rgba(255,184,28,0.1)`, rounded 16px
- Amount: Playfair Display, 32px, `#FFB81C`
- Label: Inter, 10px, `#999999`, uppercase

1. **"Donate Now" Button** below the cards
   - Gold fill `#FFB81C`, black text, large, centered

---

## ✅ Final Checklist

- [ ] All 6 sections added in order
- [ ] Gold accent (`#FFB81C`) used consistently
- [ ] Cut-out photos uploaded with transparent backgrounds
- [ ] Mobile preview checked (Wix → Mobile Editor)
- [ ] Social links in footer (TikTok + IG)
- [ ] "Coach's Legacy" page linked from Section 5

---

*Built by Setup Concierge — Sprint Command "Best Flow" v1*
