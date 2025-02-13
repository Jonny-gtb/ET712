/*

Homework 1: control flow and loops

Student’s name: Jonathan Cineus

*/// Prompt the user to enter something
let userInput = prompt("Please enter something:");

if (userInput === null) {
    // User clicked Cancel
    console.log("Null and void!");
} else if (userInput === "") {
    // User entered a blank input
    console.log("Your answer was blank!");
} else {
    // Check if the input is a number
    let userNumber = parseFloat(userInput);
    
    if (!isNaN(userNumber)) {
        // If it's a number, check if it's positive, negative, or zero
        if (userNumber > 0) {
            console.log("Think positively!");
        } else if (userNumber < 0) {
            console.log("Never have negative balance!");
        } else {
            console.log("Yin and Yang!");
        }
    } else {
        // If it's not a number
        console.log("Your answer was blank!");
    }
}