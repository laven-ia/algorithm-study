const fs = require("fs");
const y = Number(fs.readFileSync(0).toString().trim());

if (y % 100 === 0 && y % 400 !== 0) {
    console.log(false);
}
else if (y % 4 === 0) {
    console.log(true);
}
else {
    console.log(false);
}