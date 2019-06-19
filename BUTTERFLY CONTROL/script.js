document.addEventListener( 'DOMContentLoaded', function () {
var forwardButton = document.getElementById("forward");
forwardButton.onclick = toLeft;
var backButton = document.getElementById("back");
backButton.onclick = toRight;
var allToRightButton = document.getElementById("allToRight");
allToRightButton.onclick = allToRight;
var allToLeftButton = document.getElementById("allToLeft");
allToLeftButton.onclick = allToLeft;
});

function toLeft(){
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

function toRight(){
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
var selectedOption = rightList.options[rightList.selectedIndex];
for (var i = 0; i<options.length; i++){
  rightList.add(options[i]); 
  selectedOption.selected = false;
  }
}

function allToLeft(){
var leftList = document.getElementById("leftNames");
var rightList = document.getElementById("rightNames");
var option = document.createElement("option");
var options = document.querySelectorAll("#rightNames option");
var selectedOption = leftList.options[leftList.selectedIndex];
for (var i = 0; i<options.length; i++){
  leftList.add(options[i]);
  selectedOption.selected = false;  
  }
}