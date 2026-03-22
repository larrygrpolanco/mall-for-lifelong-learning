# Design System Document: The Scholarly Editorial

## 1. Overview & Creative North Star: "The Digital Curator"
This design system is built to transform a research showcase into a high-end, immersive editorial experience. Our Creative North Star is **The Digital Curator**. We move away from the rigid, modular "dashboard" aesthetic of modern SaaS and instead embrace the pacing of a premium printed journal.

To break the "template" look, we prioritize **intentional asymmetry**. Layouts should feel composed rather than slotted. This is achieved by offsetting text blocks, allowing imagery to bleed off-edge, and utilizing extreme typographic scale contrasts. We treat the screen as a canvas where "breathing room" (whitespace) is a functional element that signifies prestige and intellectual depth.

---

### 2. Colors & Tonal Depth
The palette is grounded in a scholarly navy (`#0c141f`), providing a deep, intellectual foundation that is warmer and more sophisticated than pure black.

#### The "No-Line" Rule
**Strict Mandate:** Designers are prohibited from using 1px solid borders to section content. Boundaries must be defined solely through background color shifts. For example, a research abstract in a `surface_container_low` block should sit directly on the `surface` background. The transition of tone is the only divider needed.

#### Surface Hierarchy & Nesting
Treat the UI as physical layers of fine, heavy-stock paper. 
- **Base Layer:** `surface` (#0c141f) for the primary reading experience.
- **Secondary Depth:** `surface_container_low` (#141c28) for subtle grouping.
- **High Focus:** `surface_container_highest` (#2d3542) for elevated utility elements like search bars or navigation overlays.

#### The "Glass & Gradient" Rule
To avoid a flat, "digital" feel, use **Glassmorphism** for floating elements (like sticky headers or navigation). Apply a semi-transparent `surface_variant` with a heavy backdrop-blur (20px+). 
**Signature Textures:** Use subtle radial gradients transitioning from `primary` (#ffe2ab) to `primary_container` (#ffbf00) for high-impact CTAs to give them a "lit from within" glow.

---

### 3. Typography: The Editorial Voice
Typography is the cornerstone of this system. It balances the timeless authority of the serif with the modern clarity of a humanist sans-serif.

*   **Display & Headlines (Newsreader):** Use `display-lg` through `headline-sm` for all major storytelling moments. This serif font should be set with slightly tighter letter-spacing (-2%) to feel like a premium masthead.
*   **Body & Labels (Manrope):** Use `body-lg` for longform reading. Manrope provides a clean, technical counterpoint to the Newsreader serif, ensuring research data remains highly legible.
*   **The Hierarchy of Intelligence:** Always pair a large `display-md` headline with a `label-md` in all-caps (using `tertiary` #ffe395) to act as a "kicker" or category tag. This mimics the layout of a feature article.

---

### 4. Elevation & Depth: Tonal Layering
We reject traditional drop shadows in favor of **Ambient Lift**.

*   **The Layering Principle:** Achieve depth by "stacking." A card using `surface_container_lowest` (#070e1a) placed on a `surface` background creates a "sunken" or "embedded" feel, perfect for supplemental data or citations.
*   **Ambient Shadows:** If an element must float (e.g., a modal), use a shadow with a 40px–60px blur at 6% opacity. The shadow color must be a tinted navy (based on `on_surface`)—never pure black—to maintain the "warm" editorial feel.
*   **The "Ghost Border" Fallback:** If accessibility requires a container boundary, use the `outline_variant` (#504532) at **15% opacity**. It should be felt, not seen.

---

### 5. Components

#### Buttons
- **Primary:** Roundedness `md` (0.375rem). Background: `primary` (#ffe2ab). Text: `on_primary`. No border.
- **Secondary (Editorial Link):** No background. Text: `secondary` (#ffb4a5). Uses an underline that sits 4px below the baseline, using the `secondary` color at 30% opacity.
- **States:** On hover, primary buttons should shift to `primary_container` with a subtle 2px vertical lift.

#### Cards & Research Modules
- **Constraint:** Forbid the use of divider lines.
- **Style:** Use `surface_container_low` for the card body. Use generous internal padding (`spacing-8` or 2.75rem).
- **Asymmetry:** Align the headline to the left and the metadata (date/category) to the far right using `label-sm` to create a wide, editorial rhythm.

#### Input Fields
- **Style:** Minimalist. No background fill; only a "Ghost Border" bottom-line.
- **Focus State:** The bottom line transitions to `primary` (#ffe2ab) with a 2px thickness. Labels float above in `primary` at `label-sm` size.

#### Editorial Pull-Quotes (Custom Component)
- A signature component for this system. Large `headline-lg` serif text, center-aligned, with a 2px vertical "accent bar" using the `tertiary` color (#ffe395) positioned 40px above the text.

---

### 6. Do's and Don'ts

#### Do:
- **Do** use the `24` (8.5rem) spacing token between major research sections to emphasize the "feature article" feel.
- **Do** lean into the `secondary` (Terracotta/Amber) tones for data visualization and highlights to bring warmth to the navy background.
- **Do** use "Optical Sizing" for the serif headlines—larger sizes should have thinner strokes.

#### Don't:
- **Don't** use 100% white (#FFFFFF). Always use `on_background` (#dbe3f4) for text to reduce eye strain and maintain the sophisticated palette.
- **Don't** use "Standard Grid" layouts. If a row has three items, consider making the first item 50% width and the remaining two 25% to create visual interest.
- **Don't** use sharp 0px corners. Even a "sharp" look should use the `sm` (0.125rem) roundedness scale to feel "human."

#### Accessibility Note:
While we use subtle tonal shifts, ensure that the contrast between `on_surface` text and any `surface_container` meets WCAG AA standards. The `primary` (#ffe2ab) and `secondary` (#ffb4a5) accents are specifically chosen to pop against the navy base for high-priority interactions.