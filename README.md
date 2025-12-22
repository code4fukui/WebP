# WebP

util for WebP in JavaScript / WebAssembly

- Source: https://github.com/webmproject/libwebp
- Version: v1.0.2	
- License: BSD

## usage

```js
import { WebP } from "https://code4fukui.github.io/WebP/WebP.js";

const webpbin = await Deno.readFile('./example.webp');
const image = WebP.decode(webpbin);
console.log(image);

const webpbin2 = WebP.encode(image);
console.log(webpbin2.length);
```

## sample

- https://code4fukui.github.io/WebP/dec/example.html
- https://code4fukui.github.io/WebP/enc/example.html

## how to build

with [bin2js](https://github.com/code4fukui/bin2js)
```sh
deno run -A https://code4fukui.github.io/bin2js/bin2js.js dec/webp_dec.wasm
deno run -A https://code4fukui.github.io/bin2js/bin2js.js enc/webp_enc.wasm
```

## forked from

- [squoosh/codecs/webp at dev · GoogleChromeLabs/squoosh](https://github.com/GoogleChromeLabs/squoosh/tree/dev/codecs/webp) in [GoogleChromeLabs/squoosh: Make images smaller using best-in-class codecs, right in the browser.](https://github.com/GoogleChromeLabs/squoosh)
