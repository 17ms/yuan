## Configuration for the [demo site](https://17ms.github.io/yuan/)

```
.
├── hugo.yaml
├── content
│   └── _index.md
└── static
    ├── manifest.json
    └── images
        ├── android-chrome-192x192.png
        ├── android-chrome-512x512.png
        ├── apple-touch-icon.png
        ├── browserconfig.xml
        ├── favicon-16x16.png
        ├── favicon-32x32.png
        ├── favicon.ico
        ├── logo-min.svg
        ├── mstile-150x150.png
        └── safari-pinned-tab.svg
```

```yaml
# Note that due to performance reasons the custom webfont used in the site's
# titles is stripped to only contain unicode range U+0000-007F

baseURL: https://example.com/
title: Lorem Ipsum
author: Lorem ipsum dolor sit amet
language: en-GB
paginate: 10

theme: yuan

params:
  description:
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lobortis
    condimentum justo at suscipit. Sed vel sapien turpis. Sed dui.

  # Mouse tracking animation
  enableMouseTracker: false

  # Trunaction limit of summaries inside projects display containers
  truncationLimit: 150

  # Logos, favicons and theme colors
  assets:
    favicon: "/images/favicon.ico"
    favicon16: "/images/favicon-16x16.png"
    favicon32: "/images/favicon-32x32.png"
    appleTouchIcon: "/images/apple-touch-icon.png"
    safariPinnedTabIcon: "/images/safari-pinned-tab.svg"
    safariPinnedTabColor: "#5bbad5"
    manifest: "/manifest.json"
    msTileColor: "#2b5797"
    msTileIcon: "/images/mstile-150x150.png"
    themeColor: "#040404"
    logo: "/images/logo-min.svg"

  # Icons shown below the about text snippet
  # List of the available icons can be found in the /layouts/partials/svg.html file
  socialIcons:
    - name: email
      url: "#"
    - name: github
      url: "#"
    - name: linkedin
      url: "#"
    - name: twitter
      url: "#"
    - name: youtube
      url: "#"
    - name: instagram
      url: "#"
    - name: wechat
      url: "#"
    - name: keybase
      url: "#"
    - name: telegram
      url: "#"

  # List of displayed items (e.g. software projects)
  itemDisplays:
    - name: lorem-ipsum-dolor-sit-amet
      url: "#"
      description:
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lobortis
        condimentum justo at suscipit. Sed vel sapien turpis. Sed dui.
    - name: consectetur-adipiscing-elit
      url: "#"
      description:
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lobortis
        condimentum justo at suscipit. Sed vel sapien turpis. Sed dui.
    - name: aeanean-lobortis-condimentum
      url: "#"
      description:
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lobortis
        condimentum justo at suscipit. Sed vel sapien turpis. Sed dui.

```
