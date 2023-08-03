# abc-list

Convert a to 0, z to 25, and reverse it

## Installation

```bash
npm install --save abc-list
```

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
