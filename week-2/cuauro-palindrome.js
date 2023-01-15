/*
===========================================
; Title: Theme.js
; Author: Professor Krasso
; Date: 01 05 2023
; Modified by: Patrick Cuauro
; Description: Script file for Web-330.
===========================================
*/
/*function creation*/
/*No it is open on one position*/
function getTodayDate(){
    //assign the variable today's date.
    let calendar = new Date();
    //configure the date in the american format specifically US
    let today = calendar.toLocaleDateString("en-US");
    return today;
};
function getLength(temporalText) {
    //
    let textLength = temporalText.length;
    return textLength;
};
function reverse(cleanText) {
    //convert the received text to an array.
    let arrayText = cleanText.split('');
    //reverse the result.
    let dealtText = arrayText.reverse();
    //join it again.
    let resultText2 = dealtText.join('');
    return resultText2;
};
function isPalindrome() {
    //invoke the function getTodaydate.
    getTodayDate();
    //invoke the function getLength.
    getLength();
};
btnCheckPhrase.addEventListener("click", function isPalindrome(){
    //get the data from the input and assign it to the variable temporalText.
    let temporalText = document.getElementById("textPhrase").value;
    let today = getTodayDate();
    //pass the value from the html to the function getLength.
    let textLength = getLength(temporalText);
    //the symbols and other elements must be filtered to compare the phrases correctly.
    let cleanText = temporalText.replace(/\W/g, '');
    //the text needs to be converted to lower case to avoid differences with capital letters in the expression.
    cleanText = cleanText.toLowerCase();
    //now we verified the reversed phrase is equal giving a successful or unsuccessful response in the <p> html element.
    let palText = reverse(cleanText);
    if (palText === cleanText){
        document.getElementById("assignResults").innerHTML = temporalText + " " + "<u><b>is</b></u> a palindrome";
    }
    else {
        document.getElementById("assignResults").innerHTML = temporalText + " " + "<u><b>is not</b></u> a palindrome";
    }
    //show the results on the assign-results for the date, original phrase, reversed phrase and length.
    document.getElementById("assign-results").innerHTML = "Date:" + " " + today + "<br>" + "Original Phrase:" + " " + temporalText + "<br>" + "Reversed Phrase:" + " " + palText + "<br>" + "Phrase Length:" + " " + textLength;
});