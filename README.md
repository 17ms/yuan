## Minimalistic SPA theme for Hugo

The theme I use on [golfed.xyz](https://golfed.xyz). I wasn't able to find a good middle-ground theme that'd be visually pleasing, but still have a minimalistic structure, so I decided to create a theme of my own. The theme is built around three main sections: landing/title, about, and projects. It's perfect for links to other social platforms, a short description about yourself, and a handful of your personal projects in a single-page form.

<div align="center">
  <img src="https://github.com/17ms/yuan/blob/master/.github/docs/home-screen.png/">
  <img src="https://github.com/17ms/yuan/blob/master/.github/docs/about-screen.png/">
  <img src="https://github.com/17ms/yuan/blob/master/.github/docs/projects-screen.png/">
</div>

## Usage

The easiest way to install the theme is to use git submodules:

```shell
git submodule add --depth=1 https://github.com/17ms/yuan.git themes/yuan
# Required when recloning the repository (e.g. during automated deployment)
git submodule update --init --recursive
```

Use the template below to configure the theme:

```yaml
baseURL: https://example.com/
title: Example
author: Example Author
language: en-GB
paginate: 10

theme: yuan

params:
  description: Example description

  assets:
    favicon: "/images/favicon.ico"
    favicon16: "/images/favicon-16x16.png"
    favicon32: "/images/favicon-32x32.png"
    appleTouchIcon: "/images/apple-touch-icon.png"
    safariPinnedTabIcon: "/images/safari-pinned-tab.svg"
    safariPinnedTabColor: "#5bbad5"
    manifest: "/images/site.webmanifest"
    msTileColor: "#2b5797"
    themeColor: "#040404"

  # Icons shown below the about text snippet
  # List of the available icons can be found in the /layouts/partials/svg.html file
  socialIcons:
    - name: email
      url: "mailto:example@example.com"
      display: Optional name shown in tooltips, defaults to capitalized name

  # List of displayed items (e.g. software projects)
  # Summaries longer than 145 characters will be truncated.
  itemDisplays:
    - name: Example project
      url: "https://github.com"
      description: Project description example

  label:
    text: "example.org"
    icon: /favicon.ico
```
