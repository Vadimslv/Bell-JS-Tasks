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
window.onclick = closeModalWithoutButton; // If you click outside the modal window
var close = document.getElementById("closeTab");
close.onclick = closeTab;
var repeat = document.getElementById("repeat");
repeat.onclick = Repeat;
var closeModal = document.getElementsByClassName("closeModal")[0];
closeModal.onclick = closeModal;
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
            showModal();
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

function showModal() {
    var modal = document.getElementById("modalWindow");
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("modalWindow");
    modal.style.display = "none";
}

function closeModalWithoutButton(event) {
    var modal = document.getElementById("modalWindow");
    if (event.target == modal) {
        modal.style.display = "none";
    }
    Repeat();
}

function closeTab() {
    window.close();
}

function Repeat() {
    closeModal();
    Play();
    Start();
}