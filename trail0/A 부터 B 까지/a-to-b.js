const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let res = "";
while (a <= b) {
    res += a + " ";
    if (a % 2 === 1) {
        a *= 2;
    }
    else
        a += 3;
}

console.log(res.trim());