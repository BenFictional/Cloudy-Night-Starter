# Eleventy French Press Starter 

A minimal starter project with UI basics and file optimization. Forked from Coffee Filter Starter by [Yeshwanthyk](https://github.com/Yeshwanthyk/eleventy-filter-coffee-starter) with navigation menu and blog setup from Tom Reinert's [Minimal 11ty Tailwind starter](https://github.com/tomreinert/minimal-11ty-tailwind-starter).

## Features

- Gulp integration for fonts and sass
- Asset hashing
- Image optimization using `imagemin`
- HTML Minification
- Critical CSS
- Active state nav menu
- Simple blog with archive page
- Theme variables for easy customization

## Getting Started

To install the necessary packages, run this command in the root folder of the site:

```sh
npm install
```

### Commands

- Run `npm start` for a development server and live reloading
- Run `npm run production` to generate a production build

## CSS

- Styling works with Sass. New css can be added in `src/scss` folder.
- Page level styling can be set by adding the following at the top of the page,

```
{% set pageCriticalStyles = ['css/<example.css>'] %}
```

