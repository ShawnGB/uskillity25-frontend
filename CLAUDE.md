# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**uskillity25-frontend** is a React Router 7 application built with TypeScript, Tailwind CSS v4, and server-side rendering. The project aims to help people rediscover their creativity through an engaging, warmly-designed web experience. The application uses Radix UI Themes for accessible components and Motion (formerly Framer Motion) for animations.

## Essential Commands

### Development
```bash
npm run dev              # Start development server at http://localhost:5173 with HMR
npm run build            # Build for production (creates build/client and build/server)
npm run start            # Start production server from build/server/index.js
npm run typecheck        # Run TypeScript type checking (generates types first with react-router typegen)
```

### Docker
```bash
docker build -t uskillity25-frontend .
docker run -p 3000:3000 uskillity25-frontend
```

## Architecture

### React Router 7 Framework

This project uses React Router 7 (formerly Remix), which provides:
- **Server-side rendering (SSR)** - Enabled by default in `react-router.config.ts`
- **File-based routing** - Routes defined in `app/routes.ts` using the new config-based approach
- **Type-safe route modules** - Each route has auto-generated types in `app/+types/[route-name]`
- **Built-in data loading** - Use `loader` and `action` exports in route files

### Project Structure

```
app/
├── root.tsx                 # Root layout with HTML shell, error boundary, and global links
├── routes.ts                # Route configuration (uses index() helper for routes)
├── routes/                  # Route modules
│   └── home.tsx            # Index route (/)
├── components/
│   ├── home/               # Page-specific components
│   │   └── Hero.tsx        # Hero section with complex gradients and animations
│   └── ui/                 # Reusable UI components
│       └── button.tsx      # Custom button with primary/secondary variants
└── app.css                 # Global styles with design system variables
```

### Styling System

The app uses a comprehensive **warm, human-centered design system**:

**Typography:**
- Serif font: `Crimson Pro` (headings, emotional emphasis) - defined as `--font-serif`
- Sans-serif font: `Manrope` (body, UI elements) - defined as `--font-sans`
- Base typography auto-applied to elements (see app.css lines 190-263)

**Color Palette:**
- Primary: `#d63447` (warm red-purple) - `--primary`
- Background: `#fbf6f2` (warm cream) - `--background`
- Foreground: `#3b332e` (dark brown) - `--foreground`
- Creative Realm Colors:
  - Art: `#f77b72` - `--color-art`
  - Nature: `#91b59c` - `--color-nature`
  - Music: `#7ba4c6` - `--color-music`
  - Mind: `#bca7e8` - `--color-mind`
  - Community: `#f3c97b` - `--color-community`

**Key Design Features:**
- Paper texture overlay (applied via `body::before`)
- Warm gradients and radial glows
- Rounded corners with `--radius: 1rem`
- Custom selection color (light red-purple)
- All CSS variables accessible via Tailwind (e.g., `bg-background`, `text-primary`)

### Path Aliases

TypeScript and Vite are configured with path aliases:
- `~/*` maps to `./app/*` (defined in `tsconfig.json` and enabled by `vite-tsconfig-paths`)
- Example: `import Hero from "~/components/home/Hero"`

### Type Generation

React Router automatically generates types in `.react-router/types/` based on your routes. The `typecheck` script runs `react-router typegen` before TypeScript compilation to ensure types are fresh.

## Key Patterns

### Route Modules

Routes in `app/routes/` follow React Router 7 conventions:

```typescript
import type { Route } from "./+types/route-name";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Page Title" },
    { name: "description", content: "Description" },
  ];
}

export default function RouteName() {
  return <div>Content</div>;
}
```

### Component Styling

Components combine inline styles with Tailwind classes for precise control:
- Use CSS variables for colors: `style={{ color: "var(--primary)" }}`
- Complex gradients and shadows are typically inline styles
- Layout and spacing use Tailwind utilities
- Font families reference CSS variables: `fontFamily: "var(--font-serif)"`

### Motion Animations

The project uses the `motion` library (successor to Framer Motion):
- Import from `motion/react` (not `framer-motion`)
- Common patterns: entrance animations, hover effects, scroll indicators
- See `Hero.tsx` for examples of gradient text effects, animated underlines, and scroll indicators

## Current Implementation Status

The application is in early development:
- Hero section is fully implemented with rich visual design
- Home page has placeholder sections: About, Purpose, Join, Why it Matters
- Button component exists but has TODO for hover animations (see lines 53-77 in `button.tsx`)
- Only one route (`/`) is currently defined

## Important Notes

- This is a TypeScript-strict project (`"strict": true` in tsconfig.json)
- All modules use ES2022+ syntax with ESM
- The app uses Tailwind CSS v4 with the new `@import "tailwindcss"` syntax
- SSR is enabled - be mindful of client-only code (use `.client.tsx` files if needed)
- Design prioritizes warmth, organic feel, and human connection over sharp corporate aesthetics

## Commit Conventions

This project follows **Conventional Commits** for clear, structured commit messages:

### Format
```
<type>(<scope>): <short summary>
```

**Example:** `feat(api): add user search endpoint`

### Types
- **feat** → New feature
- **fix** → Bug fix
- **chore** → Maintenance / no logic changes (e.g., deps, scripts)
- **refactor** → Code restructuring without logic changes
- **docs** → Documentation updates
- **style** → Formatting / Linting (no code logic changes)
- **test** → Tests
- **perf** → Performance optimization
- **ci** → CI/CD or workflow changes
- **build** → Build system / dependencies
- **revert** → Revert a previous commit

### Special Markers
- **!** → Breaking change (e.g., `feat(api)!: change login flow`)
- **Body** → Additional details (optional)
- **Footer** → `BREAKING CHANGE:` description or issue references (e.g., `Closes #123`)

### Quick Reference
👉 **feat** = new feature | **fix** = bug | **chore** = cleanup | Rest self-explanatory
