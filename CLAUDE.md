# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

"LE'S Art and Photography" (LESART) — a static portfolio website for photography, art, and logo services. No build step, no package manager, no framework.

## Development

Open any `.html` file directly in a browser, or serve locally with:

```bash
npx serve .
# or
python3 -m http.server 8080
```

## Architecture

Pure HTML/CSS/JS — no framework, no bundler.

- `index.html` — landing page with full-screen hero and "Explore Work" modal
- `murals.html` / `canvas.html` / `other-art.html` — gallery pages with a 3-column responsive grid
- `contact.html` — contact page with a two-column layout (form left, info right)
- `style.css` — single shared stylesheet for all pages
- `button.js` — modal open/close logic for the hero button on `index.html`
- `nav.js` — mobile hamburger toggle (included on every page)

## Adding Photos to a Gallery Page

Each gallery card is structured as:
```html
<div class="gallery-card">
    <div class="gallery-placeholder">...</div>   <!-- remove this -->
    <img src="./images/your-file.jpg" alt="..."> <!-- add this -->
</div>
```
Replace the `gallery-placeholder` div with an `<img>` tag. Add more `gallery-card` divs to the grid as needed.

## Styling Conventions

CSS variables are defined in `:root` in `style.css`:

- `--dark-blue: #0B2240` — navbar, hero overlays, primary dark
- `--mid-blue: #1B4D8E` — page hero gradients, modal buttons, contact right panel
- `--light-blue: #4A9DC8` — accents, placeholder borders
- `--gold: #E8C040` — primary CTA buttons, logo text, hover highlights
- `--off-white: #F0F6FB` — gallery section background

Content is centered within a 1200px max-width using `padding: 0 calc((100vw - 1200px) / 2)` on the navbar and section wrappers. Font is Poppins (Google Fonts), loaded in each page's `<head>`.

The gallery grid is 3 columns on desktop, 2 on tablet (≤900px), 1 on mobile (≤600px).
