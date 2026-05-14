# WebP

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

util for WebP in JavaScript / WebAssembly

## Demo

- [Decoder Demo](https://code4fukui.github.io/WebP/dec/example.html)
- [Encoder Demo](https://code4fukui.github.io/WebP/enc/example.html)

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

## License

MIT License — see [LICENSE](LICENSE).