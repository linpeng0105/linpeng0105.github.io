# GEMINI.md - Peng Lin's Academic Portfolio

## Project Overview
This project is a Jekyll-based academic personal website for **Peng Lin (林鹏)**, a PhD student at the Chinese Academy of Sciences specializing in **Mixed Integer Programming (MIP)**. The site serves as a professional portfolio, highlighting research news, publications, awards, competition results, and benchmark records (MIPLIB).

### Key Technologies
- **Jekyll**: Static site generator.
- **Ruby & Bundler**: Dependency management for Jekyll.
- **Docker**: For containerized development and deployment.
- **Node.js**: Used for JavaScript asset minification (`uglify-js`).
- **Minimal Mistakes (Fork)**: The underlying theme is a fork of the Minimal Mistakes Jekyll theme, adapted for academic use.

### Interaction Guidelines
- **Language**: All responses and interactions should be conducted in **Chinese (中文)**.

## Building and Running

### Local Development
1. **Install Dependencies**:
   ```bash
   bundle install
   npm install
   ```
2. **Run Jekyll Server**:
   ```bash
   bundle exec jekyll serve -l -H localhost
   ```
   The site will be available at `http://localhost:4000`.

### Docker
To run the project without local dependencies:
```bash
docker compose up
```

### Building Assets
To minify JavaScript files:
```bash
npm run build:js
```

## Project Structure
- `_pages/`: Contains the main landing pages (`about.en.md` for English, `about.zh.md` for Chinese).
- `_data/`:
    - `navigation.yml`: Defines the header menu.
    - `authors.yml`: Contains author profiles (including the Chinese profile `peng_lin_zh`).
- `_publications/`: Markdown files for individual publications (used in `/publications/`).
- `_talks/`: Markdown files for presentations and talks (used in `/talks/`).
- `_posts/`: Blog posts.
- `assets/`: CSS, JS, and font files.
- `images/`: Profile photos and featured images.
- `files/`: PDFs of papers and slides.
- `markdown_generator/`: Python scripts/Jupyter notebooks to generate content from TSV files.

## Development Conventions

### Content Management
- **Homepage**: Most sections (News, Publications, Honors, etc.) are currently hardcoded in `_pages/about.en.md` and `_pages/about.zh.md` for precise layout control.
- **Collections**: `_publications/`, `_talks/`, `_teaching/`, and `_portfolio/` are available for dynamic page generation but may contain placeholder content.
- **Multilingual Support**: The site is structured for English (`/`) and Chinese (`/zh/`). Use the `locale` and `author` front-matter fields to toggle language settings.

### Site Configuration
- Site-wide settings (title, description, URL, social links) are managed in `_config.yml`.
- Custom styles are handled via Sass in `_sass/`.
- Benchmarks/MIPLIB records are presented using a custom HTML/JS tabbed interface on the homepage.
