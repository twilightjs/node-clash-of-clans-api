
![Logo](https://user-images.githubusercontent.com/64698297/175831179-01c8beda-1c18-4f96-8a84-1452c58206f5.png)


# Twilight.js clash-of-clans-api

Twilight.js clash-of-clans-api for Node.js is an asynchronous library for making requests to the [Clash of Clans API] (https://developer.clashofclans.com/#/)


## Features

- Asynchronous
- Handy
- Cross platform
- Written in ES6 standard


## Examples

```javascript
import { ClashOfClans } from "./ClashOfClans.js";

const clashOfClans = new ClashOfClans("YOUR API TOKEN");
clashOfClans.players()
    .get("PLAYER TAG")
    .then((player) => {
        player.troops();
        player.heroes();
        player.spells();
    });
```


## Tech Stack

**Node.js**

## Authors

- [@SeRzZzJ](https://github.com/SeRzZzJ)


## Support

- [@SeRzZzJ](https://github.com/SeRzZzJ)
