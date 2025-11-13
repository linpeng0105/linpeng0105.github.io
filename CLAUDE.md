# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is an academic portfolio website built with Jekyll, based on the Academic Pages template. It serves as a personal/professional website for Peng Lin, featuring publications, talks, teaching materials, and portfolio items. The site is hosted on GitHub Pages at https://linpeng0105.github.io.

## Architecture

### Jekyll Site Structure

The repository follows Jekyll's standard structure with custom collections:

- **Collections**: The site uses four custom Jekyll collections defined in `_config.yml`:
  - `_publications/`: Research papers and articles (categorized as books, manuscripts, or conferences)
  - `_talks/`: Conference presentations and tutorials
  - `_teaching/`: Teaching materials and courses
  - `_portfolio/`: Project portfolios

- **Layouts**: Located in `_layouts/`, the site uses several layouts:
  - `single.html`: Default layout for most content pages
  - `talk.html`: Specialized layout for talk pages
  - `archive.html` and `archive-taxonomy.html`: For listing collections

- **Pages**: Primary pages in `_pages/` include:
  - `about.en.md` and `about.zh.md`: Bilingual about pages
  - `publications.html`, `portfolio.html`: Collection listing pages
  - `cv.md`: Curriculum vitae
  - Navigation is configured in `_data/navigation.yml`

### Front Matter Structure

Content files use YAML front matter. Key fields for publications:
```yaml
title: "Paper Title"
collection: publications
category: manuscripts  # or conferences, books
permalink: /publication/YYYY-MM-DD-title
excerpt: 'Brief description'
date: YYYY-MM-DD
venue: 'Journal or Conference Name'
paperurl: 'URL to paper'
citation: 'Full citation text'
```

For talks:
```yaml
title: "Talk Title"
collection: talks
type: "Talk"  # or Tutorial, Conference proceedings talk
permalink: /talks/YYYY-MM-DD-title
venue: "Venue Name"
date: YYYY-MM-DD
location: "City, Country"
```

### Content Generation

The `markdown_generator/` directory contains Jupyter notebooks and Python scripts that generate markdown files from TSV files:

- `publications.ipynb` / `publications.py`: Converts `publications.tsv` to markdown files in `_publications/`
- `talks.ipynb` / `talks.py`: Converts `talks.tsv` to markdown files in `_talks/`
- `PubsFromBib.ipynb` / `pubsFromBib.py`: Generates publication files from BibTeX
- `OrcidToBib.ipynb`: Fetches publications from ORCID

This batch generation approach is preferred for adding multiple publications/talks.

## Common Development Commands

### Local Development

```bash
# Install Ruby dependencies (first time setup)
bundle install

# If you encounter permission errors, install gems locally:
bundle config set --local path 'vendor/bundle'
bundle install

# Serve the site locally with live reload
jekyll serve -l -H localhost

# Alternative using bundle (ensures correct dependencies)
bundle exec jekyll serve -l -H localhost
```

The site will be available at `http://localhost:4000`.

### Docker Development

```bash
# Build and run using Docker Compose
docker compose up
```

Access at `http://localhost:4000`.

### JavaScript Build

The site uses npm to manage and minify JavaScript:

```bash
# Minify and concatenate JS files
npm run build:js

# Watch JS files and rebuild on changes
npm run watch:js
```

The build process combines jQuery, fitvids, magnific-popup, jquery-smooth-scroll, and custom scripts into `assets/js/main.min.js`.

## Site Configuration

Primary configuration is in `_config.yml`:

- **Basic settings**: Site title, description, URL, repository
- **Author profile**: Appears in sidebar, configured under `author:` key
- **Social links**: GitHub, Google Scholar, ORCID, etc. (under `author:`)
- **Collections**: Controls which content types are output and their permalinks
- **Publication categories**: Defined under `publication_category:` (books, manuscripts, conferences)

When adding new social links or changing author information, edit `_config.yml` and restart the Jekyll server (changes to `_config.yml` require restart).

## Key Files

- `_config.yml`: Main Jekyll configuration
- `Gemfile`: Ruby dependencies
- `package.json`: Node.js dependencies and build scripts
- `_data/navigation.yml`: Header navigation menu
- `_includes/author-profile.html`: Sidebar author card template
- `_sass/`: SCSS stylesheets
- `images/`: Site images including `profile.png` (author avatar)
- `files/`: Static files (PDFs, etc.) accessible at `/files/`

## Important Notes

- The site uses kramdown for Markdown processing with GFM input format
- Static files in `files/` directory are directly accessible (e.g., `/files/paper.pdf`)
- Changes to `_config.yml` require restarting the Jekyll server
- The site excludes `node_modules`, `vendor`, `.bundle`, and several other directories from Jekyll builds (see `exclude:` in `_config.yml`)
- Jekyll incremental builds are disabled (`incremental: false`)
