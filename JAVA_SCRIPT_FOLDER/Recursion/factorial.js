const prompt = require("prompt-sync")();
let num1=Number(prompt("Enter the number: "));

function factorial(n){
    if (n=== 0){
       return 1;
    }

    return n*factorial(n-1);

}

let res=factorial(num1);

console.log(res)
