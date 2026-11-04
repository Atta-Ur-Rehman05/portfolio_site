---
name: Obsidian Signal
colors:
  surface: '#0f131c'
  surface-dim: '#0f131c'
  surface-bright: '#353942'
  surface-container-lowest: '#0a0e16'
  surface-container-low: '#181c24'
  surface-container: '#1c2028'
  surface-container-high: '#262a33'
  surface-container-highest: '#31353e'
  on-surface: '#dfe2ee'
  on-surface-variant: '#bbc9cd'
  inverse-surface: '#dfe2ee'
  inverse-on-surface: '#2c3039'
  outline: '#859397'
  outline-variant: '#3c494c'
  surface-tint: '#2fd9f4'
  primary: '#8aebff'
  on-primary: '#00363e'
  primary-container: '#22d3ee'
  on-primary-container: '#005763'
  inverse-primary: '#006877'
  secondary: '#7bd0ff'
  on-secondary: '#00354a'
  secondary-container: '#00a6e0'
  on-secondary-container: '#00374d'
  tertiary: '#ffd6a3'
  on-tertiary: '#462b00'
  tertiary-container: '#ffb13b'
  on-tertiary-container: '#6e4600'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#a2eeff'
  primary-fixed-dim: '#2fd9f4'
  on-primary-fixed: '#001f25'
  on-primary-fixed-variant: '#004e5a'
  secondary-fixed: '#c4e7ff'
  secondary-fixed-dim: '#7bd0ff'
  on-secondary-fixed: '#001e2c'
  on-secondary-fixed-variant: '#004c69'
  tertiary-fixed: '#ffddb5'
  tertiary-fixed-dim: '#ffb957'
  on-tertiary-fixed: '#2a1800'
  on-tertiary-fixed-variant: '#643f00'
  background: '#0f131c'
  on-background: '#dfe2ee'
  surface-variant: '#31353e'
typography:
  display:
    fontFamily: Geist
    fontSize: 56px
    fontWeight: '600'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: Geist
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Geist
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 26px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  code-md:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: -0.01em
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.06em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system expresses a refined, developer-centric aesthetic tailored for modern artificial intelligence engineering and backend architecture portfolios. Rooted in technical minimalism and high-density precision, the interface reflects the atmosphere of modern developer tools, production telemetry dashboards, and advanced AI research workbenches.

The visual style merges structured minimalism with subtle ambient depth:
- **Architectural Clarity:** Layouts rely on strict typographic rhythm, precise alignment, and deliberate negative space rather than ornamental distraction.
- **Engineered Precision:** Interactive elements resemble high-performance workstation controls—compact, crisp, and responsive.
- **Calculated Atmosphere:** Deep obsidian surfaces paired with cold cyan accents create a focused, low-fatigue workspace that feels authoritative, intelligent, and distinctly modern.

## Colors

The palette establishes an ultra-deep, cold-toned dark hierarchy designed for prolonged focus and contrast fidelity.

### Hierarchy & Role Distribution
- **Canvas Base (`#090D15`):** The primary ground surface. Deep obsidian with a hint of deep slate creates absolute depth without the starkness of pure `#000000`.
- **Surface Layer 1 (`#0F172A`):** Used for structural navigation bars, persistent sidebars, and grouped content regions.
- **Surface Layer 2 (`#111827`):** Elevated card containers, project showcases, and interactive modules.
- **Accents:**
  - **Cyan Primary (`#22D3EE`):** Direct visual anchors—active state indicators, primary call-to-actions, terminal highlights, and interactive focus states.
  - **Sky Blue Secondary (`#38BDF8`):** Informational callouts, metrics graphs, secondary highlights, and subtle gradient ramps.
- **Neutrals & Typography:**
  - **High-Contrast Text (`#F8FAFC`):** Primary headings, critical data, and active values.
  - **Muted Text (`#94A3B8`):** Body narrative, secondary metrics, structural metadata, and timestamps.
- **Borders & Rules:** Low-contrast cool gray (`rgba(148, 163, 184, 0.12)`) provides boundary definition without visual clutter. Interactive hover borders ramp up subtly to `rgba(34, 211, 238, 0.35)`.

## Typography

The typography pairings bridge clean human readability with engineering rigor:
- **Headings (Geist):** Clean geometric letterforms with neutral proportions and tight tracking give headlines an architectural, tech-forward voice.
- **Body Text (Inter):** Highly legible across varied pixel densities with balanced x-heights, ensuring effortless reading for longer technical case studies, architectural breakdowns, and project descriptions.
- **Technical Readouts & Metadata (JetBrains Mono):** Monospaced forms provide immediate visual categorization for API endpoints, stack tags, benchmark metrics, commits, and timestamps.
- **Typographic Rules:** All code tags, metadata chips, and system status indicators default to uppercase or lowercase monospace formatting with slightly relaxed letter-spacing to enhance legibility at small point sizes.

## Layout & Spacing

The layout model uses a disciplined 12-column responsive fluid grid structured inside a constrained maximum width of `1200px` for optimal readability and balanced canvas composition.

