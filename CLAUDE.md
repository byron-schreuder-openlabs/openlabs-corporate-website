# CLAUDE.md — OpenLabs Corporate Website

This file provides context and conventions for AI assistants working in this repository.

## Repository Layout

```
openlabs-corporate-website/          ← git root
├── README.md
├── CLAUDE.md                        ← this file
└── openlabs-corporate-website/      ← actual application root
    ├── index.html                   ← Vite HTML entry point
    ├── vite.config.ts
    ├── package.json
    ├── postcss.config.mjs
    ├── firebase.json                ← Firebase Hosting config
    ├── .firebaserc                  ← Firebase project alias
    ├── guidelines/Guidelines.md     ← project-level AI guidelines (template)
    ├── ATTRIBUTIONS.md
    └── src/
        ├── main.tsx                 ← React entry point
        ├── assets/                  ← static assets (logo PNG)
        ├── styles/
        │   ├── index.css            ← root stylesheet (imports others)
        │   ├── tailwind.css         ← Tailwind v4 import + tw-animate-css
        │   ├── theme.css            ← CSS custom properties (light + dark)
        │   └── fonts.css            ← font imports
        └── app/
            ├── App.tsx              ← RouterProvider + global Toaster
            ├── routes.tsx           ← BrowserRouter route tree
            ├── components/
            │   ├── Layout.tsx       ← shell: Navigation + <Outlet/> + Footer
            │   ├── Navigation.tsx   ← sticky top nav, mobile hamburger
            │   ├── Footer.tsx       ← four-column footer grid
            │   ├── figma/
            │   │   └── ImageWithFallback.tsx  ← img with SVG placeholder on error
            │   └── ui/              ← shadcn/ui component library (do not edit)
            └── pages/
                ├── Home.tsx
                ├── About.tsx
                ├── Services.tsx
                ├── Research.tsx
                └── Contact.tsx
```

> **Important:** The working source lives inside the nested `openlabs-corporate-website/` subdirectory. All `npm` commands must be run from that directory.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Language | TypeScript (no `tsconfig.json` — Vite handles TS transpilation) |
| Build tool | Vite 6 |
| Styling | Tailwind CSS v4 (via `@tailwindcss/vite` plugin) + CSS custom properties |
| Routing | React Router v7 (`createBrowserRouter`) |
| UI primitives | Radix UI (full suite) |
| Component library | shadcn/ui (pre-built, lives in `src/app/components/ui/`) |
| Icons | Lucide React |
| Animation | Motion (Framer Motion successor) + tw-animate-css |
| Toasts | Sonner |
| Forms | React Hook Form |
| Hosting | Firebase Hosting |
| Package manager | npm (lockfile present; `pnpm.overrides` in package.json is cosmetic) |

---

## Development Commands

All commands run from `openlabs-corporate-website/openlabs-corporate-website/`:

```bash
npm install          # install dependencies
npm run dev          # start dev server (default port 5173)
npm run build        # production build → dist/
npm run preview      # serve dist/ locally on port 5173
npm run deploy       # build + firebase deploy --only hosting
```

There is **no test suite** and **no lint script** configured.

---

## Routes

Defined in `src/app/routes.tsx`. All routes are children of the `Layout` component:

| Path | Component | Description |
|---|---|---|
| `/` | `Home` | Hero, stats, features, domain grid, CTA |
| `/about` | `About` | Mission, vision, values, story, expertise |
| `/services` | `Services` | Five domain service cards with alternating layout |
| `/research` | `Research` | Research areas, innovations, publications tabs |
| `/contact` | `Contact` | Contact form (mock submit), offices, FAQ |

---

## Key Conventions

### Path Aliases
`@` maps to `./src` (configured in `vite.config.ts`). Use `@/` for all non-relative imports within `src/`.

```tsx
// correct
import { Button } from "@/app/components/ui/button";
import logoImage from "@/assets/fba13bf8381c894eddfbe9344a15a6fa297ed4ce.png";

// avoid
import { Button } from "../../components/ui/button";
```

### Styling

