# Repository Guidelines

## Project Structure & Module Organization
The site follows the Academic Pages Jekyll layout as a single-page design. Page templates live in `_layouts/` and reusable snippets in `_includes/`. All content (bio, publications, talks, awards, education, etc.) is hand-written inline in `_pages/about.zh.md` / `_pages/about.en.md` — the top nav links to in-page anchors, not to separate collection pages. The MIPLIB record tables on both language versions are rendered from the single data source `_data/miplib.yml` via `_includes/miplib-records.html`; do not hand-edit the generated tables. Store shared data in `_data/` (e.g. `navigation.yml`) and SCSS partials inside `_sass/`. Upload images to `images/` and keep PDFs or slides in `files/`. All interaction lives in the dependency-free `assets/js/site.js` plus small inline scripts — there is no JS build step and no `main.min.js`.

## Build, Test, and Development Commands
- `bundle install` — install Ruby gems; use `bundle config set --local path 'vendor/bundle'` for an isolated vendor tree.
- `bundle exec jekyll serve -l -H localhost` — launch the live-reload dev server at `http://localhost:4000`.
- `JEKYLL_ENV=production bundle exec jekyll build` — create the production-ready `_site/` snapshot; run before committing (production enables `compress_html` and matches GitHub Pages output).
- `bundle exec jekyll doctor` — scan for configuration or front matter issues after structural changes.

## Coding Style & Naming Conventions
Use 2-space indentation across Liquid, SCSS, and YAML. Keep YAML front matter compact and quote only when needed. Markdown files should favor sentence case headings. Maintain Liquid readability with {% raw %}`{% %}`{% endraw %} and {% raw %}`{{ }}`{% endraw %} surrounded by single spaces. SCSS in `_sass/` uses BEM-like selectors such as `.site-nav__item`; the custom homepage styles live in `assets/css/profile.css`. Fonts (Font Awesome 6, Academicons subset, serif webfonts) are self-hosted — do not reintroduce CDN `<link>` tags. `_config.yml` excludes `AGENTS.md` and `package-lock.json` so they are never published with the site.

## Testing Guidelines
Run `JEKYLL_ENV=production bundle exec jekyll build` to catch Liquid or front matter failures before committing. Follow with `bundle exec jekyll doctor` whenever configuration, collections, or layouts change, and spot-check the site via `bundle exec jekyll serve`. When touching `assets/js/site.js` or the inline tab script, verify the MIPLIB tabs and the dark-mode toggle in both `/` and `/zh/`.

## Commit & Pull Request Guidelines
Write concise, present-tense commit messages (e.g., "Update competition awards section in about.md"). Group unrelated changes into separate commits. Pull requests should explain the motivation, list key files, and link related issues. Include screenshots or local URLs when altering layouts or styling, and explicitly call out `_config.yml` modifications so reviewers can assess deployment impact.
