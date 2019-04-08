function getExp (input) {
    var input = input.replace(/\s+/g, ''); //Remove spaces 
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
        case '+': result = result + numbers[i+1]; 
        break;
        case '-': result = result - numbers[i+1]; 
        break;
        case '*': result = result * numbers[i+1];
        break;
        case '/': result = result / numbers[i+1]; 
        break;
        }
    }
    return result;
}

function getResult() {

    var input = document.getElementById("expression").value;
    input = getExp(input);
    if (input.length != 0) {
        var operators = getOperators(input);
        var numbers = getNumbers(input);
        document.getElementById("result").value = doOperations(numbers,operators);
    }
    else {
        alert ("You entered an empty field");
    }
}

