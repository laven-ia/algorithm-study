const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(n => Number(n));

let answer = "";
for (let i = b; i >= a; i--)
    answer += i + " ";

console.log(answer);