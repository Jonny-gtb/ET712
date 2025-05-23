/** 
 * Jonathan Cineus
 * Feb 11, function
 * */
console.log("Jonathan Cineus")
console.log("\n------- Example 1: function ---------") 
// create a function to prompt 'Hello World'
function msg(){
    console.log(`Hello World! ` )
}
console.log("\n--------- Example 2: function to print 3,2,1 --------")
// example 2, function to print 3, 2, 1
function printcount(){
    for(let n=3; n>0; n--){
        console.log
    }  
}
console.log("\n------- Example 3: function with parameters ---------")
// pass a name into a function. The function will prompt the name in all uppercase
function greeting(passname){
    passname = passname.toUpperCase()
    console.log(`Welcome to function ${passname}`)
}
// function that takes two numbers and prompt the sum of them
function sum(x,y){
    console.log(`${x} + ${y} = ${x+y}`)
}
console.log("\n------- Example 4: snake eyes--------")
// function to print 'snake eyes' if a 1 is passed to the function
function snake_eyes(x,y){
    if(x===1 && y ===1){
        console.log("SNAKE EYES!")
    }
    else{
        console.log("Not a  snake eyes!")
    }    
}
// call snake_eyes function
snake_eyes(3,2)
snake_eyes(1,1)

console.log("\n------- Example 5: function that returns value--------")
// function that returns the double of the number. The number is passname
function doublenumber(n){
    n *= 2 // n = n*2
    return n
}
// call function
let number = 5
let dbnum - doublenumber(number)
console.log(`The double of number ${number} is ${dbnum} `)

console.log("\n------ Example 6: function that returns value-------")
// function that returns 'true' if a temperature is greater than 75. Otherwise, it returns a 'false' if the temperature is less than or equal to 75       
function checktemp(temperature){
    if(tempature){
        return true
    }
    else{
        return false
    }
}

// call function
let t = 100
let temp_result = checktemp(t)
console.log(` Is the temperature greater than 75? ${temp_result}`)

console.log("\n------ example 7: built-in function --------")
// built-in function in JS is called as a global variable
// Math function
let num_pi = Math.PI
console.log(`JS PI value = ${num_pi}`)
// round () method returns the nearest integer
console.log(`rounded up PI = ${Math.round(num_pi)}`)
// ceil() method returns the round up of a number 
console.log(`ceil method applied to PI = ${Math.ceil(num_pi)}`)
// pow() method returns the value of base to the power of exponent
console.log(`12^3 = ${Math.pow(2,3)}`)
// square root method --> squrt()
console.log(`square root of 20 = ${Math.sqrt(20)}`)
// random number generator. random() method returns a random number between
console.log(`Random number = ${Math.random()}`)
// random number between 1 and 9
let n = 1 + Math.round(Math.random() * 8)
console.log(`Number between 1 and 9 = ${n}`)
console.log("\n------ example 8: random number ---------")
// function to randomly generate a number between -5 and 5
function randnumber() {
    let p = -5 + Math.round(Math.round) * 10
    return p;
}

console.log("\n------ example 9: random number in a list (array) -------- ")
// function to randomly pick a color from a list of colors
let colors = ["red", "green", "blue", "magneta", "gray"]
function randomcolor(){
        let list_size = colors.length
        let last_index = list_size - 1
        let random_index = Math.round(Math.random()*last_index) // randomy pick a number between 0 and the last index
        return colors[random_index]     // return the random picked color
}

    console.log(`Color picked = ${randomcolor()}`)

    console.log("\n------ EXERCISE ---------")

