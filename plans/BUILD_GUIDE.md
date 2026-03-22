# Build Guide: MALL for Lifelong Learning — React + Vite Website

## For Claude Code (and the developer feeding it context)

---

## 1. WHAT WE HAVE & WHAT'S NEXT

### Source Materials
- **`website_content_plan.md`** — All extracted content, data, quotes, and copy from the dissertation
- **`DESIGN.md`** — Full design system (colors, typography, spacing, component rules)
- **`code.html`** — Stitch-generated HTML reference (mobile-first layout, use as structural starting point)

### The Goal
A scroll-driven, single-page research showcase website that makes conference attendees (scanning a QR code) go "wow" at the UI, then go "wow" again at the research. It should feel like a premium editorial feature — not a PowerPoint deck pasted onto the web.

### Tech Stack
- **Bun** (runtime + package manager)
- **Vite** (build tool)
- **React 19** (UI)
- **Tailwind CSS v4** (styling — already in the Stitch output, keep it)
- **Motion** (formerly Framer Motion) — primary animation library
- **React Router** (if multi-page) or just anchor sections (if single-page scroll)

---

## 2. HONEST ASSESSMENT OF THE STITCH OUTPUT

The Stitch HTML gives us a solid **design system foundation** — the colors, fonts (Newsreader + Manrope), dark navy palette, and general editorial tone are all strong. But the actual layout and interaction design are lukewarm because:

**What's working:**
- Color palette (navy base, warm gold/amber accents) — keep as-is
- Font pairing (Newsreader serif headlines + Manrope body) — great
- The glassmorphic sticky header — nice touch
- The bottom nav concept (for mobile) — could be useful
- The "Study at a Glance" stat grid — good bones
- The pull-quote section — the vertical gold bar is a nice signature element

**What's not working (and why it feels flat):**
- Everything is the same width and padding — there's no rhythm, no surprise
- The takeaway cards are just stacked rectangles with icons — they don't *feel* important
- The hero has a generic stock photo with a grayscale filter — it should be typography-driven, not image-dependent
- The RQ section looks like a settings menu, not a research framework
- There are no scroll animations — it's a static page that you scroll through
- No data visualization or interactive elements — the numbers just sit there
- The "Meet the Researcher" section is an afterthought at the bottom
- Everything loads at once — no reveal, no pacing, no story

**The fix isn't a redesign — it's adding motion, rhythm, and intentionality to what's already there.**

---

## 3. RECOMMENDED LIBRARIES

### Core: Motion (formerly Framer Motion)
```bash
bun add motion
```
This is the primary animation engine. It's the most popular React animation library (30k+ GitHub stars, 8M+ weekly npm downloads), has excellent DX, and handles everything we need: scroll-triggered reveals, layout animations, hover states, entrance/exit transitions.

**Why Motion over alternatives:**
- Declarative API that works naturally with React components
- Built-in `useInView` hook for scroll-triggered animations
- `useScroll` and `useTransform` for scroll-linked parallax effects
- Spring physics for natural-feeling motion
- `whileHover` / `whileTap` for interactive states
- `AnimatePresence` for page/section transitions
- Lightweight via `LazyMotion` for code splitting
- Respects `prefers-reduced-motion` for accessibility

### Supporting: Magic UI (cherry-pick components)
```bash
bunx shadcn@latest init  # if not already set up
# Then copy individual components from magicui.design
```
Magic UI is a collection of copy-paste animated components built on React + Tailwind + Motion. Don't install the whole thing — cherry-pick specific components that add polish:

**Components worth grabbing:**
- **`NumberTicker`** — Animated counting numbers. Perfect for the "Study at a Glance" section (0 → 15 participants, 0 → 83 age range, etc.)
- **`ScrollProgress`** — A thin progress bar at the top of the page showing how far you've scrolled. Adds a sense of pacing to the editorial experience.
- **`BlurIn` / `FadeIn` / `WordPullUp`** — Text entrance animations for headlines. Make the hero title feel like it's being *presented*, not just loaded.
- **`Marquee`** — If you want a scrolling ticker of participant quotes, this is a polished way to do it.
- **`ShimmerButton`** — For the CTA (e.g., "Explore the Findings" or "Contact Researcher")

