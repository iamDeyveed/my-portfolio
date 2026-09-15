# Design System

## Overview

Yagazie's portfolio is a bright studio wall: warm paper, black ink, one electric blue signal, and artwork that supplies nearly all other color. The visual system is rectangular, direct, and image-first. It should feel more like a tightly curated graduate show than a marketing template.

## Color

- Paper: `oklch(0.965 0.012 86)`
- Ink: `oklch(0.16 0.015 255)`
- Muted ink: `oklch(0.48 0.018 255)`
- Rule: `oklch(0.79 0.015 86)`
- Signal blue: `oklch(0.58 0.23 258)`
- Signal yellow: `oklch(0.89 0.18 94)`

Project pages may replace the paper and signal colors with project-owned tones. Core navigation and text contrast remain stable.

## Typography

- Display: Archivo Black, used for hero statements and major project titles.
- Body: Atkinson Hyperlegible, used for navigation, metadata, captions, and body copy.
- Hero scale: `clamp(4rem, 11vw, 10.75rem)` with tight line height and tracking.
- Section scale: `clamp(2.5rem, 6vw, 6.5rem)`.
- Body copy: never below 1rem; maximum line length 68ch.

## Spacing

Use a fluid rhythm based on 8px steps. Primary section spacing ranges from 96px on mobile to 192px on large screens. Tight metadata clusters contrast with large gaps between bodies of work.

## Grid

Desktop uses a 12-column grid with fluid 24px to 48px gutters and a maximum canvas of 1800px. Projects use full-width, 7/5, and 5/7 compositions. Mobile becomes a deliberate single-column sequence while preserving image aspect ratios and generous vertical pacing.

## Imagery

No rounded cards. Artwork sits in hard-edged fields with intentional crops on index pages and original aspect ratios in case studies. Homepage thumbnails use responsive Next.js images and below-fold lazy loading. Gallery images include explicit dimensions to avoid layout shift.

## Components

- Navigation: fixed, compact, paper-backed after scrolling, with a visible availability status on larger screens.
- Project preview: image, title, compact category and year line. Hover reveals a small view cursor and scales the image by no more than 3%.
- Filter: quiet inline text control with a single underline state.
- Browser frame: squared browser chrome with restrained controls and no ornamental device shell.
- Contact: oversized closing statement with direct email and WhatsApp actions.

## Motion

Use `cubic-bezier(0.16, 1, 0.3, 1)` for fast, expensive-feeling ease-out movement. Page load staggers the hero by 60 to 100ms. Scroll reveals move images no more than 28px. Filter changes fade and translate in 240ms. All motion stops under `prefers-reduced-motion`.
