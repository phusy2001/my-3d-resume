# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

---

## [Unreleased]

---

## [0.2.0] — 2026-03-27

### Changed
- Rewrote README to reflect SvelteKit 2 + Svelte 5 + TypeScript architecture
- Added CHANGELOG

---

## [0.1.0] — 2026-03-27

### Added
- Interactive desk lamp — click to toggle on/off
- Moonlight SpotLight + floor pool planes simulating window light projection at night
- Sleep state machine: character goes to bed at 23h, wakes at 7h
- Detailed sleeping figure (`bedBodyLump`) shown while character is sleeping
- `window.setSimHour(h, m)` helper for testing time-of-day states
- SvelteKit 2 + Svelte 5 (runes) + TypeScript rewrite
  - `src/lib/data/resume.ts` — typed single source of truth for all portfolio content
  - `src/lib/scene/` — pure TS modules for setup, lighting, clock, interactions, camera-anim, labels
  - `src/lib/stores/scene.svelte.ts` and `ui.svelte.ts` — runes-based state
  - Prerendered static fallback pages (`/about`, `/projects`, `/contact`) for SEO and no-WebGL scenarios
  - `FallbackContent.svelte` — always in DOM, visually hidden when WebGL works
  - JSON-LD Person + CreativeWork schema in `+layout.svelte`
  - Three.js lazy-loaded in `onMount` — zero SSR cost

### Changed
- Refactored lamp toggle and visual initialization
- Tweaked bookshelf materials, geometry, and simulation time defaults
- Reformatted scene HTML/JS and adjusted room lighting values
- Updated live demo URL in README

### Fixed
- Bookshelf material and geometry corrections

---

## [0.0.1] — 2026-03-26

### Added
- Initial 3D resume project — interactive Three.js room with day/night lighting
- Clickable objects: laptop (Projects), bookshelf (Skills), wall frame (About Me), character (Contact)
- Camera orbit, zoom, and fly-to animations via GSAP
- Glass-morphism UI panels with `ESC` to close and side-dot navigation
- Day/night system driven by real local time (`updateRoomLighting`)
- Laptop screens turn off at night (23h–7h)
