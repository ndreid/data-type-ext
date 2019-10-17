# data-type-ext

Lightweight, type-safe "extension methods" to remove the need of null checking.

No more "Cannot read property {property} of undefined/null"!

## Installation

Install using [npm](https://www.npmjs.com/get-npm)

```sh
npm install data-type-ext
git clone https://github.com/ndreid/drill-schedule.git
```

## Usage

```js
import { _Date } from 'data-type-ext'

let date = new Date() // '1/10/2020'
let strDate = '1/1/2020'
let nullDate = null

_Date.diff(date, strDate, 'day') //9 - works with mismatching types!
_Date.diff(date, nullDate, 'day') //undefined - no error thrown!
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
