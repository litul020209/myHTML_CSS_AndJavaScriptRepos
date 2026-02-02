const prompt = require("prompt-sync")();
let name = prompt("enter your name: ");
let l = name.length;
name = "@"+name+l ;
console.log(name)