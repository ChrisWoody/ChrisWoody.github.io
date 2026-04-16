# Project Guidelines

## Overview

This is a Jekyll-based personal portfolio and blog site using the **Minimal Mistakes** remote theme, hosted on GitHub Pages at `chriswoodcodes.net`.

## Architecture

- **Theme**: Minimal Mistakes (`mmistakes/minimal-mistakes`) via `remote_theme`
- **Content**: Posts organized under `_posts/` in category subdirectories: `electronics/`, `games/`, `props/`, `tech/`
- **Pages**: Static pages in `_pages/` (games listing, AI games, archive pages, 404)
- **Categories**: Taxonomy pages in `categories/` (singular category names: Game, Tech, Prop, Electronic)
- **Assets**: Images stored in `assets/images/<project-name>/` with optional `shrunk/` subdirectories for optimized versions

## Conventions

### Post Frontmatter

Every post must include:
```yaml
---
title: "<Category> - <Project Name>"
last_modified_at: <date>T16:20:02+08:00
show_date: true
categories:
  - <Category>  # Singular: Game, Tech, Prop, Electronic
tags:
  - <relevant tags>
header:
  teaser: /assets/images/<project-name>/<image-file>  # Always use leading /
excerpt: <unique description of this specific post>
---
```

- **Teaser paths must start with `/`** (e.g., `/assets/images/...`, not `assets/images/...`)
- **Excerpts must be unique** to each post — never copy from another post
- **Category names are singular**: `Game`, `Tech`, `Prop`, `Electronic`
- **Timezone**: Australia/Perth (+08:00)

### Post Content Structure (Games)

Game posts follow this pattern:
1. Brief description paragraph
2. Action buttons div (Play in browser, View code on GitHub, optionally Download)
3. Screenshot/icon image

### AI Games

AI-generated games are **not** included as regular posts alongside other games. They are listed only in `_pages/ai-games.md` as a standalone page. Do not create `_posts/` entries for AI games.

### Internal Links

The permalink structure is `/:categories/:title/`. Internal links between posts should match the generated URL path (e.g., `/Game/spear-cat/`).

## Build and Test

```bash
bundle install
bundle exec jekyll serve
```

Site is served locally at `http://localhost:4000`.
