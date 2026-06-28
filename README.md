# Project Documentation: Cyberpunk Pixel Portfolio

This document serves as the single source of truth for the project, providing a comprehensive overview for future development.

## 1. Project Overview

This project is a professional software engineering portfolio designed with a subtle retro cyberpunk pixel-art aesthetic. The goal is to create a memorable, recruiter-friendly experience that showcases professional skills and projects while expressing personality through intentional environmental storytelling.

## 2. Design Vision

The visual direction is a "professional portfolio inside a living city."
- **Theme:** Cyberpunk pixel-art meets modern clean UI.
- **Goal:** Recruiter-first design—professionalism must never be compromised for the aesthetic.
- **Storytelling:** The website acts as a scrolling city journey from night skies down into the developer's tech district.
- **Balance:** High readability (modern sans-serif fonts) paired with atmospheric pixel-art (backgrounds, UI accents).

## 3. Website Structure

- **Navbar:** Sticky navigation with links and social buttons.
- **Hero:** Personal introduction with a neon-accented cyberpunk vibe.
- **About:** Professional bio, education, and background.
- **Skills:** Categorized technical expertise.
- **Projects:** Featured engineering work with tech stack highlights.
- **Experience:** Timeline of professional roles.
- **Contact:** Clean, simple contact form.
- **Footer:** Copyright, links, and back-to-top.

## 4. Environmental Storytelling

The user experiences a scrolling journey through a pixelated city landscape:
- **Sky/Rooftops:** Ambient background with stars, clouds, and flying drones.
- **Workspace:** Main content area, structured and clean, framed by the city environment.

## 5. Pixel World Design System

- **Placement:** Environmental props are placed in peripheral empty spaces.
- **Asset Usage:** Pixelated background images and small CSS-based pixel animations create a living city feel.
- **Layering:** Background city elements (fixed) -> Content container (overlay) -> Interactive UI.

## 6. Typography System

- **Modern Sans-Serif (Professional):** `Inter` used for all readable content (About, Projects descriptions, Experience, etc.).
- **Pixel Font (Accent):** `Press Start 2P` used for branding, headers, and UI status badges (Section titles, Hero title, UI labels).

## 7. Color Palette

- **Primary Background:** Deep charcoal (`#0B1020`)
- **Accent Primary:** Neon Cyan (`#6DCAFD`)
- **Accent Secondary:** Neon Pink (`#FF00FF`)
- **Success:** Emerald (`#34D399`)
- **Error:** Soft Red (`#F87171`)
- **Text Primary:** Off-white (`#F8FAFC`)
- **Text Secondary/Muted:** Slate (`#94A3B8`)

## 8. Animation System

- **Subtle Looping:** Twinkling stars, drifting clouds, blinking window lights, hovering drones, flickering neon.
- **Performance:** CSS-based animations, GPU-friendly transforms.

## 9. Component Architecture

- **Navbar:** Sticky, links + social icons.
- **Hero:** Introduction + Call to Action.
- **Section:** Reusable wrapper for sections with standard layout.
- **Card-based Components:** Skills, Projects, Experience sections leverage consistent card styling.
- **ContactForm:** Simple validated form.
- **Environment:** Background scene container in `App.tsx` handles ambient city props.

## 10. Layout Rules

- **Responsive:** Mobile-first, desktop-optimized.
- **Spacing:** Generous padding within section wrappers; content is constrained in `max-w-5xl`.
- **Hierarchy:** Consistent title sizing, clear font differentiation.

## 11. Folder Structure

```text
/src
  /assets        # Images, logos, etc.
  /components    # UI components (Hero, Navbar, etc.)
  /data          # Static data (nav items, project list, etc.)
  App.tsx        # Main application layout
  index.css      # Tailwind & global styles
  main.tsx       # Entry point
  types.ts       # Global TypeScript types
```

## 12. Context for Future AI Sessions

- **Vision:** Professional portfolio, subtle cyberpunk city atmosphere.
- **Design Philosophy:** Content-first, recruiter-friendly, restrained pixel accents.
- **Implementation:** React + Tailwind, modular components, maintain strict layout/spacing consistency.
- **Coding Priorities:** Semantic HTML, accessible contrast, mobile-friendly design.
