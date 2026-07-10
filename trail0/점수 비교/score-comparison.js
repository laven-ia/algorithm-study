const fs = require("fs");
const [a1, a2, b1, b2] = fs.readFileSync(0).toString().trim().split(/\s+/).map(n => Number(n));

if (a1 > b1 && a2 > b2)
    console.log(1);
else
    console.log(0);