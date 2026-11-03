UI DESIGN# Bold Editorial Studio — Website Design & Development Prompt for landing page

## Project Overview

Create a sophisticated, typography-first creative studio website featuring a bold editorial aesthetic, a strict black-and-white color palette, a custom interactive cursor, and smooth, motion-driven layouts.

The website should feel premium, minimal, and visually distinctive, with typography, whitespace, and movement as its primary design elements.

## 1. Design System

### Color Palette
- Primary background: `#FFFFFF`
- Primary text: `#000000`
- Secondary text: `#525252`
- Muted metadata: `#737373`
- Borders and accents: `#000000` at 10% opacity
- Footer background: `#0A0A0A`
- Footer text: `#FFFFFF`

Maintain a strict black-and-white palette throughout the interface. Color should only appear in project photography.

### Typography
Use Inter as the primary typeface.

Headlines:
- Font weight: 700
- Letter spacing: `-0.05em`
- Line height: `0.9`

Body text:
- Font weight: 400
- Letter spacing: `-0.02em`
- Line height: `1.5`

Metadata:
- Monospace font family
- Font size: `14px`
- Uppercase text transformation
- Letter spacing: `0.1em`

Use extreme contrasts in font size and weight to establish a strong visual hierarchy.

## 2. Navigation Header

Create a fixed header positioned at the top of the viewport.

- Apply `mix-blend-mode: difference` to the header container to maintain visibility against different backgrounds.
- Left side: lowercase logo `sd`, set at 24px, font weight 700, with tight letter spacing.
- Right side: a menu toggle button featuring a plus icon.
- Use 24px padding on all sides.

Keep the navigation minimal and unobtrusive.

## 3. Hero Section

Create a large, center-aligned hero section with a minimum height of `80vh`.

### Main headline
- Font size: `12vw`
- Font weight: 700
- Tight letter spacing
- Line height: `0.9`

Implement a staggered letter-by-letter reveal animation. Each character should slide upward into view, transitioning from `translateY(100%)` to `translateY(0)`.

### Sub-headline
- Font size: 24px
- Color: `#525252`
- Margin-top: 32px

Ensure the hero feels spacious, impactful, and typography-driven.

## 4. Infinite Project Marquee

Create a full-width, horizontally scrolling marquee with hidden overflow.

### Layout
- Use vertical project cards with an aspect ratio of `5:7`.
- Apply asymmetrical border-radius patterns to create an organic, editorial feel.
- Maintain consistent spacing between cards.

### Animation
- Scroll continuously from right to left.
- Set the animation duration to 30 seconds per cycle.
- Use linear timing for the continuous movement.
- Pause the animation when the user hovers over the marquee container.

### Image treatment
- Display images in grayscale by default.
- Transition images from grayscale to full color on hover.
- Use a 700ms transition duration with smooth cubic-bezier easing.

### Card border-radius patterns
- Card A: `border-top-left-radius: 100px`
- Card B: `border-top-right-radius: 100px; border-bottom-left-radius: 40px`
- Card C: `border-radius: 40px`

Repeat the patterns across the marquee to maintain visual consistency without making the layout repetitive.

## 5. Project Grid

Create a balanced two-column project grid on desktop and a single-column layout on mobile.

Each project item should include:

### Image container
- Aspect ratio: `4:3`
- Slightly rounded corners
- Grayscale images by default
- Transition to full color on hover over 700ms
- Scale the image to `1.05` on hover

### Hover interactions
- Display a black overlay with 10% opacity.
- Reveal an `arrow-up-right` icon in the top-right corner.
- Animate all hover states using the specified cubic-bezier easing.

### Project metadata
Add a metadata row beneath each image, separated by a 1px border using black at 10% opacity.

Include:
- Project title: 24px
- Project category
- Project year: monospace font

Keep the metadata clean, minimal, and consistently aligned.

## 6. Interactive Difference Cursor

Implement a custom circular cursor that follows the user's mouse with smooth interpolation.

### Cursor appearance
- Diameter: 32px
- Position: fixed
- Pointer events: none
- Z-index: 9999
- Border: 1px solid black
- Background: white
- Blend mode: `difference`

### Cursor movement
Use `requestAnimationFrame` to interpolate the cursor's position using linear interpolation (lerp), creating a smooth, lagging movement effect.

### Hover interaction
When the cursor hovers over an `a` or `button` element, scale it to `2.5x` its original size.

Use CSS transitions for the scaling animation and ensure that the cursor remains visually responsive.

Hide the default browser cursor using `cursor: none` on the body.

## 7. Animation & Motion System

Use the following animation principles consistently throughout the website.

### Reveal animations
- Initial state: `translateY(100%)`
- Final state: `translateY(0)`
- Duration: 1 second
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)`

Apply staggered delays to individual characters or elements where appropriate.

### Hover transitions
- Minimum duration: 500ms
- Default duration for image transitions: 700ms
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)`

### Marquee
- Duration: 30 seconds
- Timing function: linear
- Infinite repetition
- Pause on hover

Avoid standard system easing. All motion should feel smooth, deliberate, and premium.

## 8. Footer

Create a high-contrast footer with a background color of `#0A0A0A` and white text.

### Layout
Use a four-column grid on desktop.

Column 1–2:
- Large brand name
- Short studio biography

Column 3:
- Heading: Socials
- Social media links

Column 4:
- Heading: Contact
- Contact information and links

### Bottom bar
Add a thin, 1px border at 10% white opacity.

Include:
- Copyright information
- Design and development credits

Use 14px text for the bottom bar.

Maintain the same minimalist editorial aesthetic throughout the footer.

## 9. Responsive Design

Preserve the design's visual hierarchy and spacious layout across desktop, tablet, and mobile.

- Project grid: two columns on desktop, one column on mobile.
- Adjust headline sizing for smaller screens while maintaining its oversized editorial appearance.
- Keep navigation spacing and interactive elements appropriate for smaller viewports.
- Ensure the marquee remains horizontally scrollable and visually balanced.
- Prevent text overflow and maintain consistent spacing.

## 10. Implementation Requirements

- Use the Inter typeface throughout the website.
- Maintain the specified black-and-white color palette.
- Use borders no heavier than 1px.
- Apply the specified cubic-bezier easing to all reveal and hover animations.
- Use grayscale-to-color image transitions with a 700ms duration.
- Hide the default cursor and implement the custom difference cursor.
- Ensure the marquee loops continuously and pauses on hover.
- Preserve the asymmetrical border-radius patterns on marquee cards.
- Maintain smooth, responsive interactions across the entire website.

## Final Design Direction

The finished website should feel like a sophisticated, modern creative studio portfolio.

Prioritize bold typography, generous whitespace, restrained color, asymmetrical imagery, and fluid motion. Every section should feel intentional, with smooth transitions connecting the entire experience.

Preserve all specified design details and interactions. Do not introduce additional colors, unnecessary decorative elements, or visual styles that conflict with the editorial aesthetic.