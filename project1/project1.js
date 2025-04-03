// Math Equation functionality
let correctAnswer;

function generateMathEquation() {
    const num1 = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
    const num2 = Math.floor(Math.random() * 10) + 1;
    correctAnswer = num1 + num2; // Addition equation

    document.getElementById("math-question").innerText = `What is ${num1} + ${num2}?`;
}

function checkMathAnswer() {
    const userAnswer = document.getElementById("math-answer").value;
    const feedback = document.getElementById("math-feedback");

    if (parseInt(userAnswer) === correctAnswer) {
        feedback.innerText = "Correct! Great job!";
        feedback.style.color = "green";
    } else {
        feedback.innerText = "Oops! Try again.";
        feedback.style.color = "red";
    }

    // Clear the answer field
    document.getElementById("math-answer").value = "";

    // Generate a new question
    generateMathEquation();
}

// Shapes Drawing functionality
function drawCircle() {
    const canvas = document.getElementById("shapes-canvas");
    const ctx = canvas.getContext("2d");

    // Clear the canvas before drawing a new shape
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw a circle
    ctx.beginPath();
    ctx.arc(200, 200, 50, 0, Math.PI * 2, false);
    ctx.fillStyle = "#FF6347"; // Tomato color
    ctx.fill();
}

function drawSquare() {
    const canvas = document.getElementById("shapes-canvas");
    const ctx = canvas.getContext("2d");

    // Clear the canvas before drawing a new shape
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw a square
    ctx.beginPath();
    ctx.rect(150, 150, 100, 100);
    ctx.fillStyle = "#4682B4"; // SteelBlue color
    ctx.fill();
}

// Initialize the first math equation when the page loads
window.onload = function () {
    generateMathEquation();
};
