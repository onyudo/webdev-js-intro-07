"use strict";

const submissionBtn = document.getElementById("submission-btn");
const remainderElement = document.getElementById("remainder");
const checkIfEvenElement = document.getElementById("check-if-even");
const lostNumbersElement = document.getElementById("lost-numbers");

const lostNumbers = [4, 8, 15, 16, 23, 42];

function returnTheRemainder(num1, num2) {
    return num1 % num2;
}

function checkIfEven(num) {
    return num % 2 === 0;
}





function render() {
    let remainder = returnTheRemainder(5, 4);
    remainderElement.innerText = remainder; // Display the remainder

    let checkEven = checkIfEven(47);
    checkIfEvenElement.innerText = checkEven;


    
}

submissionBtn.addEventListener("click", function () {
    render();
});