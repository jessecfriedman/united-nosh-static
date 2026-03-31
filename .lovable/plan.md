# United Noshes — Squarespace to Static Site Migration

## Overview

Migrate unitednoshes.com (a food blog with ~149 meal posts) to a static React site, modernizing the design while preserving all content. The site will be deployed to GitHub Pages with your custom domain.

**Important note about images**: When you cancel Squarespace, images hosted on their CDN will likely stop working. We'll need to download and bundle all images with the site.

## Phase 1: Site Shell & Design

Build the app structure with a modernized design inspired by the current warm, editorial feel:

- **Layout**: Clean header with "UNITED NOSHES" title + nav links (Meals, About, Sign Up link), warm off-white background, serif/sans-serif typography pairing
- **Homepage**: Hero section with the group photo + intro text, followed by a responsive grid of meal cards (image + title)
- **About page**: Full-width photo, bio text for Jesse and Laura with their photos
- **Meal post template**: Title, meal photos, dish descriptions with recipe links
- **Sign Up**: Nav link pointing to an external URL (email or form — you'll provide the link)
- **Footer**: Simple footer with credit/links

## Phase 2: Content Scraping & Migration

Scrape all ~149 meal posts from the Squarespace site:

- Discover all meal URLs from the site
- Scrape each post's text content, recipe links, and image URLs
- Download all images (hero, meal cards, post photos, about page photos) to bundle locally
- Store meal data as JSON so posts are easy to add/edit later
- Keep the URL structure the same so SEO and links from external sites don't break (e.g. [https://www.unitednoshes.com/countries//meal-145-st-kitts-and-nevis](https://www.unitednoshes.com/countries//meal-145-st-kitts-and-nevis)) — I don't know why there's a double slash but I guess we keep it
- &nbsp;

## Phase 3: GitHub Pages Deployment

- Connect the project to GitHub
- Configure for GitHub Pages deployment (HashRouter for SPA compatibility)
- Set up custom domain (unitednoshes.com)

## Design Direction

- Modernized but warm: clean whitespace, slightly refined typography, same cozy food-blog spirit
- Responsive grid layout for meal cards
- Fast-loading since it's all static content
- Easy to add new posts by adding entries to the data file

## Future-Proofing

The JSON-based data approach means adding new blog posts is as simple as adding a new entry with your text and images — no CMS needed.  
Additional posts will be for the rest of the United Nations countries in alphabetical order. We can have placeholders in a list of all the countries.