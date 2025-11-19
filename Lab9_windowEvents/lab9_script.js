let displaypixels = document.querySelector(".displaypexels")
// read the pexels from the y axis
window.addEventListener("scroll", function(){
    let y_pixels = this.window.scrollY
    displaypixels.innerHTML = `${y_pixels} px away from the top`
})

// to the top
const toTop = document.querySelector(".toTop")
window.addEventListener("scroll", function(){
    let y_pixels = window.scrollY
    if (y_pixels>600){
        toTop.computedStyleMap.display = "block"
    }
    else{
        toTop.computedStyleMap.display = "none"
    }
})

// resize event: change background color if the window is resize
window.addEventListener("resize", function(){
    displaypixels.style.backgroundColor = "crimson"
})

//load event: when the page finishes loading, open an alert dialog
window.addEventListener("load", function(){
    this.alert("Page fully loaded!")
})