- Use **Tailwind utility classes** as the primary styling approach.
- The brand gradient is `from-teal-600 to-emerald-600` (used on buttons, icons, hero sections).
- Active nav state uses `bg-teal-50 text-teal-600`.
- Page sections follow a light/dark alternating pattern: `bg-white` → `bg-gray-50` → `bg-white`.
- The CTA sections use `bg-gradient-to-r from-teal-600 to-emerald-600 text-white`.
- Avoid `absolute` positioning unless strictly necessary; prefer flexbox and grid.
- The `bg-grid-pattern` utility class (defined in `src/styles/index.css`) provides the decorative background grid.
- CSS custom properties for the design token system are in `src/styles/theme.css`. Do not override them inline; use Tailwind classes instead.
- Do **not** add `.css`, `.tsx`, or `.ts` files to `vite.config.ts`'s `assetsInclude` list.

### Components

- **Do not modify** files in `src/app/components/ui/`. These are shadcn/ui primitives managed separately.
- Use `ImageWithFallback` (from `src/app/components/figma/`) instead of bare `<img>` tags for external images, to handle load failures gracefully.
- New shared components belong in `src/app/components/`.
- New page-level components belong in `src/app/pages/`.
- Keep component files small; extract helpers and sub-components into their own files when files grow large.

### Routing

- Use `<Link to="...">` from `react-router` (not `react-router-dom`) for internal navigation.
- New routes must be added to `src/app/routes.tsx` as children of the root `Layout` route.

### TypeScript

- There is no `tsconfig.json`; Vite performs TypeScript transpilation directly without strict type checking.
- Prefer explicit types for function props; avoid `any`.

### Forms

- The `Contact` page uses controlled `useState` for form state (no React Hook Form currently).
- Form submission is currently a mock (`toast.success(...)`). Real API integration should be added when a backend is available.

---

## Design System

### Brand Identity
- **Company:** OpenLabs — AI Research & Development Laboratory, South Africa
- **Tagline:** Cloud First Innovation
- **Contact:** info@openlabs.co.za
- **Locations:** Cape Town, Johannesburg, Pretoria

### Color Palette (Tailwind classes)
| Role | Class |
|---|---|
| Primary gradient | `from-teal-600 to-emerald-600` |
| Active / highlight | `teal-600`, `teal-50` |
| Background light | `gray-50`, `white` |
| Background dark (footer) | `gray-900` |
| Body text | `gray-600`, `gray-700` |
| Headings | `gray-900` |

### Layout Grid
- Max content width: `max-w-7xl mx-auto`
- Horizontal padding: `px-4 sm:px-6 lg:px-8`
- Standard section vertical padding: `py-20`

### Typography
- Base font size: `16px` (set via `--font-size` CSS variable)
- Headings: medium weight, 1.5 line-height
- Use Tailwind's responsive text scale (`text-4xl md:text-6xl`) for hero headings

### Buttons
- Primary: `bg-gradient-to-r from-teal-600 to-emerald-600` (Tailwind gradient)
- Secondary: `variant="outline"` (shadcn Button)
- Always use the shadcn `<Button>` component; never a raw `<button>` for UI actions
- Use `asChild` + `<Link>` for navigation buttons

---

## Deployment

The site is deployed to Firebase Hosting.

- Build output: `dist/`
- SPA fallback: all routes rewrite to `/index.html` (configured in `firebase.json`)
- Cache: JS and CSS assets are set to `max-age=31536000,immutable`
- Firebase project: configure `.firebaserc` with a real project ID before deploying

To deploy:
```bash
cd openlabs-corporate-website/openlabs-corporate-website
npm run deploy
# requires `firebase login` and a configured project in .firebaserc
```

---

## Adding a New Page

1. Create `src/app/pages/NewPage.tsx` following the pattern of existing pages (hero → content sections → CTA).
2. Add the route in `src/app/routes.tsx`:
   ```tsx
   { path: "new-page", Component: NewPage }
   ```
3. Add a nav link in `src/app/components/Navigation.tsx` (`navLinks` array).
4. Add a footer link in `src/app/components/Footer.tsx` if appropriate.

---

## Important Notes for AI Assistants

- **Read files before editing.** Never propose or apply changes to files you haven't read.
- **No tests exist.** Verify changes by running `npm run build` to check for compilation errors.
- **No linter is configured.** Keep code style consistent with existing files (2-space indent, double quotes for JSX attributes, single quotes for TS strings).
- **The `ui/` directory is off-limits.** Do not refactor or modify shadcn/ui primitives.
- **Keep the teal/emerald brand palette.** Do not introduce new primary colors without explicit instruction.
- **Images use Unsplash URLs.** The `ImageWithFallback` component handles broken image URLs — always use it for external images.
- **No backend.** The contact form submission is mocked. Do not add server-side logic without explicit instruction to do so.
