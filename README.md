# Roll20 Sheet Dev
[![VSMarket: rmacro](https://vsmarketplacebadge.apphb.com/version/anduh.roll20sheetdev.svg?color=blueviolet&logo=visual-studio-code&style=?style=for-the-badge)](https://marketplace.visualstudio.com/items?itemName=anduh.roll20sheetdev)
[![installs](https://img.shields.io/vscode-marketplace/d/anduh.roll20sheetdev?style=flat-square)](https://marketplace.visualstudio.com/items?itemName=anduh.roll20sheetdev)
![Contributions](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)
![Last Commit](https://img.shields.io/github/last-commit/Anduh/vscode-roll20dev)

[![Twitter: @anduh_ ](https://img.shields.io/badge/twitter-%40anduh%5F-blue)](https://twitter.com/anduh_)
[![Patreon Donate](https://img.shields.io/badge/donate-patreon-orange)](https://www.patreon.com/anduh)


Tools for [Roll20](https://roll20.net/), to help with [Character Sheet Development](https://wiki.roll20.net/Building_Character_Sheets).


- [Roll20 Sheet Dev](#roll20-sheet-dev)
  - [Features](#features)
    - [HTML](#html)
      - [Rolltemplates](#rolltemplates)
    - [JS](#js)
    - [PUG](#pug)
    - [CSS/SCSS](#cssscss)
  - [Examples](#examples)
  - [Contribute](#contribute)
- [Related Extensions](#related-extensions)

## Features

### HTML
- recognize, autocompletes, and on hover, shows documentation + links
  - elements: `<rolltemplate>` and `<charmancer>`
  - global attributes: `data-i18n`and it's variants
  - recognize: button `type="roll"`, `type="action"`; input `type="hidden"` as options
- snippets: common roll20 elements & fills out with relevant attributes

#### Rolltemplates

Roll20 [rolltemplate](https://wiki.roll20.net/Building_Character_Sheets/Roll_Templates) syntax is higlighted in `.html`-files using [Handlebar](https://handlebarsjs.com/guide/)-syntax

Any files named `.rolltemplate` or `.rtemplate` will show HTML & rolltemplate syntax highlight


### JS
- `<script type="text/worker">`-blocks in `.html`-files now shows js highlight properly

### PUG

- snippets: common roll20 elements & fills out with relevant attributes
  - e.g. inputs always have `name="attr_"`, buttons recognize `type="roll"` & `"action"`
- autocomplete & documentation links: partial

### CSS/SCSS
- couple of snippets




## Examples

Roll20 Sheet Development documentation, and rolltemplate/sheetworker syntax highlight:
<img src="https://raw.githubusercontent.com/Anduh/vscode-roll20dev/v031/images/vscode-sheetdev-hover-swgcolors.gif">

Pug-snippet expanded
<img src="https://raw.githubusercontent.com/Anduh/vscode-roll20dev/main/images/pug-ex1.gif">

## Contribute
repo: [Anduh/vscode-roll20sheetdev](https://github.com/Anduh/vscode-roll20sheetdev)

You can help even without knowing how VS Code extensions work. Here are a few concrete parts to start from: 

* add more html/pug/css/js [Snippets](https://github.com/anduh/vscode-roll20dev/tree/main/snippets): if you look at the [existing snippets](https://github.com/anduh/vscode-roll20dev/tree/main/snippets) for the plugin, you can follow the same patterns and expand the collection of snippets easily.
  * About:[VS Code Snippet Syntax](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_snippet-syntax)


# Related Extensions

[Roll20 Macros](https://marketplace.visualstudio.com/items?itemName=anduh.rmacro) is a related extension, which provides syntax highlight for Roll20's [macro & dice syntax](https://wiki.roll20.net/Macro_Guide).