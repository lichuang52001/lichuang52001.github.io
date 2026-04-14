# User Manual (Beginner) - Astro Blog

## 1) What changed
- Your blog now runs on **Astro** (not Hexo runtime).
- Content is in Markdown and remains editable.
- Build output is generated to `dist/`.

## 2) Folder map you will use
- Posts: `src/content/posts/`
- About page: `src/content/pages/about.md`
- Static files (images, favicon, CNAME, ads.txt): `static/`
- Site pages/layout/styles:
  - `src/pages/`
  - `src/layouts/`
  - `src/styles/global.css`

## 3) First-time setup
```powershell
cd D:\chuang\Files\Blog
npm install
```

Run local dev server:
```powershell
npm run dev
```
Open the local URL shown in terminal (usually `http://localhost:4321`).

## 4) Add a new post
Create a new Markdown file in `src/content/posts/`, for example:
`src/content/posts/my-new-post.md`

Use this template:
```md
---
title: My New Post
date: 2026-04-14 10:00:00
tags:
  - AI
  - Computer Vision
categories:
  - Research
abbrlink: my-new-post
---

Write your content here.
```

Notes:
- `abbrlink` controls URL slug.  
  URL becomes `/posts/my-new-post/`.
- If `abbrlink` is missing, file name is used as slug.

## 5) Edit a post
1. Open existing file in `src/content/posts/`.
2. Edit frontmatter/content.
3. Save and refresh local dev page.

## 6) Delete a post
1. Delete the Markdown file from `src/content/posts/`.
2. Rebuild site:
```powershell
npm run build
```

## 7) Edit About page
Edit:
- `src/content/pages/about.md`

## 8) Add images/files
Put assets in `static/`, e.g.:
- `static/images/cv-figure.png`

Then reference in markdown:
```md
![Figure](/images/cv-figure.png)
```

## 9) Build for production
```powershell
npm run build
```
Output is in:
- `dist/`

Preview production build locally:
```powershell
npm run preview
```

## 10) GitHub push (first time)
This folder currently has no `.git`. Initialize it:
```powershell
cd D:\chuang\Files\Blog
git init
git add .
git commit -m "Initial Astro blog"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

After first time, normal update:
```powershell
git add .
git commit -m "Update posts"
git push
```

## 11) Deploy to GitHub Pages (Recommended: GitHub Actions)
Create file:
- `.github/workflows/deploy.yml`

Use:
```yml
name: Deploy Astro to Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

Then in GitHub repo settings:
1. **Settings -> Pages**
2. Source: **GitHub Actions**

Push to `main`; deployment runs automatically.

## 12) Deploy manually (alternative)
If you want to publish static files directly:
1. Run `npm run build`
2. Publish contents of `dist/` to your GitHub Pages branch/repo root.

## 13) Daily workflow (simple)
1. `npm run dev`
2. Add/edit markdown
3. `npm run build`
4. `git add . && git commit -m "..." && git push`
5. GitHub Actions deploys automatically

## 14) Troubleshooting
- If build fails, run:
```powershell
npm install
npm run build
```
- If routes look old, clear browser cache and redeploy.
- Keep `public/` (legacy Hexo output) unused; Astro uses `static/` + `src/` + `dist/`.

