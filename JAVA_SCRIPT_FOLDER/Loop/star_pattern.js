const prompt = require("prompt-sync")();

let n = prompt("Enter the number: ");

for (let i = 1; i <= n; i++) {
    let row = "";
    for (let k = 1; k <= i; k++) {
        row += "* ";
    }
    console.log(row);
}
