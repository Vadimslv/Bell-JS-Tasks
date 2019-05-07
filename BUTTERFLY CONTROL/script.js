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

function alltoRight(){
var leftList = document.getElementById("leftNames");
var rightList = document.getElementById("rightNames");
var option = document.createElement("option");
console.log(leftList.options);

var options = document.querySelectorAll("#leftNames option");

for (var i = 0; i<options.length; i++){
  rightList.add(options[i]);
  
  }
}

function alltoLeft(){
var leftList = document.getElementById("leftNames");
var rightList = document.getElementById("rightNames");
var option = document.createElement("option");

var options = document.querySelectorAll("#rightNames option");

for (var i = 0; i<options.length; i++){
  leftList.add(options[i]);
  
  }
}