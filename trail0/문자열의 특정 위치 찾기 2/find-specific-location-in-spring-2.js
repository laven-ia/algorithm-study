const fs = require("fs");
const str = fs.readFileSync(0).toString().trim();
const words = ["apple", "banana", "grape", "blueberry", "orange"];

let cnt = 0;
for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word?.[2] === str) {
        console.log(word);
        cnt++;
    }
    else if (word?.[3] === str) {
        console.log(word);
        cnt++;
    }
}

console.log(cnt);