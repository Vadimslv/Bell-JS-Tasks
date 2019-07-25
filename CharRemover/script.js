document.addEventListener( "DOMContentLoaded", function () {
    var resultButton = document.getElementById("resultButton");
    resultButton.onclick = getResult;
});

function splitMulti(text, delims){
    var tempSymb = delims[0];
    for(var i = 1; i < delims.length; i++){
        text = text.split(delims[i]).join(tempSymb);
    }
        text = text.split(tempSymb);
        return text;
    }

function getCharsToIgnore (text) {
    var splittedText = splitMulti(text,  ['.', ',', ':', ' ','!',' ?',';']);
    var toIgnore = {}                                                          //Create local tab

    for (var i=0, len = splittedText.length; i < len; i++) {
        var word = splittedText[i];
        var charTable = {};
        for (var j=0, len2 = word.length; j < len2; j++) {
            if (charTable.hasOwnProperty(word[j])) {
                charTable[word[j]]++
                toIgnore[word[j]] = true;
            } else {
                charTable[word[j]] = 1;
            }
        }
    }
    return toIgnore;
}

 function cleanChars (text) {
    var toIgnore = getCharsToIgnore(text);
    var cleanedText = '';
    for (var i=0, len = text.length; i < len; i++) {
        if (!toIgnore[text[i].toLowerCase()]) {
            cleanedText += text[i]
        }
    }

    return cleanedText
}

function getResult() {
    var inputText = document.getElementById("words").value;
    if (inputText.length != 0) {
        document.getElementById("result").value = cleanChars(inputText);
    }
    else { 
        alert ("You entered an empty field");
    }
}