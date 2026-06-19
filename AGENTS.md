# Repository Guidelines

## Project Structure & Module Organization
The site follows the Academic Pages Jekyll layout as a single-page design. Page templates live in `_layouts/` and reusable snippets in `_includes/`. All content (bio, publications, talks, awards, education, etc.) is hand-written inline in `_pages/about.zh.md` / `_pages/about.en.md` — the top nav links to in-page anchors, not to separate collection pages. Store shared data in `_data/` (e.g. `navigation.yml`) and SCSS partials inside `_sass/`. Upload images to `images/` and keep PDFs or slides in `files/`. JavaScript sources live in `assets/js/`; rebuild `assets/js/main.min.js` after editing them.

## Build, Test, and Development Commands
- `bundle install` — install Ruby gems; use `bundle config set --local path 'vendor/bundle'` for an isolated vendor tree.
- `bundle exec jekyll serve -l -H localhost` — launch the live-reload dev server at `http://localhost:4000`.
- `bundle exec jekyll build` — create the production-ready `_site/` snapshot; run before committing.
- `bundle exec jekyll doctor` — scan for configuration or front matter issues after structural changes.
- `npm install` then `npm run build:js` — install JS dependencies and rebuild the minified bundle whenever `assets/js/` changes.

## Coding Style & Naming Conventions
Use 2-space indentation across Liquid, SCSS, and YAML. Keep YAML front matter compact and quote only when needed. Markdown files should favor sentence case headings; blog posts follow the `YYYY-MM-DD-title.md` pattern. Maintain Liquid readability with {% raw %}`{% %}`{% endraw %} and {% raw %}`{{ }}`{% endraw %} surrounded by single spaces. SCSS in `_sass/` uses BEM-like selectors such as `.site-nav__item`. Never edit `assets/js/main.min.js` directly; modify sources and rebuild.

## Testing Guidelines
Run `bundle exec jekyll build` to catch Liquid or front matter failures before committing. Follow with `bundle exec jekyll doctor` whenever configuration, collections, or layouts change. After touching JavaScript, execute `npm run build:js` and spot-check the site via `bundle exec jekyll serve`.

## Commit & Pull Request Guidelines
Write concise, present-tense commit messages (e.g., “Update competition awards section in about.md”). Group unrelated changes into separate commits. Pull requests should explain the motivation, list key files, and link related issues. Include screenshots or local URLs when altering layouts or styling, and explicitly call out `_config.yml` modifications so reviewers can assess deployment impact.