### Optional Enhancements
- **`@react-spring/web`** — Only if you want physics-based spring animations for specific interactive elements (e.g., draggable cards). Motion handles most of this already.
- **`lenis`** or **`@studio-freight/lenis`** — Smooth scroll library. Gives the page that buttery, slightly inertial scroll feel that premium editorial sites have. Small addition, big feel improvement.
- **`react-intersection-observer`** — If you want a simpler API than Motion's built-in `useInView` for triggering section reveals.

---

## 4. SPECIFIC UI IMPROVEMENTS — SECTION BY SECTION

### 4a. Hero Section — Make It a Moment

**Current problem:** Generic stock photo with a grayscale filter. Title is fine but doesn't *land*.

**Fix:** Make this typography-driven. Kill the stock photo. The title itself IS the hero.

```
Layout concept:
- Full viewport height (min-h-screen)
- KICKER: "FEATURED RESEARCH" in tertiary gold, uppercase, tracked out
- TITLE: "MALL for Lifelong Learning" — massive Newsreader italic, like 6xl-8xl
- SUBTITLE: One sentence summary in Manrope, lighter opacity
- RESEARCHER: "Jihye Kim, Ph.D. — University of South Florida"
- SCROLL CUE: A subtle animated chevron or "Scroll to explore" at the bottom

Animation:
- Title words stagger in with BlurIn or WordPullUp (200ms delay per word)
- Subtitle fades in 400ms after title completes
- Researcher name fades in last
- Scroll cue pulses gently (CSS animation, no library needed)
- Optional: a subtle radial gradient glow behind the title using primary-container gold
```

### 4b. The 3 Big Takeaways — Create Visual Weight

**Current problem:** Three identical stacked cards with Material icons. They look like notification cards, not "big ideas."

**Fix:** Give each takeaway a distinct visual identity and use Motion's `useInView` to reveal them as you scroll.

```
Layout concept:
- Large section number (01, 02, 03) in display-lg, very low opacity (15-20%)
  positioned as a background element — like a chapter marker
- Headline in headline-lg Newsreader
- 2-3 sentence body in body-lg Manrope
- Each card staggers in from the left as you scroll to it
- Consider alternating alignment (first left-aligned, second right-aligned, third left)
  to create asymmetry per the DESIGN.md guidelines

Animation:
- Each card: opacity 0 → 1, translateY 40px → 0, staggered 150ms
- The large number slides in from the left (translateX -60px → 0)
- Use motion.div with useInView, triggerOnce: true
```

### 4c. Study at a Glance — Animated Numbers

**Current problem:** Numbers are just sitting there statically in a grid.

**Fix:** Use Magic UI's `NumberTicker` (or build a simple one with Motion's `useSpring`) so numbers count up when the section scrolls into view.

```
Numbers to animate:
- 15 → participants
- 83 → oldest participant age  
- 10 → weeks duration
- 6 → case studies
- 1,410 → minutes Young-cheol spent learning
- 93.75% → retention rate (15 out of 16 stayed)

Layout: Keep the grid but make the first row bigger (2 featured stats spanning full width)
then 4 smaller stats below. Per DESIGN.md: "If a row has three items, consider 
making the first item 50% width and the remaining two 25%"

Animation: Numbers count up from 0 over ~1.5 seconds when scrolled into view
```

### 4d. Research Questions — Make Them Navigable

**Current problem:** They look like an accordion/settings menu. The arrow icons feel like "go to next screen" affordance, not "explore this idea."

**Fix:** Make each RQ a more substantial card with a preview of what you'll learn. If this is single-page, they can smooth-scroll to deeper sections below.

