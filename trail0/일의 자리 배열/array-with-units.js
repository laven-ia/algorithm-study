const fs = require("fs");
const arr = fs.readFileSync(0).toString().trim().split(/\s+/).map(i => Number(i));

for (let i = 0; arr.length < 10; i++) {
    const newNum = (arr[i] + arr[i + 1]) % 10;
    arr.push(newNum);
}

console.log(arr.join(" "));