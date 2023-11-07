## Minimalistic SPA theme for Hugo - [Demo](https://17ms.github.io/yuan/)

A minimal single-page application theme for Hugo. 

### Features

- Single-page application structure with interactive navbar
- `About` section with minimal SVG icon pack for displaying socials
- `Projects` section with horizontally scrollable card view of the items
- Mobile friendly scaling
- Toggleable mouse tracker/hover animation
- Optimized CSS, JS, and webfonts ([Yellow Lab Tools analysis](https://yellowlab.tools/result/gpauyycoc9))
- Small build size (~40 KB)

[![Hugo Themes](https://img.shields.io/badge/Hugo--Themes-@Yuan-f5429b)](https://themes.gohugo.io/themes/yuan/) [![Website](https://img.shields.io/website?up_message=online&down_message=offline&url=https%3A%2F%2F17ms.github.io%2Fyuan%2F)](https://17ms.github.io/yuan/) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/17ms/yuan) [![GitHub](https://img.shields.io/github/license/17ms/yuan)](https://github.com/17ms/yuan/blob/master/LICENSE)

## Usage

The easiest way to install the theme is to use git submodules:

```shell
$ git submodule add --depth=1 https://github.com/17ms/yuan.git themes/yuan
# Required when recloning the repository (e.g. during automated deployment)
$ git submodule update --init --recursive
```

Use the `hugo.yaml` template below to configure the theme:

```yaml
# Note that due to performance reasons the custom webfont used in the site's
# titles is stripped to only contain unicode range U+0000-007F

baseURL: https://example.com/
title: Example
author: Example Author
language: en-GB
paginate: 10

theme: yuan

params:
  description: Example description

  # Mouse tracking animation
  enableMouseTracker: false

  # Trunaction limit of summaries inside projects display containers
  truncationLimit: 150

  # Logos, favicons and theme colors
  assets:
    favicon: "favicon.ico"
    favicon16: "favicon-16x16.png"
    favicon32: "favicon-32x32.png"
    appleTouchIcon: "apple-touch-icon.png"
    safariPinnedTabIcon: "safari-pinned-tab.svg"
    safariPinnedTabColor: "#5bbad5"
    manifest: "manifest.json"
    msTileColor: "#2b5797"
    msTileIcon: "mstile-150x150.png"
    themeColor: "#040404"
    logo: "logo.svg"

  # Icons shown below the about text snippet
  # List of the available icons can be found in the /layouts/partials/svg.html file
  socialIcons:
    - name: email
      url: "mailto:example@example.com"
      display: Optional name shown in tooltips, defaults to capitalized name

  # List of displayed items (e.g. software projects)
  itemDisplays:
    - name: Example project
      url: "#"
      description: Project description example
```
