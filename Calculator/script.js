document.addEventListener( 'DOMContentLoaded', function () {
    var resultButton = document.getElementById("resultButton");
    resultButton.onclick = getResult;
});

function getExp (input) {
    var input = input.replace(/\s+/g, ''); //Remove space 
    if (input[0] == "-") {
        return 0 + input;
    }
    return input;
}

function getNumbers (input) {
    var splitCondition = /[-+*/=]/;
    var numbers = input.split(splitCondition).filter(Boolean);
    numbers = numbers.map(string => +string);
    return numbers;
}

function getOperators (input) {
    var operation = input.match(/[+*\-\/]/g,'').filter(Boolean);
    return operation;
}

function doOperations (numbers,operation){
    var result = numbers[0];
    for (var i = 0; i < operation.length; i ++){
        switch(operation[i]){
            case '+': result += numbers[i+1]; 
            break;
            case '-': result -= numbers[i+1]; 
            break;
            case '*': result *= numbers[i+1];
            break;
            case '/': result /= numbers[i+1]; 
            break;
        }
    }
    return result;
}

function getResult() {
    var input = document.getElementById("expression").value;
    input = getExp(input);
    if (input.length != 0) {
        if (input[input.length - 1] == "="){
            var operators = getOperators(input);
            var numbers = getNumbers(input);
            document.getElementById("result").value = doOperations(numbers,operators);
        }
        else {
            alert("Add = at the end of the expression");
        }
    }
    else {
        alert ("You entered an empty field");
    }
}

