const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(n => Number(n));

console.log(Number(a >= b));
console.log(Number(a > b));
console.log(Number(a <= b));
console.log(Number(a < b));
console.log(Number(a == b));
console.log(Number(a != b));
