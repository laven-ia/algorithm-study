const fs = require("fs");
const arr = fs.readFileSync(0).toString().trim().split("\n").map(Number);

let res = [0, 0];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0)
        res[0]++;
    if (arr[i] % 5 === 0)
        res[1]++
}

console.log(res.join(" "));