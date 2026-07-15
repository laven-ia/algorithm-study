const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n").map(Number);

let num = -1;
let idx = 0;
while (num !== 0) {
    num = input[idx];
    if (num !== 0)
        console.log(num);
    idx++;
}