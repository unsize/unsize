# Unsize
This repository houses all of the code for [Unsize](http://unsize.me). There are three components: the Unsize UI component library, a marketing website, and a Chrome extension.

- [Unsize](#unsize)
  - [Getting Started](#getting-started)
    - [Marketing Site](#marketing-site)
    - [Chrome Extension](#chrome-extension)
  - [Deploying the Site](#deploying-the-site)
  - [Style Guide](#style-guide)
  - [Marketing Website](#marketing-website)
  - [Chrome Extension](#chrome-extension)
  - [Common Technologies](#common-technologies)
    - [React](#react)
    - [styled components](#styled-components)
    - [Build](#build)
    - [Prettier](#prettier)
  - [Project Structure](#project-structure)

## Getting Started
Getting your development environment up and running is quite simple! Regardless of whether you're running the marketing site or the Chrome extension, the starting point is installing all of the dependencies:

```sh
$ npm install
```

### Marketing Site
The marketing site is actually the easiest, since we use a framework called Next.js, which is covered more below. Just run this command, go to [localhost:3000](http://localhost:3000), and you're all set!

```sh
$ npm start
```

### Chrome Extension
This one is a bit more involved because we have to load the extension into Chrome. First, we have to build the app itself:

```sh
$ npm run extension
```

It may take a few seconds (up to 15 seconds depending on your computer) but you should see an output that looks something like this, followed by a list of module names:
```
Hash: 184bf46270842c40f562
Version: webpack 3.6.0
Time: 4037ms
                          Asset     Size  Chunks                    Chunk Names
    ./extension/build/unsize.js  1.16 MB       0  [emitted]  [big]  main
./extension/build/unsize.js.map  1.31 MB       0  [emitted]         main
```

This means the build worked successfully. Next, go to `chrome://extensions`, turn on "Developer mode" if you haven't already, and click "Load unpacked extension." On your filesystem, navigate **into** the `extension/` directory and confirm. *If you select the extension folder itself instead of the contents this will not work*.

You should now see the Unsize logo in your Chrome toolbar. Click it and you'll be on your way!

## Deploying the Site
In order to deploy the site, first make sure you've pulled the latest changes from GitHub and that the repository is set to deploy from the `gh-pages` branch of the repository. You may have to create the `gh-pages` branch before changing this setting in the repository settings.

Next, run the script to build the site into static HTML and JS files:
```sh
$ npm run build

> unsize@0.1.0 build /Users/myuser/git/unsize
> next build && next export -o 'gh-pages'

> Using external babel configuration
> Location: "/Users/myuser/git/unsize/.babelrc"
  using build directory: /Users/myuser/git/unsize/.next
  copying "static" directory
  exporting path: /
  exporting path: /about
```

Once you see the output above, you can exit the export command by hitting `Control+C`. Then create a new commit with the new site files:
```sh
$ git add .
$ git commit -m 'deploy site'
```

Once you have the new commit, you can deploy the site:
```sh
$ npm run deploy
```

Don't forget to push up the new changes to the `develop` branch once you're done with this!

## Style Guide
The UI component guide, located in the `style/` directory, is built on a combination of React and styled components. The goal was to create a shared set of components that would allow developers to just plug and play with the Unsize brand. No worrying about writing CSS for buttons or headers, it all "just works."

The only components in the style guide should be those that are universal. Things that are relevant across the marketing website and the Chrome extension. If it's specific to one of those or is a single-use component, it doesn't belong in the style guide.

In order to use the style guide, every component should be exported out of `style/index.js`. This comes in handy when taking advantage of some of our [build tooling](#build). Without exporting every component, the `import { Component } from 'style'` syntax won't work. In the future, publishing the component guide to npm would allow the removal of the build tooling and the splitting of Unsize into multiple repositories.

## Marketing Website
The marketing website is built using [Next.js](https://github.com/zeit/next.js). Next is a static site/server-side rendering framework built using webpack and React, allowing really a simple React implementation for static sites, as well as exporting the files as static assets to be hosted on a service like GitHub Pages. Read the Next.js docs for information on things like routing, static files, and more.

Next.js provides a few niceties we take advantage of. The first is hot-reloading, and this one is simple. With the development server running (`npm start`), any changes you make to the site will be automatically updated if you already have `localhost:3000` open in a browser, no need to refresh!

Second, the filesystem is the router. Want a new page? Simply add a new file in the `pages/` directory, and that's it! Kind of. This will work in development, but for the static export you'll also have to add an entry for the page in `next.config.js`. Just follow the examples already there.

Additionally, it handles static file hosting. Anything placed in the `static/` directory can be referenced by absolute path (e.g. `<img src="/static/images/logo.png" />`).

Last is static exporting. By running `npm run build`, the website will be fully exported to an `out/` directory. Opening `out/index.html` should give you the marketing website as a static app instead of server-rendered. Static assets won't work unless it's hosted on a server as all resource URLs are absolute.

## Chrome Extension
The Chrome extension is a pure React app, plain and simple. The one external library used is called `route-lite`. This is a small router we use to navigate between screens and keep track of state. It's used widely in the codebase, so it should be easy to pick up quickly.

The extension structure is pretty straightforward, there are just a couple of things to note. First, don't touch the `index.html` and don't delete anything from the `manifest.json`. Everything there right now needs to be there for the extension to work properly.

Similarly to the marketing site, the extension is configured for static file hosting. Just place static files in the `static/` directory and that's it! (this is what allows us to do things like have shared UI components that reference images)

## Common Technologies
### React
The reason all of this works so nicely is thanks to Facebook's [React](https://reactjs.org) library. It allows us to create a common set of single-purpose UI components that are effectively plug-and-play ways to build a UI. However, these components need to look like Unsize...

### styled components
...and that's where [styled components](https://www.styled-components.com/) comes into play. Styled components is a modern CSS-in-JS library that allows us to easily write component-specific CSS that is colocated with a React component to create self-contained components that don't depend on external CSS files. React paired with styled components allows us to create a robust UI library that is usable in any context.

### Build
Now that we have those components, we want to be able to use them! Both the marketing site and the Chrome extension are built using Babel and webpack, allowing us to customize the build process a bit. Specifically, we use Babel's [module alias plugin](https://www.npmjs.com/package/babel-plugin-module-alias) to import the UI library easily. Thanks to the extension's `webpack.config.js` and the `.babelrc` in the root directory for the marketing site, you can always import a style guide component via a simple global alias. The alias just maps `'style'` to the `style/` directory, so all of these usages are valid:

```js
import { RadioButton } from 'style';
import { blue } from 'style/constants';
import 'style/fontSizes';
```

### Prettier
We've got this beautiful website, we want it to be backed by beautiful code! In order to keep the codebase clean, we use some magical software called [Prettier](https://prettier.io). While we don't have this formally enforced via a precommit hook or anything, we HIGHLY recommend installing the plugin for your editor. It should pick up the `.prettierrc` file we have in the root of the project and format your code accordingly. This means you don't have to make code review comments about formatting and you don't have to worry about formatting your own code, so please do it.

## Project Structure
```
unsize
  |---components           # components specific to the marketing site
  |–––extension
    |---components         # components specific to the chrome extension
    |---screens            # container for all screen containers
      |---onboarding       # onboarding screens
    |---static             # container for static assets in the chrome extension
    |   index.html         # HTML page loaded by the chrome extension
    |   index.js           # extension's React entry point
    |   manifest.json      # configuration for the extension ([docs](https://developer.chrome.com/extensions/))
  |–––pages                # marketing website pages
  |–––static               # static files for marketing website (fonts, images)
  |–––style                # UI component guide
```
