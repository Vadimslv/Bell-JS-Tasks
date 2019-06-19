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
});

var COUNT = 5; //Set countdown time   
var time, count;

function Start (){  
    Play();   
}

function Display() {
    document.getElementById("timer").innerHTML = count;
}
    
function Countdown() {
    Display();
        if (count == 0) {
            window.open("../Page3/index.html","_self");
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
    Stop();
    Countdown();
}

function Forward() {
    Stop();
    window.open("../Page3/index.html","_self");
}

function Back() {
    Stop();
    window.open("../Page1/index.html","_self");
}