```
Layout concept:
- Each RQ gets its own card with:
  - A colored accent bar on the left edge (different color per RQ)
  - The kicker: "RQ1: USER EXPERIENCE"  
  - A one-line research question
  - A one-line teaser of the finding: "Consistently positive UX, but with sharp criticisms..."
  - A subtle "Explore →" link

Animation:
- Cards stagger in from right
- Hover: card lifts 2px with ambient shadow (per DESIGN.md elevation rules)
- The accent bar width animates from 2px to 4px on hover
```

### 4e. Participant Quotes — A Scrolling Moment

**Current problem:** One static quote. This is one of the most powerful parts of the research.

**Fix:** Create a quotes section with 3-5 rotating quotes, or a scroll-linked sequence where quotes fade in/out as you scroll through.

```
Best quotes to feature:
1. "I'm old, I'm slow I'll take what I can get. Actually pretty proud of myself 
    to get this far." — P8, Age 65
2. "As a person grows old, brain function is going to die, I started because 
    of this." — Sung-jin, Age 68
3. "Is it pride? I think it's a kind of energy I get... now I know how to look 
    up things you don't know." — Jung-ja, Age 78
4. "I mean, none of this really matters in the real sense, but still my brain 
    tells me, hey, you're in the Diamond League." — Ken, Age 64
5. "Arabic — for fun. Klingon — I'm a Star Trek nerd." — P9

Layout: 
- Keep the vertical gold bar (tertiary #ffe395) as the signature element
- Large Newsreader italic quote text, center-aligned
- Auto-cycle every 5 seconds with crossfade, or use scroll position to advance

Animation:
- Quote text: BlurIn on enter, blur-out on exit
- Attribution fades in 200ms after the quote
- The gold vertical bar grows from 0 to full height as the section enters view
```

### 4f. Case Study Profiles — Human Moments

**This is new content not in the Stitch output — add it.**

The 6 case study participants are the heart of this research. Give them visibility.

```
Layout concept:
- A horizontal scroll carousel (on mobile) or 2x3 grid (on desktop)
- Each participant gets a card with:
  - Name, age, location, one-liner context
  - A signature quote
  - What RQ they illustrate
  
Cards:
- Jung-ja, 78 · Korea · "Now I know how to look up things you don't know"
- Young-cheol, 83 · Korea · 1,410 minutes logged — the most dedicated learner
- Sung-jin, 68 · Korea · Using Duolingo for brain health, not just language
- Alison, 66 · Canada · A paying subscriber with sharp critiques
- Dale, 70 · Alabama · "Duolingo only works as a TOOL"
- Ken, 64 · Oregon · 10-year veteran, Diamond League strategist

Animation:
- Cards stagger in from bottom
- Hover: subtle lift + the quote highlights in primary gold
```

### 4g. Footer / CTA — End With Purpose

**Current problem:** Generic footer links. No sense of "what now?"

**Fix:** End with a clear, warm call to action. This is for conferences — people should know what to do next.

```
Content:
- "This research was presented at [Conference Name], [Date]"
- "Interested in this work? Reach out to Jihye."
- Email link + LinkedIn/academic profile link
- "Read the full dissertation" link
- University of South Florida branding

Design:
- A full-width section with surface-container-lowest (#070e1a) background
- Large Newsreader headline: "Let's continue the conversation."
- ShimmerButton or glowing CTA for the contact link
```

---

## 5. GLOBAL ANIMATION PATTERNS

### Scroll-Triggered Section Reveals
Every major section should fade in as it enters the viewport. Use a consistent wrapper component:

```jsx
// Pattern: wrap each section in this
<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
  {children}
</motion.section>
```

### Staggered Children
When a group of items enters view (cards, stats, list items), stagger them:

```jsx
// Parent
<motion.div
  variants={{
    visible: { transition: { staggerChildren: 0.15 } }
  }}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  {/* Children */}
  <motion.div variants={{
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }}>
    ...
  </motion.div>
</motion.div>
```

### Scroll Progress Bar
Add a thin golden progress bar at the very top of the page:

