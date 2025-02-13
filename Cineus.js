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
// Initialize an empty array to store the numbers
let numbers = [];

// Use a for loop to collect 10 numbers from the user
for (let i = 0; i < 10; i++) {
    let userInput = prompt(`Enter number ${i + 1}:`);
    
    // Parse the user input into a number
    let number = parseFloat(userInput);
    
    // Check if the input is a valid number
    if (!isNaN(number)) {
        numbers.push(number);
    } else {
        console.log("Invalid input! Please enter a valid number.");
        i--; // Decrement the loop counter to ensure 10 valid numbers
    }
}

// Initialize counters for multiples of 3, 5, and 7
let multipleOf3 = 0;
let multipleOf5 = 0;
let multipleOf7 = 0;

// Check each number for multiples of 3, 5, and 7
for (let num of numbers) {
    if (num % 3 === 0) {
        multipleOf3++;
    }
    if (num % 5 === 0) {
        multipleOf5++;
    }
    if (num % 7 === 0) {
        multipleOf7++;
    }
}

// Display the results in the console
console.log(`${multipleOf3} numbers are multiple of 3`);
console.log(`${multipleOf5} numbers are multiple of 5`);
console.log(`${multipleOf7} numbers are multiple of 7`);
