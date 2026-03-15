# WebP

util for WebP in JavaScript / WebAssembly

## Demo

- https://code4fukui.github.io/WebP/dec/example.html
- https://code4fukui.github.io/WebP/enc/example.html

## Features

- Decode and encode WebP images
- WebAssembly based

## Usage

```js
import { WebP } from "https://code4fukui.github.io/WebP/WebP.js";

const webpbin = await Deno.readFile('./example.webp');
const image = WebP.decode(webpbin);
console.log(image);

const webpbin2 = WebP.encode(image);
console.log(webpbin2.length);
```

## How to build

with [bin2js](https://github.com/code4fukui/bin2js)
```sh
deno run -A https://code4fukui.github.io/bin2js/bin2js.js dec/webp_dec.wasm
deno run -A https://code4fukui.github.io/bin2js/bin2js.js enc/webp_enc.wasm
```

## License

BSD