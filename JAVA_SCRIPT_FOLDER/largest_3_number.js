const prompt = require("prompt-sync")();

let num1=prompt("Enter the number 1: ");
let num2=prompt("Enter the number 2: ");
let num3=prompt("Enter the number 3: ");

if (num1 >= num2 && num1 >= num3){
    console.log("num1 is greater..",num1);
}
else if (num2 >= num2 && num2 >= num3){
    console.log("num2 is greater..",num2);
}
else{
    
    console.log("num3 is greater..",num3);
}
