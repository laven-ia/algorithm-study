const fs = require('fs');
const n = fs.readFileSync(0).toString().trim();

let result = "";
for (let i = 0; i < 8; i++) {
    result = result + n;
}
console.log(result);