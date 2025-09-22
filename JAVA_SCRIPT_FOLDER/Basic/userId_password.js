const prompt = require("prompt-sync")();

let userId=prompt("Enter the user id: ");
let password=prompt("Enter the pass word: ")

if (userId==="admin"){
    if (password=="1234"){
        console.log("Login Sucessfully!");    
    }
    else{
        console.log("Wrong password!");   
    }
}
else{
    console.log("Invalid user name");   
}