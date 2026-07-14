const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().trim().split(" ");

if (a.length === b.length) {
    console.log("same");
    return;
}

let result = (a.length > b.length)? `${a} ${a.length}`:`${b} ${b.length}`
console.log(result);