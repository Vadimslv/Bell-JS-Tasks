document.addEventListener( "DOMContentLoaded", function () {
window.onload = Start;
var nextPage = document.getElementById("forward");
nextPage.onclick = Forward;
var prevPage = document.getElementById("back");
prevPage.onclick = Back;
var stop = document.getElementById("stop");
stop.onclick = Stop;
var play = document.getElementById("play");
play.onclick = Play;
}, false );

var COUNT = 5; //Set countdown time   
var time, count;

function Start (){  
    Play();
    Countdown();    
}

function Display() {
    document.getElementById("timer").innerHTML = count;
}
    
function Countdown() { 
    Display();
        if (count == 0) {
            window.open("../Page4/index.html");
        } else {
            count--;
            time = setTimeout("Countdown()", 1000);
        }
}
    
function Stop() {
    clearTimeout(time);
}
    
function Play() {
    count = COUNT;
    Display();
}

function Forward() {
    Stop();
    window.open("../Page4/index.html");
}

function Back() {
    Stop();
    window.open("../Page2/index.html");
}