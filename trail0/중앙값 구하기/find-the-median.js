const fs = require("fs");
const arr = fs.readFileSync(0).toString().trim().split(" ").map(n => Number(n));
arr.sort((a, b) => a - b);

console.log(arr[1]);