# WebP

WebPのJavaScript/WebAssemblyによる利用ツールです。

## デモ

- [デコーダーデモ](https://code4fukui.github.io/WebP/dec/example.html)
- [エンコーダーデモ](https://code4fukui.github.io/WebP/enc/example.html)

## 機能

- WebPのデコードとエンコード
- WebAssemblyによる高速動作

## 使い方

```js
import { WebP } from "https://code4fukui.github.io/WebP/WebP.js";

const webpbin = await Deno.readFile('./example.webp');
const image = WebP.decode(webpbin);
console.log(image);

const webpbin2 = WebP.encode(image);
console.log(webpbin2.length);
```

## ライセンス

[GoogleChromeLabs/squoosh](https://github.com/GoogleChromeLabs/squoosh)から派生したものなので、BSDライセンスに従います。