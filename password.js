const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log("Welcome to the password validator tool!");

let recall = function(){
    rl.question("Enter your password: ",function (password) { //once enter is pressed the function and the parameter is what is entered
        if(password.length<10)
        {
            console.log("Please enter a password that is greater than 10 characters.");
            recall();
        }
        else
        {
            console.log("Success!");
            rl.close();
        }
    });
}
recall();