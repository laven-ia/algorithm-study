const fs = require("fs");
const [len, ...arr] = fs.readFileSync(0).toString().trim().split(/\s+/);

console.log(arr.map(i => Math.pow(Number(i), 2)).join(" "));