import inquirer from "inquirer"

let guessNumber = Math.floor(Math.random() * 100) + 1; // 1 to 100

while (true) {
    let getguessNumber = await inquirer.prompt({
        type: "number",
        name: "Userdata",
        message: "Guess a number from 1 to 100: "
    });

    if (getguessNumber.Userdata === guessNumber) {
        console.log("Congratulations! You got it.");
        break;
    } else if (getguessNumber.Userdata < guessNumber) {
        console.log("Your guess is lower than the system number");
    } else if (getguessNumber.Userdata > guessNumber) {
        console.log("Your guess is higher than the system number");
    } else {
        console.log("Please enter a valid number");
    }
}

