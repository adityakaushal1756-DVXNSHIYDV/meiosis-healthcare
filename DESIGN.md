# Meiosis Healthcare — Design Brief

## Direction & Tone
Refined enterprise healthcare SaaS with clinical trust aesthetic. Professional, approachable, minimally decorative. Inspired by Apple healthcare + Linear's interface precision. Premium positioning for Indian clinics.

## Palette & Contrast

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| **Primary** | oklch(0.45 0.15 252) | oklch(0.68 0.18 252) | Clinical trust, brand identity, interactive elements |
| **Secondary** | oklch(0.60 0.12 180) | oklch(0.65 0.14 180) | Wellness, care indicators, subtle accents |
| **Accent** | oklch(0.58 0.22 150) | oklch(0.72 0.20 150) | CTAs, actions, highlights, emphasis |
| **Foreground** | oklch(0.18 0 0) | oklch(0.94 0 0) | Body text, headings |
| **Background** | oklch(0.98 0 0) | oklch(0.13 0 0) | Page base |
| **Card** | oklch(0.99 0 0) | oklch(0.16 0 0) | Feature cards, elevated surfaces |
| **Border** | oklch(0.88 0 0) | oklch(0.26 0 0) | Dividers, subtle structure |
| **Muted** | oklch(0.92 0 0) | oklch(0.24 0 0) | Secondary text, disabled states |

## Typography
- **Display**: General Sans (geometric, modern, confidence) — H1, H2, hero headlines
- **Body**: DM Sans (precise, highly legible, clinical) — paragraphs, copy, labels
- **Mono**: Geist Mono (professional, technical) — code snippets, data displays

Scale: 12px/14px (sm) → 16px (base) → 20px/24px (lg) → 32px/40px (xl) → 60px+ (hero)

## Elevation & Depth
- Flat backgrounds: card & background tokens only
- Subtle shadows: `shadow-subtle` for cards (0.05–0.08 opacity)
- Elevated surfaces: `shadow-elevated` for modals, popovers (0.08–0.1 opacity)
- Glass effect: `glass-effect` utility for premium card overlay (backdrop blur, border)
- No drop-shadow abuse; rely on layering & contrast

## Structural Zones

| Zone | Light | Dark | Treatment |
|------|-------|------|-----------|
| **Header** | bg-card border-b-border | bg-card border-b-border | Navbar: solid card bg, subtle border, optional glass on scroll |
| **Hero** | bg-background + gradient accent | bg-background + gradient accent | Full-bleed hero with text-gradient-primary, 60px headline |
| **Feature Cards** | bg-card shadow-subtle | bg-card shadow-subtle | 3-column grid, teal accent on icon, emerald CTA button |
| **Section Breaks** | bg-muted/30 | bg-muted/20 | Alternating subtle backgrounds for rhythm |
| **Footer** | bg-card border-t-border | bg-card border-t-border | Mirrored header styling, professional links |
| **CTAs** | accent (emerald) | accent (emerald) | Primary: solid, secondary: outline+primary, loading: fade-in animation |

## Motion & Transitions
- Global: `transition-smooth` (0.3s cubic-bezier(0.4, 0, 0.2, 1))
- Entrance: `animate-slide-up` (12px translate + fade, 0.5s)
- Hover: 5% scale increase on interactive cards, text underline on links
- Loading: `animate-fade-in` for async content
- No bounce, no elastic easing; smooth, professional timing

## Spacing & Rhythm
- Base grid: 8px
- Section padding: 4rem (lg) / 2rem (md) / 1rem (sm)
- Card gap: 1.5rem (3-column grid)
- Component density: comfortable whitespace, never cramped
- Border radius: 0.625rem (base), 0.5rem (cards), 0.25rem (inputs)

## Component Patterns
- **Buttons**: Primary (solid accent), Secondary (outline primary), Destructive (red outline)
- **Cards**: flat or glass-effect, border-border only, no shadow unless elevated
- **Forms**: input bg-input, focus ring-accent, placeholder muted-foreground
- **Links**: text-primary underline, hover:text-accent transition-smooth
- **Badges**: muted bg, primary text for primary state; accent bg for status

## Signature Detail
Text gradient accent on main headline — primary to secondary (135deg) — reinforces premium, modern aesthetic while keeping clinical tone intact. Used sparingly for hero only, never on body text.

## Constraints
- No full-page gradients; gradients only on text accents & CTAs
- No animations on scroll; entrance animations on component mount only
- No colors outside OKLCH palette; all refs via CSS variables
- Min AA+ contrast verified in both light & dark modes
- Mobile-first responsive: sm/md/lg breakpoints for full-width optimization
