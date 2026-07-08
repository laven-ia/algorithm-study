const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

let answer = "";
for (let i = 1; i <= 5; i++)
    answer += (n * i) + " ";

console.log(answer);