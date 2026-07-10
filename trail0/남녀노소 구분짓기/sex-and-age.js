const fs = require("fs");
const [sex, age] = fs.readFileSync(0).toString().trim().split("\n").map(n => Number(n));

if (sex === 0) {
    if (age >= 19)
        console.log("MAN");
    else
        console.log("BOY");
}
else {
    if (age >= 19)
        console.log("WOMAN");
    else
        console.log("GIRL");
}