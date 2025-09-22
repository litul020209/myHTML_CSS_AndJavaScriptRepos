const prompt = require("prompt-sync")();
let num=prompt("Enter the number: ");
if (num%2==0){
   console.log("the number a is even number");
}
else{
    console.log("the number is a odd number");
}