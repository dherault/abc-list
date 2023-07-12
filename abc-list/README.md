# abc-list

Convert 0 to a, 1 to b and reverse it.

## Installation

`npm install --save abc-list`

## Usage

```javascript
import { fromAbc, toAbc } from 'abc-list'

fromAbc('a') // 0
fromAbc('b') // 1
fromAbc('az') // 51
toAbc(0) // 'a'
toAbc(1) // 'b'
toAbc(51) // 'az'
```

## License

MIT
