const prompt = require("prompt-sync")();

let num1=prompt("Enter the num1 :  ");
let num2=prompt("Enter the num2 :  ");

result=(num1> num2)? "num1 is big": "num2 is big";
console.log(result);
