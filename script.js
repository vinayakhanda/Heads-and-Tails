function flip() {
    var coin = Math.random();
    if (coin < 0.5) {
        
        document.getElementById("img").src = "head.png";
    } else {
        
        
        document.getElementById("img").src = "tail.png";
    }
}
function reset() {
    //Defing the reset function
    //When the reset button is clicked, the image will be changed to the default image(which is none )
    document.getElementById("img").src = "";
}