# Nomadex

The company website for **Nomadex**, a privacy and connectivity company, and its product family:

- **Nomadex Shield**: a VPN for simple, private connectivity (in development).
- **OasisX-Glide VPN**: a fast, free VPN with Pro plans (available now on Android).

The site is a single-page app built with [React 19](https://react.dev/) and [Vite 7](https://vite.dev/). It has no backend and builds to static files.

## Getting started

Requires [Node.js](https://nodejs.org/) 20.19+ or 22.12+.

```bash
npm install
npm run dev       # dev server at http://127.0.0.1:5173/
npm run build     # production build in dist/
npm run preview   # serve the built dist/ locally
```

The dev and preview servers bind to `127.0.0.1` (see `vite.config.js`), which avoids IPv6-only `localhost` issues on Windows.

## Project structure

```
index.html              App shell: meta tags, favicons, saved-theme bootstrap, Google tag
vite.config.js          Vite config (React plugin, host binding)
public/
  .htaccess             Apache rules: HTTPS, SPA fallback, caching, security headers
  assets/               Images (WebP), favicons
    oasisx/             OasisX-Glide VPN artwork and backgrounds
    shield/             Nomadex Shield emblem, showcase, and app screens
src/
  main.jsx              Entry point; enables animations unless reduced motion is preferred
  App.jsx               Page registry, page titles, client-side navigation, scroll reveals
  routes.js             URL paths for every page, plus legacy #hash link support
  products.js           Product data: names, status, logos, platforms, store links
  styles.css            All styles: themes, layout, components, animations
  components/
    Layout.jsx          Navigation (with Products dropdown), theme switch, footer
    PageHead.jsx        Shared page header (eyebrow, title, intro, artwork)
    Product.jsx         Product logo, card header, breadcrumbs, legal page building blocks
    Platforms.jsx       Platform list, device detection, download cards
    PlaceCarousel.jsx   Home page "places" carousel
    Icons.jsx           Logo, SVG icon sprite, OS icons
  pages/                One component per page (Home, About, Products, Shield, OasisX, ...)
design_images/          Source design files (git-ignored)
```

## Pages

| Path | Page |
| --- | --- |
| `/` | Home |
| `/about` | About |
| `/products` | All products |
| `/shield`, `/shield/privacy`, `/shield/terms` | Nomadex Shield and its policies |
| `/oasisx`, `/oasisx/privacy`, `/oasisx/terms` | OasisX-Glide VPN and its policies |
| `/download` | Downloads for every product and platform |
| `/technology`, `/vision`, `/partners`, `/contact` | Company pages |
| `/privacy`, `/terms` | Website privacy policy and terms |

Old links like `/#about` still work and are redirected to the matching path.

### Adding a page

1. Create the component in `src/pages/`.
2. Add its path to `PATHS` in `src/routes.js`.
3. Register it in `PAGES` (and optionally `TITLES`) in `src/App.jsx`.
4. Link to it with `pathFor("id")`. Internal links are intercepted, so navigation stays client-side.

### Adding or updating a product

Product details live in `src/products.js`. Each product defines its name, status, tagline, logo, policy page ids, a `downloadNote`, and a `platforms` list. A platform with a `url` gets a download button; one without gets a "Coming soon" button. The Products page, the nav dropdown, the footer, and the Download page all read from this file.

## Themes and animation

- **Themes:** dark (default) and bright, switched in the nav and saved in `localStorage` (`nomadex-theme`). Colors are CSS variables on `html[data-theme="dark" | "bright"]`.
- **Animation:** all motion (page and header entrances, scroll reveals, hover effects, and ambient backgrounds) is gated behind the `motion` class on `<html>`. That class is only added when the visitor hasn't asked for reduced motion, so `prefers-reduced-motion` users get a static site.

## Images

Site images are WebP in `public/assets/` and are referenced by absolute path (for example `/assets/nomadex-about.webp`). Keep new images in WebP and reasonably sized; page header art is 1152×864.

## Deployment

1. Run `npm run build`.
2. Upload **everything inside `dist/`**, including the hidden `.htaccess` file, to the site's document root.

The `.htaccess` file (Apache with `mod_rewrite`) forces HTTPS, serves `index.html` for every app path so deep links like `/oasisx/privacy` work, caches fingerprinted JS and CSS for a year and images for 30 days, and sets basic security headers. On other hosts, configure the equivalent SPA fallback that rewrites unknown paths to `/index.html`.
