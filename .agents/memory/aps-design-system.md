---
name: APS Design System
description: Color palette, layout patterns, and reusable utilities for the APS facility management site
---

## Primary Color: Gold/Amber
`--primary: 38 72% 40%` — warm gold used for labels, CTA buttons, accents, star ratings
`--foreground: 215 55% 14%` — dark navy for text and the dark hero CTA button
Background is pure white `0 0% 100%`

**Why:** Reference design (`attached_assets/image_1781530269802.png`) uses white/gold/navy — not blue.

## gold-label Utility Class
Defined in `index.css` @layer utilities:
```css
.gold-label {
  @apply flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase;
  color: hsl(var(--primary));
}
.gold-label::before {
  content: '';
  display: block;
  width: 2rem;
  height: 2px;
  background-color: hsl(var(--primary));
}
```
Use this on every section label (e.g. "WHAT WE DO", "WHO WE ARE", "TRAINING & QUALITY").

**How to apply:** `<div className="gold-label mb-4">Section Name</div>`

## Card Grid Layout Pattern
All service/feature card grids use border-based grid (not card components):
```jsx
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border-l border-t">
  <div className="border-r border-b p-6 hover:bg-muted/30 transition-colors group">
    ...
  </div>
</div>
```

**Why:** Matches the editorial, magazine-style grid from the reference design. No rounded cards, no shadows — clean line borders only.

## Icon Style
Icons use circle border containers, NOT colored backgrounds:
```jsx
<div className="w-11 h-11 rounded-full border-2 border-border group-hover:border-primary/50 flex items-center justify-center mb-5">
  <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
</div>
```

## Hero Split Layout
`grid lg:grid-cols-[55%_45%]` — content left 55%, image right 45%, min-height calc(100svh - navbar).
No dark wash/overlay on the hero image — the image is clean.

## Footer
Dark footer using `bg-foreground text-background/80` — inverted colors (white text on dark navy).
