# WebP

JavaScript / WebAssembly 向けの WebP ユーティリティ

## デモ

- [デコーダーのデモ](https://code4fukui.github.io/WebP/dec/example.html)
- [エンコーダーのデモ](https://code4fukui.github.io/WebP/enc/example.html)

## 特徴

- WebP 画像のデコードおよびエンコード
- WebAssembly ベース

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

MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
