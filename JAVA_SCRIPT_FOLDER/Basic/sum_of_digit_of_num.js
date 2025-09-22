const prompt = require("prompt-sync")();

let num=prompt("Enter the number: ");
let sum=0;
while(num > 0){
    let digit=num%10;
    sum+=digit;
    let result = Math.floor(num / 10);
    num=result;
}

console.log(sum)