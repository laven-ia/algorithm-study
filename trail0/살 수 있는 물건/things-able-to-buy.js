const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

const price = {
    "book": 3000,
    "mask": 1000,
}

let result = ["no", 0];

for (const item in price) {
    if (price[item] <= n && price[item] > result[1]) {
        result[0] = item;
        result[1] = price[item];
    }
}

console.log(result[0]);