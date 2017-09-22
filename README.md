# Unsize

### Technology
Unsize consists of two components: the marketing website and the Chrome extension. Both products are built in [React](https://facebook.github.io/react), styled using [styled-components](https://www.styled-components.com/).

For SEO purposes, as well as ease of development, the marketing website is built using [Next.js](https://github.com/zeit/next.js). Next is a static site/server-side rendering framework built using webpack and React, allowing really simple server side rendering and React implementation for static sites.

### Project Structure
We use a monorepo structure to allow shared React components that implement the same style guide. This ensures a consistent style across the Unsize marketing website and the Unsize Chrome extension. To make this work in practice we use the following file structure:

```
unsize
  |
  |–––style
    |   index.js  // exports all style guide components
    |   H1.js
    |   Div.js
    |   // ...
  |–––website  // files for marketing website
  |   |–––components
  |   |–––pages
  |   |–––static
  |–––extension  // files for chrome extension
```
