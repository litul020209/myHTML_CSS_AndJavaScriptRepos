const prompt= require("prompt-sync")();

let num=prompt("Enter the number: ");
let sum=0;
for(let i=0;i<=num;i++){
   sum+=i
}
console.log(sum)