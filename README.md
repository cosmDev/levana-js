# levana-js

`levana-js` is a npm library for dealing with levana.

## Installation

Use the package manager [npmjs](https://www.npmjs.com/) to install levana-js.

```bash
npm install levana-js
```

## Usage

```javascript
import { LevanaJs } from "@cosmdev/levana-js";

const levana = new LevanaJs(
  '***********', // Rpc address 
  'osmo1hd7r733w49wrqnxx3daz4gy7kvdhgwsjwn28wj7msjfk4tde89aqjqhu8x' // Market ATOM/USD
);

await levana.initLevana()

const myAddress = 'osmo1*******************************'
 
console.log(await levana.getPrice())
// console.log(await levana.getPositionsByAddress(myAddress))
// console.log(await levana.getPositionById('4667'))
// console.log(await levana.getClosedPositionHistory(myAddress))
// console.log(await levana.getTradeHistorySummary(myAddress))
// console.log(await levana.getPositionActionHistory('4667'))
// console.log(await levana.getTraderActionHistory(myAddress))
// console.log(await levana.getLpActionHistory(myAddress))
// console.log(await levana.getLimitOrderHistory(myAddress))
// console.log(await levana.getLpInfo(myAddress))
// console.log(await levana.getDeltaNeutralityFee(1))

```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[Apache License](https://github.com/cosmDev/levana-js/blob/main/LICENSE)
