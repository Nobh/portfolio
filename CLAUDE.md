# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Nadir Oubah, a French-speaking Full Stack Web Developer. The project is built with Next.js 15, React 19, and TypeScript, featuring a modern sidebar-based layout with dark/light theme support.

## Development Commands

The main application is located in the `portfolio-nadir/` directory. All commands should be run from this directory:

```bash
cd portfolio-nadir/
npm run dev     # Start development server (http://localhost:3000)
npm run build   # Build for production
npm run start   # Start production server
npm run lint    # Run ESLint
```

## Architecture & Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS with mobile-first approach
- **UI Components**: Shadcn/ui + Radix UI primitives
- **Icons**: Lucide React
- **Theming**: next-themes for dark/light mode
- **Layout**: Sidebar-based navigation with responsive design

## Code Conventions

This project follows specific coding standards defined in `.cursorrules`:

- **Component Structure**: Use `export function` (not default exports) with props object and inline typing
- **TypeScript**: Prefer types over interfaces, avoid enums (use maps instead)
- **Naming**: Lowercase with dashes for directories, descriptive variables with auxiliary verbs
- **Performance**: Minimize `use client`, favor React Server Components, wrap client components in Suspense
- **File Organization**: Components, subcomponents, helpers, static content, then types

## Project Structure

```
portfolio-nadir/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── about/          # About page
│   │   ├── experience/     # Experience page
│   │   ├── projects/       # Projects page
│   │   └── layout.tsx      # Root layout with sidebar
│   ├── components/
│   │   ├── ui/             # Shadcn/ui components
│   │   ├── PortfolioSidebar.tsx  # Main navigation sidebar
│   │   ├── theme-provider.tsx    # Theme context provider
│   │   └── theme-toggle.tsx      # Dark/light mode toggle
│   ├── hooks/
│   │   └── use-mobile.tsx  # Mobile detection hook
│   └── lib/
│       └── utils.ts        # Utility functions (cn, etc.)
├── public/                 # Static assets (images, icons)
└── components.json         # Shadcn/ui configuration
```

## Key Components

- **PortfolioSidebar**: Main navigation component with user profile, menu items, social links, and contact dropdown
- **ThemeProvider**: Wraps the app for dark/light theme switching
- **Layout**: Root layout that combines ThemeProvider and PortfolioSidebar

## Content Language

The portfolio content is in French:
- User: "Nadir Oubah, Développeur Web Full Stack"
- Navigation: "Accueil", "À propos", "Projets", "Expérience"
- Meta description: "Portfolio de Nadir Oubah, Développeur Web Full Stack"

## Development Notes

- Working directory is `/Users/nadir/SaaS Projects/portfolio`
- Main codebase is in `portfolio-nadir/` subdirectory
- Uses React 19 RC with Next.js 15
- All pages use the shared sidebar layout
- Theme persists across sessions using next-themes