<h2 align="center">Welcome to stapetro's blog</h2>

## Table of Contents
- [Tools](#tools)
    - [Node version Manager (NVM)](#node-version-manager)
    - [Install node and npm](#install-node-and-npm)
    - [Docker](#docker)
- [Build](#build)
    - [Install dependencies](#install-dependencies)
    - [Modernizr JS lib](#modernizr-js-lib)
    - [Build all](#build-all)
    - [Generate jekyll site](#generate-jekyll-site)
    - [Generate favicon](#generate-favicon)
- [Performance](#performance)

Instructions apply only for Linux/POSIX based OS. I use Ubuntu 18.04.4 LTS (bionic).
# Tools
## Node version manager
[Install nvm](https://github.com/nvm-sh/nvm) (v0.35.2).
## Install node and npm
```bash
nvm install 12.14.1 --lts=erbium --latest-npm
nvm --version
# 0.35.2
node --version
# v12.14.1
npm --version
# 6.14.5
```
_npx_ comes with latest _npm_ versions by default.
## Docker
Follow official [Docker installation guide](https://docs.docker.com/engine/install/ubuntu/). 
# Build
## Install dependencies
```bash
(cd src && npm install)
```
## Modernizr JS lib
Use [modernizr](https://modernizr.com/) CLI to build a minified JS version.
```bash
(cd src && \
npx modernizr -c modernizr-config.json -d ../assets/js/modernizr.min.js)
```
## Build all
Runs [static code analysis](https://eslint.org/), [tests](https://jestjs.io/) and [webpack](https://webpack.js.org/) bundling of [JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript) files and [CSS](https://www.w3.org/Style/CSS/Overview.en.html) / [SASS](https://sass-lang.com/) styles.
```bash
(cd src && npm run lint && npm test && npm run bundle)
# or with test coverage included
(cd src && npm run lint && npm run test:coverage && npm run bundle)
```
## Generate jekyll site
```bash
# generate only
src/scripts/docker_jekyll.sh build
# generate and serve jekyll site
src/scripts/docker_jekyll.sh
```
## Generate favicon
Favicons are generated from [code monkey image](assets/img/codemonkey_3149003.jpeg) by free [favicon generator](https://www.favicon-generator.org/) website.
# Performance
## Bundle analyzer
I use [webpack bundle analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer).
## Remove unused JS modules
Import [explicitly foundation modules](https://github.com/foundation/foundation-zurb-template/blob/master/src/assets/js/app.js).
## Remove unused CSS styles
