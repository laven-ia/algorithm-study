const fs = require("fs");
const [a, b, c] = fs.readFileSync(0).toString().trim().split(" ").map(n => Number(n));

console.log(a + b + c);
console.log(((a + b + c) / 3));
console.log(a + b + c - ((a + b + c) / 3));