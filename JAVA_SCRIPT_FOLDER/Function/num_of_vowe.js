const prompt = require("prompt-sync")();
let str = prompt("str: ");



let count = 0;

for (let x of str)
{
    if (
         x  === 'a' ||
         x  === 'e' ||
         x  === 'i' ||
         x  === 'o' ||
         x  === 'u' 
       )
    {
        count += 1;
    }
}

console.log(count)