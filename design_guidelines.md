# Design Guidelines for APS Facility Management Website

## Design Approach
**Reference-Based Approach** - Drawing inspiration from professional service companies like Airbnb (for trust and reliability), LinkedIn (for corporate professionalism), and modern B2B service websites that emphasize credibility and expertise.

## Core Design Elements

### Color Palette
**Primary Colors:**
- Dark Mode: 220 15% 95% (light text), 220 15% 12% (background)
- Light Mode: 220 15% 15% (dark text), 0 0% 98% (background)

**Brand Colors:**
- Professional Blue: 217 91% 50% (trust and reliability)
- Success Green: 142 76% 36% (quality assurance)

**Accent Colors:**
- Warning Orange: 38 92% 50% (call-to-action highlights)
- Subtle Gray: 220 15% 65% (secondary text and borders)

### Typography
- **Primary Font:** Inter (Google Fonts) - clean, professional, excellent readability
- **Headings:** Inter 600-700 weight, sizes from text-4xl to text-6xl
- **Body Text:** Inter 400-500 weight, text-base to text-lg
- **Captions:** Inter 400 weight, text-sm

### Layout System
**Spacing Primitives:** Tailwind units of 4, 8, 12, 16, and 24 (p-4, m-8, gap-12, etc.)
- Consistent 16-unit (4rem) sections spacing
- 8-unit internal component spacing
- 4-unit micro-spacing for tight elements

### Component Library

**Navigation:**
- Sticky header with company logo
- Dropdown menus for services
- Dark/light mode toggle
- Mobile hamburger menu

**Hero Section:**
- Large hero image showcasing professional facility management
- Overlay with company tagline "One-stop solution for protection and services"
- Blurred background buttons with outline variant
- Statistics counters with animated numbers

**Service Cards:**
- Grid layout with hover animations
- Icon-based service representation
- Subtle shadow and border treatments
- Expandable details on interaction

**Forms:**
- Professional contact forms with validation
- Consistent input styling across modes
- Clear error and success states

**Interactive Elements:**
- Animated counters for achievements
- Smooth scroll transitions between sections
- Hover effects on service cards
- WhatsApp and call-to-action buttons

### Animations
Minimal and purposeful animations using Framer Motion:
- Fade-in on scroll for content sections
- Smooth number counting for statistics
- Subtle hover effects on interactive elements
- Page transitions for navigation

## Images
**Hero Image:** Large professional photograph showing facility management services in action (cleaning, security, or maintenance staff at work)
**Service Icons:** Professional iconography for each service category
**About Section:** Company profile images showing team or facilities
**Background Elements:** Subtle geometric patterns or facility-related imagery as section backgrounds

## Layout Structure
1. **Hero Section** - Full viewport with company branding
2. **Services Overview** - Grid of main service categories
3. **About APS** - Company profile and credentials
4. **Statistics** - Animated counters for achievements
5. **Contact Section** - Professional inquiry form

The design emphasizes trust, professionalism, and comprehensive service capabilities while maintaining excellent usability across all devices and lighting conditions.