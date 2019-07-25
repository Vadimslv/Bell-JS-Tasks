document.addEventListener ('DOMContentLoaded', function () {
	var leftOptions = document.querySelectorAll("#leftNames option");
	var rightOptions = document.querySelectorAll("#rightNames option");
	var forwardButton = document.getElementById("forward");
	var backButton = document.getElementById("back");
	var leftList = document.getElementById("leftNames");
	var rightList = document.getElementById("rightNames");

	forwardButton.onclick = () => toMoveSelectedElements(leftList, rightList);
	backButton.onclick = () => toMoveSelectedElements(rightList, leftList);

	var allToRightButton = document.getElementById("allToRight");
	allToRightButton.onclick = () => toMoveAllElements(leftOptions,rightOptions);
	var allToLeftButton = document.getElementById("allToLeft");
	allToLeftButton.onclick = () => toMoveAllElements(rightOptions,leftOptions);
});

function toMoveSelectedElements(fromList, toList){
	var option = document.createElement("option");
	var selectedOption = fromList.options[fromList.selectedIndex];
	if (selectedOption === undefined){
		alert("Choose an option");
	}
	else {
		option.text = selectedOption.text;
		fromList.remove(fromList.selectedIndex);
  		toList.add(option); 
	}
}

function toMoveAllElements(fromList, toList){
	var options = fromList;
	var selectedOption = fromList.options[fromList.selectedIndex];
	for (var i = 0; i < fromList.length; i++){
  		toList.add(options[i]); 
  		selectedOption.selected = false;
  	}
}

/*function allToRight(){
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
*/