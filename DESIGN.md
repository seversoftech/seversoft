---
name: Modern Fintech Ethos
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c1c7d3'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8b919d'
  outline-variant: '#414751'
  surface-tint: '#a4c9ff'
  primary: '#a4c9ff'
  on-primary: '#00315d'
  primary-container: '#60a5fa'
  on-primary-container: '#003a6b'
  inverse-primary: '#0060ac'
  secondary: '#cebdff'
  on-secondary: '#381385'
  secondary-container: '#4f319c'
  on-secondary-container: '#bea8ff'
  tertiary: '#3cddc7'
  on-tertiary: '#003731'
  tertiary-container: '#00b6a3'
  on-tertiary-container: '#004039'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d4e3ff'
  primary-fixed-dim: '#a4c9ff'
  on-primary-fixed: '#001c39'
  on-primary-fixed-variant: '#004883'
  secondary-fixed: '#e8ddff'
  secondary-fixed-dim: '#cebdff'
  on-secondary-fixed: '#21005e'
  on-secondary-fixed-variant: '#4f319c'
  tertiary-fixed: '#62fae3'
  tertiary-fixed-dim: '#3cddc7'
  on-tertiary-fixed: '#00201c'
  on-tertiary-fixed-variant: '#005047'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  headline-xl:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

This design system is built for a premium fintech environment where precision meets modern innovation. The aesthetic is rooted in **Minimalism** with strategic infusions of **Glassmorphism** to create a sense of depth and transparency—key psychological drivers in financial technology.

The brand personality is authoritative yet approachable, utilizing a "Dark Charcoal" canvas to allow data and interactive elements to resonate. Visual interest is achieved not through heavy ornamentation, but through high-quality typography, generous white space (or "dark space"), and the subtle use of vibrant accents that guide user attention toward critical actions.

## Colors

The palette is anchored by a deep, neutral charcoal that serves as the foundation for all interfaces. This creates a high-end, "pro" environment common in modern trading and wealth management platforms.

- **Primary (Soft Blue):** Used for primary actions, progress indicators, and core branding elements. It evokes trust and stability.
- **Secondary (Electric Purple):** Reserved for high-value features, premium upgrades, or interactive states that require a modern "tech" edge.
- **Tertiary (Muted Teal):** Primarily used for success states, financial growth indicators, and secondary data visualizations.
- **Neutral (Charcoal & Off-Black):** These tones are layered to create hierarchy without relying on borders.

Color application should be sparse. Use accents to draw the eye to specific data points or calls to action, maintaining a 90/10 ratio of neutrals to chromatic colors.

## Typography

This design system utilizes **Manrope** for its balance of geometric clarity and functional readability, echoing the requested "Outfit" aesthetic while providing the professional weight required for fintech.

Headlines should be bold and tight, using negative letter-spacing to create a "locked-in" premium feel. Body text maintains standard spacing for maximum legibility during long-form data consumption. Label styles are used for micro-copy, captions, and table headers, often employing a slightly heavier weight to ensure visibility against dark backgrounds.

## Layout & Spacing

The system follows a **12-column fixed grid** for desktop, ensuring that financial dashboards remain structured and predictable. On smaller viewports, the grid transitions to a fluid model with consistent side margins.

Spacing is governed by an 8px linear scale. Large-scale components (like main sections) should use `stack-lg` to maintain the minimalist philosophy of "breathing room." Information-dense areas, such as data tables or transaction histories, should utilize `stack-sm` to keep related data points grouped tightly.

## Elevation & Depth

Depth is achieved through **Tonal Layers** and **Glassmorphism** rather than traditional heavy shadows.

1.  **Level 0 (Canvas):** The base `#0B0B0B` background.
2.  **Level 1 (Cards/Surface):** A slightly lighter `#1E1E1E` to distinguish content blocks.
3.  **Level 2 (Overlays/Modals):** These use a backdrop-blur (20px) and a semi-transparent fill of the primary color at 5% opacity. 
4.  **Accents:** A subtle, 1px "ghost border" (low-opacity white or primary color) is used on card edges to define shape without adding visual weight.

Shadows, when used, are "Ambient Shadows"—extremely diffused (30-40px blur), low opacity (15%), and slightly tinted with the Primary Soft Blue to simulate a glow from the screen elements.

## Shapes

The design system employs a **Rounded (Level 2)** shape language. This softens the technical nature of the fintech space, making the product feel more accessible and human-centric.

- Standard components (Buttons, Inputs): `0.5rem` (8px).
- Large containers (Cards, Modals): `1rem` (16px).
- Special decorative elements or tags: `1.5rem` (24px) for a "pill" appearance.

Avoid sharp 0px corners, as they conflict with the "Soft Blue" and "Modern Accents" theme.

## Components

### Buttons
Primary buttons use a solid Soft Blue fill with white or near-black text for maximum contrast. Secondary buttons use the "ghost" style: a 1px border of the accent color with no fill until hover.

### Cards
Cards are the primary container for data. They should feature a subtle gradient stroke (Electric Purple to Soft Blue) at a very low opacity (10-15%) to create a "premium tech" border effect.

### Input Fields
Inputs are dark-themed with a subtle `#FFFFFF` (10%) border. On focus, the border transitions to a solid Soft Blue with a 4px outer glow of the same color.

### Chips & Tags
Used for transaction categories or status. For "Success," use Muted Teal text on a 10% Teal background. For "Pending," use Electric Purple.

### Additional Suggested Components
- **Data Visualizers:** Custom sparklines using the Muted Teal for growth and Primary Blue for neutral trends.
- **Glass Modals:** For transaction confirmations, using a heavy background blur to keep the user focused on the immediate task.
- **Segmented Controls:** For toggling between timeframes (1D, 1W, 1M, 1Y) using a subtle tonal shift on the active state.