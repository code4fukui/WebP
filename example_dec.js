import webp_dec from "./dec/webp_dec.js";
//import webp_dec from "./dec/webp_node_dec.js";
//import webp_dec from "./dec/webp_deno_dec.js";

const webpbin = await Deno.readFile("example.webp");
const module = await webp_dec();

console.log('Version:', module.version().toString(16));
const imageData = module.decode(webpbin);
console.log(imageData);

/*
const canvas = document.createElement('canvas');
canvas.width = imageData.width;
canvas.height = imageData.height;
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');
ctx.putImageData(imageData, 0, 0);
*/
