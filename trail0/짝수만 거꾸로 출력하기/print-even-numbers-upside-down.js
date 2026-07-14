const fs = require("fs");
const [n, ...arr] = fs.readFileSync(0).toString().trim().split(/\s+/).map(Number);

let res = ""
for (let i = n - 1; i >= 0; i--) {
    if (!(arr[i] % 2))
        res += arr[i] + " ";
        
}

console.log(res.trim());