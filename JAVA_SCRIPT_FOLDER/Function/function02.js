const prompt = require("prompt-sync")();
let num1=Number(prompt("Enter the number: "));
let num2=Number(prompt("Enter the number: "));

function sum(a,b){
     console.log(`The sum of ${a} + ${b} is ${a+b}`);
}

sum(num1,num2);