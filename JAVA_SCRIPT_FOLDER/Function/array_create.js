const prompt = require("prompt-sync")();
let n = prompt("n: ");

let arr = [];

for (let i=1;i <= n;i++)
{
    arr.push(i);
}

console.log(arr)