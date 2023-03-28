# pretty-nums

[![npm version](https://badge.fury.io/js/pretty-nums.svg)](https://badge.fury.io/js/pretty-nums)

> Convert numbers to a human readable string: `1234` → `1.2K`

## Installation

```sh
npm install pretty-nums
```

## Usage

```js
import prettyNums from 'pretty-nums';

prettyNums(42); // '42'
prettyNums(1234); // '1.2K'
prettyNums(5000); // '5.0K'
prettyNums(2500000); // '2.5M'
prettyNums(123456789); // '123.5M'

// Handles negative numbers
prettyNums(-42); // '-42'
prettyNums(-1234); // '-1.2K'
prettyNums(-2500000); // '-2.5M'
prettyNums(-9876543210); // '-9.9B'
```

## License

MIT &copy; [Rocktim Saikia](https://rocktimsaikia.dev)
