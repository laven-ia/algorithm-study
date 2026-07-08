const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split("\n");
input = input.map((n) => Number(n).toFixed(3))

console.log(input.join("\n"));

// let [a, b, c] = input;

// a = (Math.round(a * 1000) / 1000).toFixed(3);
// b = (Math.round(b * 1000) / 1000).toFixed(3);
// c = (Math.round(c * 1000) / 1000).toFixed(3);

// console.log(`${a}\n${b}\n${c}`)