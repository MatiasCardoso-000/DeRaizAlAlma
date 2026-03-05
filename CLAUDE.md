# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install       # Install dependencies
npm run dev       # Start dev server (Vite)
npm run build     # Type-check + production build (tsc -b && vite build)
npm run preview   # Preview production build
```

No test runner is configured in this project.

## Architecture

Single-page React app (React 18 + Vite + TypeScript) for "De Raíz al Alma", a spiritual services landing site.

**Routing** (`src/App.tsx`): React Router v7. The home page (`/`) is defined inline as `<Home>` inside `App.tsx`. All service pages use dedicated files under `src/pages/`.

| Route | Component |
|---|---|
| `/` | `Home` (inline in App.tsx) |
| `/carta-astral` | `CartaAstral` |
| `/constelaciones` | `Constelaciones` |
| `/revolucion-solar` | `RevolucionSolar` |
| `/tarot-evolutivo` | `TarotEvolutivo` |

**Page structure**: Every service page wraps content in `<PageLayout>` (`src/components/PageLayout.tsx`), which renders `<Header>` + `<main>` + `<Footer>`. The home page does NOT use `PageLayout` — it renders `<Header>` and `<Footer>` directly.

**SEO**: Pages call `useSeo(title, description)` (`src/hooks/useSeo.ts`) to set `document.title` and the meta description tag.

**Styling**: Tailwind CSS + custom classes defined in `src/index.css`. Key design tokens are hardcoded color hex values (terracotta `#B8593A`, brown `#3A2415`/`#5C3522`, cream `#F5EDE0`). Reusable CSS classes:
- `.fondo-terroso` — page background with radial gradients and dot texture
- `.alma-card` — card component with border/shadow/hover
- `.btn-verde`, `.btn-terracota`, `.btn-sage` — button variants
- `.organic-divider` — horizontal section separator
- `.animate-float`, `.animate-fade-in-up` — entrance animations

**Typography**: `font-serifDisplay` = Great Vibes (cursive, headings); `font-body` = Raleway (sans-serif, body). Both loaded via Google Fonts in `index.html`.

**WhatsApp CTA**: The `WA_URL` constant (phone `5491162373100`) appears in both `App.tsx` and `Header.tsx` with different pre-filled messages per context. Each service page also defines its own `WA_URL` with a service-specific message.
