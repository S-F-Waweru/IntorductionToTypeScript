"use strict";
// Question 1
// In an array of 1-100 print fizz if multiple of 3  Buzz if a mutiple of 5
// and fizzBuzz if a multiple of both
console.log("Question 1 ==> Fizz Buzz");
for (let i = 1; i < 101; i++) {
    if (i % 3 == 0) {
        console.log(`${i} -- Fizz`);
    }
    else if (i % 5 == 0) {
        console.log(`${i} -- Buzz`);
    }
    else if (i % 3 == 0 && i % 5 == 0) {
        console.log(`${i} -- FizzBuzz`);
    }
    else {
        console.log(i);
    }
}
console.log("----------------------------------------------------------------------------------");
console.log("Question 2 ==> Fibonacci  Sequence");
//  takes in the nth number
function fibonacci(n) {
    let startNum = 1;
    let nextNum = 1;
    while (startNum < n) {
        console.log(startNum);
        // console.log()
        let temp = nextNum;
        nextNum = startNum + nextNum;
        startNum = nextNum;
    }
}
fibonacci(100);
console.log("----------------------------------------------------------------------------------");
console.log("Question 3 ==> Power of 2");
let input = prompt("Input an interger to test the power of 2");
let num1 = parseInt(input);
if (num1) {
    console.log(num1);
    powerOfTwo(num1);
}
function powerOfTwo(input) {
    let originalNum = input;
    let number = input;
    if (number == 1) {
        console.log(`${num1} => true`);
        return;
    }
    else if (number % 2 == 0) {
        number = number / 2;
        powerOfTwo(number);
    }
    else {
        console.log(`${num1} => false`);
    }
}
console.log("----------------------------------------------------------------------------------");
console.log("Question 4 ==> Capitaliz ewords");
let sentence = prompt("Question 4 : Enter a word or sentence. to capitalize first letter");
// let sentence = "hello Wolrd"
let sentenceArray = sentence.split(" ");
let newSentense = [];
for (let word of sentenceArray) {
    let wordArray = word.split("");
    wordArray[0] = wordArray[0].toLocaleUpperCase();
    let newWord = wordArray.join("");
    // console.log(newWord)
    newSentense.push(newWord);
}
console.log(newSentense.join(" "));
console.log("----------------------------------------------------------------------------------");
console.log("Question 5 ==> Reverse integer");
let inputReverse = prompt(" Quesetion 5 : Input an interger to reverse it");
let num = parseInt(inputReverse);
console.log("Original num is => " + num);
// let num = 95240
let newNum = num.toString().split("");
// console.log(newNum)
if (newNum[0] === "-") {
    newNum.shift();
    // console.log( newNum.shift())
    newNum.reverse();
    // console.log(newNum.reverse())
    newNum.unshift("-");
    console.log(newNum.join(""));
}
else {
    newNum.reverse().join();
    console.log(newNum);
}
console.log("----------------------------------------------------------------------------------");
console.log("Question 6 ==>  Vowel Count");
let wordie = prompt("Question 6 : Enter a word or sentence.To Count the number of vowels in it");
let vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
// let wordie= "hello word samuel francis waweru ndegwa"
let count = 0;
let wordArr = wordie.split("");
// console.log(wordArr)
for (let char of wordArr) {
    for (let vowel of vowels) {
        if (char === vowel) {
            count += 1;
        }
    }
}
console.log(`${wordie} ==> ${count}`);
