const fs = require("fs");
const n = fs.readFileSync(0).toString().trim();

let res = 0;
for (let i = 1; i <= n; i++) {
    if (i % 2 === 0 || i % 3 === 0 || i % 5 === 0)
        res++;
}

console.log(n - res);