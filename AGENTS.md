# Repository Guidelines

## Project Structure & Module Organization
The site follows the Academic Pages Jekyll layout. Page templates live in `_layouts/` and reusable snippets in `_includes/`. Long-form content sits under `_pages/`, while dated updates use `_posts/`. Research artifacts belong in `_portfolio/`, `_talks/`, `_publications/`, and `_teaching/`. Store shared data in `_data/` and SCSS partials inside `_sass/`. Upload images to `images/` or `assets/img/`, and keep PDFs or datasets in `files/`. JavaScript sources live in `assets/js/`; rebuild `assets/js/main.min.js` after editing them. Notebook helpers reside in `markdown_generator/` and must be run before checking in generated Markdown.

## Build, Test, and Development Commands
- `bundle install` — install Ruby gems; use `bundle config set --local path 'vendor/bundle'` for an isolated vendor tree.
- `bundle exec jekyll serve -l -H localhost` — launch the live-reload dev server at `http://localhost:4000`.
- `bundle exec jekyll build` — create the production-ready `_site/` snapshot; run before committing.
- `bundle exec jekyll doctor` — scan for configuration or front matter issues after structural changes.
- `npm install` then `npm run build:js` — install JS dependencies and rebuild the minified bundle whenever `assets/js/` changes.

## Coding Style & Naming Conventions
Use 2-space indentation across Liquid, SCSS, and YAML. Keep YAML front matter compact and quote only when needed. Markdown files should favor sentence case headings; blog posts follow the `YYYY-MM-DD-title.md` pattern. Maintain Liquid readability with `{% %}` and `{{ }}` surrounded by single spaces. SCSS in `_sass/` uses BEM-like selectors such as `.site-nav__item`. Never edit `assets/js/main.min.js` directly; modify sources and rebuild.

## Testing Guidelines
Run `bundle exec jekyll build` to catch Liquid or front matter failures before committing. Follow with `bundle exec jekyll doctor` whenever configuration, collections, or layouts change. After touching JavaScript, execute `npm run build:js` and spot-check the site via `bundle exec jekyll serve`. Regenerate content from `markdown_generator/` and compare diffs to confirm expected ordering.

## Commit & Pull Request Guidelines
Write concise, present-tense commit messages (e.g., “Update competition awards section in about.md”). Group unrelated changes into separate commits. Pull requests should explain the motivation, list key files, and link related issues. Include screenshots or local URLs when altering layouts or styling, and explicitly call out `_config.yml` modifications so reviewers can assess deployment impact.
