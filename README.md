# Roll20 Sheet Dev
[![VSMarket: rmacro](https://vsmarketplacebadge.apphb.com/version/anduh.roll20sheetdev.svg?color=blueviolet&logo=visual-studio-code&style=?style=for-the-badge)](https://marketplace.visualstudio.com/items?itemName=anduh.roll20sheetdev)
[![installs](https://img.shields.io/vscode-marketplace/d/anduh.roll20sheetdev?style=flat-square)](https://marketplace.visualstudio.com/items?itemName=anduh.roll20sheetdev)

[![Twitter: @anduh_ ](https://img.shields.io/badge/twitter-%40anduh%5F-blue)](https://twitter.com/anduh_)
[![Patreon Donate](https://img.shields.io/badge/donate-patreon-orange)](https://www.patreon.com/anduh)


Tools for [Roll20](https://roll20.net/), to help with [Character Sheet Development](https://wiki.roll20.net/Building_Character_Sheets).


## Features


**HTML**

- recognize, autocompletes, and on hover, shows documentation + links
  - elements: `<rolltemplate>` and `<charmancer>`
  - global attributes: `data-i18n`and it's variants
  - recognize: button `type="roll"`, `type="action"`; input `type="hidden"` as options

**pug**

- snippets: common roll20 elements & fills out with relevant attributes
  - e.g. inputs always have `name="attr_"`, buttons recognize `type="roll"` & `"action"`
- autocomplete & documentation links: partial

**css** / **scss**

- couple of snippets

### Example

<img src="https://raw.githubusercontent.com/Anduh/rmacro/main/images/pug-ex1.gif">

## Related

[Roll20 Macros](https://marketplace.visualstudio.com/items?itemName=anduh.rmacro) is a related extension, which provides syntax highlight for Roll20's [macro & dice syntax](https://wiki.roll20.net/Macro_Guide).