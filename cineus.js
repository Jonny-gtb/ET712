console.log("Jonathan Cineus")





console.log(sum(5,8))

console.log("\n------- Example 2: function in a variable-------")
// function to return the square root of a number
let squarenumber = function(n){

}
// call function
console.log(squarenumber(5))

console.log("\n------ Example 3: arrow function --------")
let greet = (username) => {

}

//call function
greet("Peter Pan")

console.log("\n------ Example 4: function with default parameter --------")
function cubenumber(n){

}
//call function
console.log(`2^3 = ${cubenuymber(2)}`)
console.log(`empty^3 = ${cubenumber()}`)

console.log("\n------ Example 5: spread syntax ... --------")
nums =[-2, 5, 9, -8]
let maxnum = Math.max(nums)
console.log(maxnum)
    
 console.log("\n------ Example 6: objects --------")
 //create an object
 const car ={
    // properties
        type:"Fiat"
        model: 500,
        color:"white",
        price:23000

    //methods
    description:function(){
        return `${this.color} ${this.type} cost $ ${this.price}`
    }
 }
 // calling the car object
 console.log(car.model)
// calling the object method 'description'
console.log(car.description())

console.log("\n------ Example 7: objects --------")
const hen ={
    //properties
    name: "Helen",
    year: 2025,
    eggcount:0,

    //method
    layanegg: function(){
        this.eggcount++
        return "EGG"
    } 
}
// calling the property 'eggcount'
console.log(`${hen.name} has ${hen.eggcount} eggs`)
//calling the method
console.log(hen.layanegg())
console.log(hen.layanegg())
console.log(`${hen.name} has ${hen.eggcount} eggs`)
console.log(hen.layanegg())
console.log(`${hen.name} has ${hen.eggcount} eggs`)

console.log("\n------ Example 8: try-except --------")
function yell(msg){
    try{
        console.log(msg.toUppercase().repeat(3))
    }
    catch{
        console.log(`ERROR! type of error ${e}` )
    }
    finally{
        console.log("End  of function 'yell")
    }
}
//calling the function
yell("help ")
yell(8)
console.log("end of example 8")

console.log("\n----- EXERCISE -----")