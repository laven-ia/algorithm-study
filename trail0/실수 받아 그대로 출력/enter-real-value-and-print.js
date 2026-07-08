const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());
const result = Math.round(n * 100) / 100;

console.log(result.toFixed(2));