const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(/\s+/).map(Number);

let i = 0;
while (true) {
    if (arr[i] < 25) {
        console.log("Higher");
    }
    else if (arr[i] > 25) {
        console.log("Lower");
    }
    else {
        console.log("Good");
        break;
    }
    i++;
}