# WebP

WebPのJavaScript / WebAssemblyでの利用ツールです。

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

## ビルド方法

[bin2js](https://github.com/code4fukui/bin2js)を使ってビルドします。

```sh
deno run -A https://code4fukui.github.io/bin2js/bin2js.js dec/webp_dec.wasm
deno run -A https://code4fukui.github.io/bin2js/bin2js.js enc/webp_enc.wasm
```

## ライセンス

[GoogleChromeLabs/squoosh](https://github.com/GoogleChromeLabs/squoosh)から派生したものなので、BSDライセンスに従います。