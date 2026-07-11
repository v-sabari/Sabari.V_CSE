# Sabari Venkatesan — Portfolio

A personal portfolio site built with React 19 + Vite, featuring a custom
cursor, smooth scrolling, an animated opening sequence, and a command
palette. Styled with Tailwind CSS v4 and shadcn/ui, animated with Framer
Motion and GSAP.

**Live site:** _add your deployed URL here_

## Features

- Animated opening sequence and section reveals
- Custom cursor and magnetic hover effects
- Smooth scrolling (Lenis)
- Command palette (⌘K style quick navigation)
- Featured builds / project showcase
- Fully responsive, dark-first design
- Resume download and one-click email / call contact links

## Tech stack

| Category  | Tools                                           |
| --------- | ----------------------------------------------- |
| Framework | React 19, Vite                                  |
| Styling   | Tailwind CSS v4, shadcn/ui, tw-animate-css      |
| Animation | Framer Motion, GSAP, Lenis                      |
| Forms     | React Hook Form, Zod                            |
| Tooling   | ESLint, Prettier, TypeScript types (JS + JSDoc) |

## Getting started

### Prerequisites

- Node.js 20 or later
- npm 10 or later

### Installation

```bash
git clone https://github.com/v-sabari/<repo-name>.git
cd <repo-name>
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build

```bash
npm run build
npm run preview   # preview the production build locally
```

### Format

```bash
npm run format
```

## Project structure

```
.
├── public/              # Static assets served as-is (favicon, resume PDF, sitemap)
├── src/
│   ├── assets/           # Images used in the site
│   ├── components/       # Page sections and interactive components
│   │   └── ui/            # shadcn/ui primitives
│   ├── hooks/            # Custom React hooks
│   ├── lib/               # Utility helpers
│   ├── App.jsx            # Root component / error boundary
│   ├── main.jsx           # Entry point
│   └── styles.css         # Global styles / Tailwind entry
├── legacy/               # Unused files from a prior static HTML version (see legacy/README.md)
├── index.html            # Vite HTML entry
├── vite.config.js
├── eslint.config.js
├── components.json        # shadcn/ui config
└── package.json
```

## Deployment

This is a static Vite build and can be deployed to any static host (Vercel,
Netlify, GitHub Pages, Cloudflare Pages). Build output goes to `dist/`.

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for details.

## Contact

Sabari Venkatesan — [email](mailto:sabarivenkatesan2962006@gmail.com) ·
[GitHub](https://github.com/v-sabari) ·
[LinkedIn](https://linkedin.com/in/v-sabari)
