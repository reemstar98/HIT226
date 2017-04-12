//this is about event listeners now information gotten from https://www.w3schools.com/js/js_htmldom_eventlistener.asp

document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}
    
//this is about event listeners about alerts
document.getElementById("myNbtn").addEventListener("click", function(){
    alert("Well Howdy there Mate");
});

//this is about event listeners about resizing windows
window.addEventListener("resize", function(){
    document.getElementById("world").innerHTML = Math.random();
});
    // below is the code for the button of the page
function clickCounter() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = "The amount of times you have clicked the button is: " + localStorage.clickcount ;
    } else {
        document.getElementById("result").innerHTML = "Maybe another time would be best for this function";
    }
}