```jsx
const { scrollYProgress } = useScroll();
<motion.div
  style={{ scaleX: scrollYProgress }}
  className="fixed top-0 left-0 right-0 h-[2px] bg-primary origin-left z-[100]"
/>
```

### Smooth Scrolling (Lenis)
```bash
bun add lenis
```
Wrap the app in a Lenis provider for smooth, inertial scrolling. This single addition makes the whole site feel 2x more premium.

---

## 6. RESPONSIVE STRATEGY

The Stitch output is mobile-first (single column, full-width sections). This is fine — most conference QR-code scanners will be on phones. But also plan for desktop:

- **Mobile (default):** Single column, full-bleed sections, bottom nav
- **Desktop (md+):** Max-width container (1200px), centered, more generous padding, side-by-side layouts for some sections, no bottom nav (use sticky header nav instead)
- **The hero** should be full-viewport on both, but desktop can use even larger typography (8xl+)
- **The stat grid** can go from 2-col to 3-col on desktop
- **Case study cards** go from horizontal scroll (mobile) to grid (desktop)

---

## 7. PERFORMANCE NOTES

- Use `LazyMotion` from Motion to reduce bundle size — only load the features you actually use
- Images: the Stitch output uses Google-hosted placeholder images. Replace with optimized local assets or remove them entirely (the typography-driven approach doesn't need hero images)
- Fonts: Newsreader and Manrope are already loaded via Google Fonts. Consider self-hosting them (`fontsource`) for faster load and no FOUT
- The site is essentially static content — no API calls, no auth, no dynamic data. Keep it simple.
- `prefers-reduced-motion`: Motion respects this by default. Good — accessibility matters, especially for a research site.

---

## 8. FILE STRUCTURE SUGGESTION

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx          # Glassmorphic sticky header
│   │   ├── Footer.jsx          # CTA + contact
│   │   ├── ScrollProgress.jsx  # Top progress bar
│   │   └── SectionReveal.jsx   # Reusable scroll-triggered wrapper
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── Takeaways.jsx       # The 3 big findings
│   │   ├── StudyGlance.jsx     # Animated numbers
│   │   ├── ResearchQuestions.jsx
│   │   ├── Quotes.jsx          # Rotating participant quotes
│   │   ├── CaseStudies.jsx     # Participant profiles
│   │   └── Researcher.jsx      # About Jihye
│   └── ui/
│       ├── NumberTicker.jsx     # Animated counter
│       ├── GlowButton.jsx      # Primary CTA with gradient glow
│       └── QuoteCard.jsx       # Styled pull-quote component
├── data/
│   ├── content.js              # All text content, quotes, stats
│   └── participants.js         # Case study data
├── styles/
│   └── globals.css             # Tailwind base + custom tokens
├── App.jsx
└── main.jsx
```

---

## 9. INSTALL COMMANDS

```bash
# Init project
bun create vite mall-research --template react
cd mall-research

# Core dependencies
bun add motion lenis

# Dev dependencies (Tailwind v4 + related)
bun add -d tailwindcss @tailwindcss/vite

# Optional: if cherry-picking Magic UI components
bun add clsx tailwind-merge
# Then manually copy component files from magicui.design
```

---

## 10. SUMMARY: THE "WOW" COMES FROM

1. **Motion** — Scroll-triggered reveals, staggered entrances, animated numbers. This is 60% of the "wow."
2. **Typography scale** — Massive Newsreader headlines contrasted with small Manrope labels. The Stitch design system already supports this; just push it harder.
3. **Pacing** — Sections that *reveal* as you scroll, not dump everything on load. The editorial metaphor: you're turning pages.
4. **The human stories** — Participant quotes and case study profiles make people lean in. The UI's job is to present these well.
5. **Smooth scroll** — Lenis makes the whole thing feel polished and intentional.
6. **The little things** — A scroll progress bar, hover lift on cards, the gold accent bar on quotes, number counters ticking up. None of these are complex, but together they say "someone cared."

The Stitch output gave us a good color palette, font pairing, and structural skeleton. The React build is where we add the *soul*.
