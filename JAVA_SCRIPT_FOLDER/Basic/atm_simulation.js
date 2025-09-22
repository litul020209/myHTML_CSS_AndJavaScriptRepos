// ATM Simulation

// Write a program that takes:

// Current balance = 5000

// User inputs amount to withdraw

// If amount > balance → "Insufficient Balance"

// If amount ≤ balance → deduct and show "Withdrawal Successful. New Balance = X"

const prompt = require("prompt-sync")();

let balance= 5000;
let amount=prompt("Enter the amount: ")
amount=Number(amount)
if (amount > balance){
    console.log("Insufficient Balance");
}
else{
    balance=balance-amount;
    console.log("Withdrawal Successful. New Balance is",balance);
    
}