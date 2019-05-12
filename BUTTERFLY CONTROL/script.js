document.addEventListener( 'DOMContentLoaded', function () {
var forwardButton = document.getElementById("forward");
forwardButton.onclick = forward;
var backButton = document.getElementById("back");
backButton.onclick = back;
var allToRightButton = document.getElementById("allToRight");
allToRightButton.onclick = allToRight;
var allToLeftButton = document.getElementById("allToLeft");
allToLeftButton.onclick = allToLeft;
}, false );

function forward(){
	var leftList = document.getElementById("leftNames");
	var rightList = document.getElementById("rightNames")
	var option = document.createElement("option");
	var selectedOption = leftList.options[leftList.selectedIndex];
	
	if (selectedOption == undefined){
		alert("Choose an option");
	}
	else {
		selectedOption.selected = false;
    	option.text = selectedOption.text ;
    	rightList.add(option);
    	leftList.remove(option);
		}
}

function back(){
	var leftList = document.getElementById("leftNames");
	var rightList = document.getElementById("rightNames")
	var option = document.createElement("option");
	var selectedOption = rightList.options[rightList.selectedIndex];
	
	if (selectedOption == undefined){
		alert("Choose an option");
	}
	else {
		selectedOption.selected = false;
    	option.text = selectedOption.text ;
    	leftList.add(option);
    	rightList.remove(option);
		}

}

function allToRight(){
var rightList = document.getElementById("rightNames");
var option = document.createElement("option");
var options = document.querySelectorAll("#leftNames option");

for (var i = 0; i<options.length; i++){
  rightList.add(options[i]);
  
  }
}

function allToLeft(){
var leftList = document.getElementById("leftNames");
var rightList = document.getElementById("rightNames");
var option = document.createElement("option");

var options = document.querySelectorAll("#rightNames option");

for (var i = 0; i<options.length; i++){
  leftList.add(options[i]);
  
  }
}