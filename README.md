# levana-js

![dragon-5-579a329e](https://github.com/cosmDev/levana-js/assets/1071490/0f42f7c8-d89d-4f55-bcd8-cf2d24895145)

`levana-js` is a npm library for dealing with levana.

## Installation

Use the package manager [npmjs](https://www.npmjs.com/) or [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable) to install `levana-js`.

```bash
### Install with npm
npm install @cosmdev/levana-js
```
```bash
### Install with yarn  
yarn add @cosmdev/levana-js
```

## Usage

```javascript
import { LevanaJs } from "@cosmdev/levana-js";

const rpcAddress = '.......'
const myAddress = 'osmo1......'
const marketAddress = 'osmo1hd7r733w49wrqnxx3daz4gy7kvdhgwsjwn28wj7msjfk4tde89aqjqhu8x'

const levana = new LevanaJs(
  rpcAddress, // Rpc address 
  marketAddress // Market address
);

async function init() {
  await levana.initLevana()  
  // console.log(await levana.getPrice())
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

  console.log(await levana.getPrice())

}

init()

```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[Apache License](https://github.com/cosmDev/levana-js/blob/main/LICENSE)
