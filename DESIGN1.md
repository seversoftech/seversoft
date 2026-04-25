---
name: Precision Dark
colors:
  surface: '#141313'
  surface-dim: '#141313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2b2a2a'
  surface-container-highest: '#353434'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c7c6ca'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#919094'
  outline-variant: '#46464a'
  surface-tint: '#c8c6c7'
  primary: '#c8c6c7'
  on-primary: '#313031'
  primary-container: '#0a0a0b'
  on-primary-container: '#7a797a'
  inverse-primary: '#5f5e5f'
  secondary: '#a4c9ff'
  on-secondary: '#00315d'
  secondary-container: '#0267b8'
  on-secondary-container: '#d6e5ff'
  tertiary: '#ddb7ff'
  on-tertiary: '#490080'
  tertiary-container: '#140029'
  on-tertiary-container: '#a14ef0'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e5e2e3'
  primary-fixed-dim: '#c8c6c7'
  on-primary-fixed: '#1c1b1c'
  on-primary-fixed-variant: '#474647'
  secondary-fixed: '#d4e3ff'
  secondary-fixed-dim: '#a4c9ff'
  on-secondary-fixed: '#001c39'
  on-secondary-fixed-variant: '#004883'
  tertiary-fixed: '#f0dbff'
  tertiary-fixed-dim: '#ddb7ff'
  on-tertiary-fixed: '#2c0051'
  on-tertiary-fixed-variant: '#6900b3'
  background: '#141313'
  on-background: '#e5e2e1'
  surface-variant: '#353434'
typography:
  display-xl:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin: 32px
---

## Brand & Style

The design system is built for a high-stakes fintech environment where precision meets modern aesthetics. The brand personality is rooted in "Technological Authority"—it is innovative yet stable, utilizing a deep charcoal foundation to evoke a sense of premium security and "Obsidian" depth.

The style is a fusion of **Minimalism** and **Glassmorphism**. It prioritizes clarity through generous whitespace and sharp information architecture, but softens the technical edge with translucent layers and diffused light. This creates a multi-dimensional interface that feels like a sophisticated digital cockpit. The emotional response is one of calm confidence, ensuring users feel they are using a tool that is both cutting-edge and profoundly reliable.

## Colors

This design system utilizes a "Deep-Space" palette centered on a charcoal base. The primary background is near-black, providing the highest possible contrast for data visualization and accent colors. 

*   **Primary Base:** Charcoal (#0A0A0B) functions as the foundation of the environment.
*   **Accents:** Soft Blue is used for primary actions and trust indicators. Electric Purple is reserved for innovative features and highlights. Muted Teal acts as a secondary accent, often used for "success" states or growth indicators in a financial context.
*   **Gradients:** Subtle linear gradients (at 135 degrees) bridge the accents to create a sense of movement and energy without overwhelming the minimalist aesthetic.

## Typography

The design system relies on **Inter** to deliver a neutral, highly readable, and systematic typographic experience. The hierarchy is designed for rapid scanning of financial data. 

Headlines utilize a tighter letter-spacing and heavier weights to command attention, while body text maintains a generous line height for long-form readability. Labels are frequently used in uppercase with increased letter-spacing to distinguish metadata from actionable content. Numerical data should always utilize tabular figures (monospaced numbers) to ensure alignment in lists and tables.

## Layout & Spacing

This design system employs a **12-column fluid grid** for web applications and a 4-column fluid grid for mobile. The spacing rhythm is strictly based on an 8px baseline, ensuring all components align to a predictable vertical and horizontal cadence.

Layouts should favor "expansive density"—where critical data is packed tightly for efficiency, but surrounded by wide margins (48px+) to prevent visual fatigue. Internal card padding is standardized at 24px (md) to maintain a consistent internal rhythm across the dashboard.

## Elevation & Depth

Depth in the design system is achieved through **Glassmorphism** and tonal layering rather than traditional heavy shadows.

1.  **Backdrop Blurs:** Secondary surfaces (modals, dropdowns, sidebars) use a 20px blur with a 60% opacity fill of the surface color.
2.  **Glass Strokes:** Every elevated element must have a 1px inner border. Use a white-to-transparent gradient at 10% opacity to simulate a light-catching edge.
3.  **Soft Shadows:** When necessary for extreme focus (like modals), use a large, diffused shadow with a 0.2 alpha of the primary charcoal color, tinted slightly with the Soft Blue accent to prevent "muddy" blacks.
4.  **Z-Axis Layers:** Base level is #0A0A0B. Tier 1 (Cards) is #1A1A1C. Tier 2 (Overlays) uses the Glassmorphism blur.

## Shapes

The shape language for the design system is **Rounded (Level 2)**. This strikes a balance between the clinical sharpness of traditional finance and the approachable nature of modern tech.

*   **Primary Containers:** Use 1rem (16px) corner radius.
*   **Buttons & Inputs:** Use 0.5rem (8px) corner radius to feel more precise and "clicked-in."
*   **Status Indicators:** Small chips use a full pill-shape (999px) to contrast against the more geometric card structures.

## Components

### Buttons
Primary buttons use a subtle gradient from Soft Blue to Electric Purple. Hover states should increase the gradient vibrancy. Ghost buttons use a 1px semi-transparent white border and inherit the glassmorphism blur of the background they sit on.

### Cards
Cards are the primary container. They feature the 1px "glass stroke" and a subtle #1A1A1C background. On hover, cards should subtly lift using a soft blue outer glow (3% opacity) to indicate interactivity.

### Input Fields
Inputs are dark-themed with a #0A0A0B background and a #262626 border. On focus, the border transitions to a Soft Blue stroke with a 2px outer glow. Labels sit above the input in the `label-sm` style.

### Data Tables
Tables are minimalist with no vertical lines. Horizontal dividers are 1px at 5% white opacity. Header rows use `label-sm` with a slightly darker background to anchor the data.

### Chips & Badges
Used for transaction status. Success states use Muted Teal text with a 10% opacity Teal background. Pending states use a soft amber. Neutral states use a subtle gray.