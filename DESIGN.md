---
name: CodeNexo
colors:
  surface: '#051424'
  surface-dim: '#051424'
  surface-bright: '#2c3a4c'
  surface-container-lowest: '#010f1f'
  surface-container-low: '#0d1c2d'
  surface-container: '#122131'
  surface-container-high: '#1c2b3c'
  surface-container-highest: '#273647'
  on-surface: '#d4e4fa'
  on-surface-variant: '#c3c5d9'
  inverse-surface: '#d4e4fa'
  inverse-on-surface: '#233143'
  outline: '#8d90a2'
  outline-variant: '#434656'
  surface-tint: '#b7c4ff'
  primary: '#b7c4ff'
  on-primary: '#002682'
  primary-container: '#0052ff'
  on-primary-container: '#dfe3ff'
  inverse-primary: '#004ced'
  secondary: '#bec6e0'
  on-secondary: '#283044'
  secondary-container: '#3f465c'
  on-secondary-container: '#adb4ce'
  tertiary: '#bcc7de'
  on-tertiary: '#263143'
  tertiary-container: '#5b667b'
  on-tertiary-container: '#d9e4fd'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b7c4ff'
  on-primary-fixed: '#001452'
  on-primary-fixed-variant: '#0038b6'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#d8e3fb'
  tertiary-fixed-dim: '#bcc7de'
  on-tertiary-fixed: '#111c2d'
  on-tertiary-fixed-variant: '#3c475a'
  background: '#051424'
  on-background: '#d4e4fa'
  surface-variant: '#273647'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md-mobile:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  code-block:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-tablet: 32px
  margin-mobile: 20px
---

## Brand & Style
The brand personality is engineered for precision, high-performance, and architectural integrity. This design system targets sophisticated technical stakeholders and enterprise partners who value efficiency and structural clarity. 

The design style is a synthesis of **Minimalism** and **Geist-inspired Technicality**. It prioritizes high-density information layouts with generous negative space to prevent cognitive overload. The emotional response is one of absolute reliability—a "digital workshop" feel that is both futuristic and utilitarian. The aesthetic avoids unnecessary ornamentation, favoring mathematical alignment and functional transparency.

## Colors
The palette is rooted in a deep, nocturnal spectrum to minimize eye strain and emphasize the high-tech narrative. 

- **Primary (Electric Blue):** Used exclusively for high-priority actions, active states, and critical data points. It serves as the "power source" of the UI.
- **Surface Scale:** A series of deep slates and obsessive grays provide the structural foundation.
- **Accents:** Success, warning, and error states should utilize highly desaturated versions of their respective hues to maintain the professional, minimalist rigor.
- **Contrast:** Maintain a minimum of 7:1 contrast ratio for all body text against surface backgrounds to ensure peak legibility in dark mode.

## Typography
The typographic system uses a tri-font strategy to delineate function. **Geist** provides a sharp, technical edge for headings. **Inter** handles high-readability body text with its neutral, systematic humanist qualities. **JetBrains Mono** is utilized for labels, metadata, and actual code snippets to reinforce the developer-centric nature of the brand.

Type should be set with tight tracking on headings to feel "locked-in" and architectural. Body text should maintain generous line-heights to facilitate long-form reading of technical documentation.

## Layout & Spacing
The layout employs a **12-column fluid grid** for desktop and a **4-column grid** for mobile. Spacing is strictly derived from a 4px base unit, ensuring all elements align to a consistent mathematical rhythm.

- **Desktop:** 12 columns, 24px gutters, 64px side margins. Max container width of 1280px.
- **Tablet:** 8 columns, 20px gutters, 32px side margins.
- **Mobile:** 4 columns, 16px gutters, 20px side margins.

Use vertical rhythm increments of 16px (4 units), 32px (8 units), and 64px (16 units) to separate major sections. This creates a highly structured, "blueprinted" feel.

## Elevation & Depth
This design system avoids traditional shadows in favor of **Tonal Layers** and **Low-Contrast Outlines**. Depth is communicated through luminosity: the "higher" an object is in the z-axis, the lighter its surface color becomes.

- **Base Layer:** #020617 (True dark).
- **Surface Layer:** #0F172A (Cards, navigation bars).
- **Overlay Layer:** #1E293B (Modals, tooltips, dropdowns).

Border outlines should be 1px solid with 10-15% opacity white or primary blue to define edges without adding visual weight. Use backdrop blurs (20px) on navigation elements to provide a sense of transparency and technical sophistication.

## Shapes
The shape language is disciplined and geometric. A **Soft (0.25rem)** base radius is applied to standard components like buttons and inputs to prevent the UI from feeling overly aggressive or "sharp," while maintaining a professional, boxy silhouette. 

- Large containers (cards) use `rounded-lg` (0.5rem).
- Small utility elements (tags) use `rounded-sm` (0.125rem).
- Avoid circular pill shapes unless used for status indicators.

## Components
- **Buttons:** Primary buttons use the electric blue fill with white text. Secondary buttons use a ghost style with a 1px slate-700 border. Use Geist Medium for button labels.
- **Inputs:** Dark backgrounds (#0F172A) with a subtle 1px border. Focus state triggers a primary blue glow (2px spread, low opacity).
- **Cards:** No shadows. Use a subtle gradient stroke (top-left to bottom-right) from primary blue to transparent to highlight the container edge.
- **Chips/Tags:** Use JetBrains Mono for the text. Backgrounds should be low-opacity versions of the primary color.
- **Data Tables:** High-density, minimal cell padding. Borders only between rows (no vertical lines). Header text in all-caps JetBrains Mono.
- **Code Snippets:** Encapsulated in a "terminal" container with a slightly darker background than the surface layer.