### Breakpoints & Adaptability
- **Desktop (1024px+):** 12-column grid, `gutter: 1.5rem`, `margin: 3rem`. Project showcases, architecture diagrams, and pipeline metrics span multi-column cards side by side.
- **Tablet (768px - 1023px):** 8-column grid, `gutter: 1.25rem`, `margin: 2rem`. Secondary sidebars collapse into toggle panels; technical metrics adapt into 2-column modules.
- **Mobile (< 768px):** 4-column grid, `gutter: 1rem`, `margin: 1.25rem`. Complex modular grids collapse into single-column vertical telemetry streams with full touch-target clearances.

### Spacing Rules
- Component internal padding strictly references `space-xs` through `space-lg`.
- Major thematic sections (e.g., Hero, System Architecture, Performance Benchmarks, Experience Timeline) utilize `space-xl` multiplied by 2 (`5rem`) for section separation, maintaining deliberate breathing room.

## Elevation & Depth

Visual hierarchy is maintained through subtle tonal layer stacking, low-contrast hairline borders, and localized ambient glows, rejecting heavy skeuomorphic shadows.

### Depth Layers
1. **Base Layer (`#090D15`):** Root background surface.
2. **Structural Layer (`#0F172A`):** Low-contrast regions separated by hairline rules (`rgba(148, 163, 184, 0.12)`).
3. **Card & Panel Layer (`#111827`):** Elevated components feature a 1px border (`rgba(148, 163, 184, 0.12)`) and a diffuse, directional ambient shadow: `0 8px 30px rgba(0, 0, 0, 0.45)`.
4. **Active & Hover States:** Interactive elements introduce a calibrated primary cyan halo: `box-shadow: 0 0 20px rgba(34, 211, 238, 0.12)`, paired with border transition to `rgba(34, 211, 238, 0.35)`.

### Overlays & Menus
Floating menus, tooltips, and command palettes utilize backdrop blur (`backdrop-filter: blur(12px)`) over a semi-transparent surface (`rgba(17, 24, 39, 0.85)`), preserving contextual awareness of underlying code and schema views.

## Shapes

The design system maintains a refined, compact corner radius (`roundedness: 1` — base `0.25rem` / `4px`), emphasizing a precise, tool-like demeanor rather than a consumer app aesthetic.

### Radius Scale Application
- **Micro Elements (Tags, Badges, Status Dots, Checkboxes):** `rounded` (`0.25rem` / `4px`).
- **Standard Controls (Buttons, Inputs, Selectors):** `rounded` (`0.25rem` / `4px`).
- **Cards, Code Blocks & Containers:** `rounded-lg` (`0.5rem` / `8px`).
- **Modal Dialogs & Command Palettes:** `rounded-xl` (`0.75rem` / `12px`).

## Components

### Buttons
- **Primary:** Solid Cyan (`#22D3EE`) background with dark contrast text (`#090D15`), font weight `500`, radius `0.25rem`. Hover triggers a brightness shift (`#38BDF8`) and a localized `0 0 16px rgba(34, 211, 238, 0.3)` glow.
- **Secondary / Outline:** Background transparent, 1px border `rgba(148, 163, 184, 0.18)`, text `#F8FAFC`. Hover shifts background to `rgba(148, 163, 184, 0.06)` and border to `rgba(34, 211, 238, 0.4)`.
- **Ghost / Icon:** Transparent background with `#94A3B8` icon; on hover `#F8FAFC` with subtle background tint.

### Chips & Metadata Badges
- **Technical Tag:** Constructed with JetBrains Mono (`code-sm`). Background `rgba(15, 23, 42, 0.8)`, border `1px solid rgba(148, 163, 184, 0.12)`, text `#94A3B8`.
- **Status Indicator:** Features an embedded 6px pulsing dot (e.g., green `#10B981` for active services/availability, `#22D3EE` for in-progress research) paired with an uppercase label.

### Cards & Project Containers
- **Container Structure:** Background `#111827`, border `1px solid rgba(148, 163, 184, 0.12)`, radius `0.5rem`, padding `space-lg`.
- **Interaction:** Hover triggers border transition to `rgba(34, 211, 238, 0.35)` accompanied by a minimal `-2px` vertical translation.
- **Header:** Features a top row with repository/system metadata in monospaced font, project title in Geist, and live links pinned to the top-right.

### Input Fields & Search / Command Inputs
- **Base Style:** Background `#0F172A`, 1px border `rgba(148, 163, 184, 0.15)`, text `#F8FAFC`, placeholder `#94A3B8` with 50% opacity.
- **Focus State:** 1px border `#22D3EE`, shadow ring `0 0 0 1px rgba(34, 211, 238, 0.25)`, without native browser outline.

### Lists & Activity Feeds
- **Engineering Activity Item:** Minimalist row with hairline divider (`rgba(148, 163, 184, 0.08)`). Left column contains monospaced timestamp and commit/tag hash; right column displays description and live status pill.

### Domain-Specific Components
- **Architecture Terminal / Code Block:** Background `#0B0F19`, top bar featuring file name and copy action button, content in JetBrains Mono (`code-md`) with custom syntax highlighting focused on cyan, sky blue, and neutral slate.
- **Latency & Benchmark Pill:** Compact inline metric block showcasing throughput, model parameters, or latency (e.g., `12.4ms avg`) enclosed in a high-density, monospaced capsule.