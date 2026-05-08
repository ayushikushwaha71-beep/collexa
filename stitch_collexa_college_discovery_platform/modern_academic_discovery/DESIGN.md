---
name: Modern Academic Discovery
colors:
  surface: '#0c141f'
  surface-dim: '#0c141f'
  surface-bright: '#323946'
  surface-container-lowest: '#070e19'
  surface-container-low: '#151c27'
  surface-container: '#19202b'
  surface-container-high: '#232a36'
  surface-container-highest: '#2e3541'
  on-surface: '#dce2f3'
  on-surface-variant: '#c2c6d6'
  inverse-surface: '#dce2f3'
  inverse-on-surface: '#2a313d'
  outline: '#8c909f'
  outline-variant: '#424754'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e6a'
  primary-container: '#4d8eff'
  on-primary-container: '#00285d'
  inverse-primary: '#005ac2'
  secondary: '#d0bcff'
  on-secondary: '#3c0091'
  secondary-container: '#571bc1'
  on-secondary-container: '#c4abff'
  tertiary: '#ffb786'
  on-tertiary: '#502400'
  tertiary-container: '#df7412'
  on-tertiary-container: '#461f00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d0bcff'
  on-secondary-fixed: '#23005c'
  on-secondary-fixed-variant: '#5516be'
  tertiary-fixed: '#ffdcc6'
  tertiary-fixed-dim: '#ffb786'
  on-tertiary-fixed: '#311400'
  on-tertiary-fixed-variant: '#723600'
  background: '#0c141f'
  on-background: '#dce2f3'
  surface-variant: '#2e3541'
typography:
  display-lg:
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
  title-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
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
  lg: 40px
  xl: 64px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style

This design system is built on the principles of clarity, academic excellence, and modern efficiency. It positions the product as a high-end SaaS platform for education, blending the utilitarian nature of professional productivity tools with a vibrant, forward-thinking aesthetic. 

The style is primarily **Minimalist Corporate**, emphasizing significant white space (adapted for a focused dark mode) and a reduction of visual noise to help students focus on critical decision-making. By utilizing a "clean-tech" aesthetic, the interface feels both trustworthy and cutting-edge, removing the administrative friction typically associated with college applications.

## Colors

The palette is optimized for a dark-mode environment to reduce eye strain during long research sessions while maintaining a "premium" feel.

- **Primary & Secondary:** A vibrant gradient transitioning from "Scholar Blue" (#3B82F6) to "Ambition Purple" (#8B5CF6) is used exclusively for primary calls-to-action, active states, and progress indicators. This gradient provides the "premium" SaaS energy against the deep dark surfaces.
- **Neutrals:** Professional grays (#6B7280) are used for structural elements. Surfaces use tonal layering rather than high-contrast borders to define hierarchy.
- **Feedback:** Success, Warning, and Error states should use desaturated versions of green, amber, and red to stay within the professional tone of the design system and ensure legibility against dark backgrounds.

## Typography

This design system utilizes **Inter** for its systematic, utilitarian precision. The typographic hierarchy is designed for high information density without sacrificing readability.

- **Headlines:** Use tighter letter spacing and semi-bold weights to create a strong visual anchor on the page.
- **Body Text:** Optimized for long-form reading of college descriptions and requirements, utilizing a generous 1.6 line-height for the large body tier to maintain comfort in dark environments.
- **Labels:** Small caps or uppercase treatments with increased tracking are used for metadata, categories, and secondary tags to distinguish them from actionable text.

## Layout & Spacing

The layout follows a strict **8px grid system**, ensuring mathematical harmony across all components. 

- **Grid:** A 12-column fixed grid is used for desktop dashboards, centered within the viewport.
- **Padding:** Content containers utilize 24px (md) internal padding to maintain a spacious, premium feel. 
- **Sectioning:** Large vertical gaps of 64px (xl) are used to separate distinct content blocks, echoing the minimalist philosophy of the design system.

## Elevation & Depth

Hierarchy is established through **Tonal Layering** and luminosity rather than heavy color blocking.

- **Surface 0 (Background):** Deep dark #111318.
- **Surface 1 (Cards/Modals):** Slightly elevated dark tones with a subtle 1px solid border (#6B7280 at low opacity) to define boundaries.
- **Interactions:** Upon hover, cards should subtly increase in luminosity or gain a very soft blue-tinted glow.
- **Depth:** Elements that require the user's immediate attention (like dropdowns or modals) use a semi-transparent backdrop blur (12px) to maintain context while focusing the user.

## Shapes

The shape language is "Soft-Modern," using significant corner radii to appear approachable and user-friendly.

- **Primary Cards:** Must use a 16px (1rem) radius to define the main content areas.
- **Buttons & Inputs:** Follow the `rounded-lg` standard (0.5rem / 8px) to provide a distinct but related geometry to the parent cards.
- **Data Visualizations:** All bar charts or progress indicators should feature fully rounded (pill-shaped) ends to maintain the soft aesthetic.

## Components

### Buttons
Primary buttons utilize the linear gradient (#3B82F6 to #8B5CF6) with white text. Secondary buttons are "ghost" style: transparent background, gray border, and light text. All buttons have a subtle luminosity shift on hover to give them a tactile feel.

### Cards
Cards are the primary container in this design system. They must feature a 16px corner radius and a subtle border to separate them from the base background.

### Input Fields
Inputs are minimalist: 1px gray border, 8px radius. On focus, the border transitions to the primary blue color with a 3px soft blue outer glow (ring).

### Chips & Tags
Used for filtering "Majors" or "Locations." These should have a dark gray background and use the `label-md` typographic style. Active chips transition to a primary blue state.

### Progress Indicators
Used for "Application Strength" or "Completion Rate." These utilize the primary gradient for the fill and a dark gray for the track, reinforcing the premium SaaS vibe in dark mode.