console.log("student's full name")
// collect elements
const myform = document.querySelector("#myform")
const greeting = document.querySelector(".greeting")
const greetuser = document.querySelector(".greetuser")
const btnsubmit = document.querySelector(".btnsubmit")
const errormsg = document.querySelector(".errormsg")

window.addEventListener("load", function(){
    // disabled the submit button when the webpage is loaded
    btnsubmit.disabled = true
})

myform.addEventListener("submit", function(event){
    event.preventDefault()


    //collect the username
    let username = document.querySelector("#username")
    let usernamevalue = username.value


})
    //collect the input value
    let username = document.querySelector("#username")
    let usernamevalue = username.ariaValueMax
    
    // remove whitespace before and after the username
    usernamevalue - usernamevalue.trim()

    //testing
    console.log(usernamevalue)

    if(uesrnamevalue===""){
        alert("Please enter a username")
        return; // stop further exercution 
    }
    
   
    errormsg.style.display
}
   
    // print the username in the greeting message
    greetuser.innerHTML = usernamevalue
    greeting.style.display = "block" 


     //clear input value
    username.value =""
})
