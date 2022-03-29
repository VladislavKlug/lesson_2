"use strict";
//first task
function reverseArray(arr) {
    let reverseArray = arr.reverse(), number, [];
    console.log(reverseArray);
    return reverseArray;
}
let arrayNumber = [1, 2, 3, 4, 5, 6];
reverseArray(arrayNumber);
number[];
//second task
function maxNumderInArray(arr) {
    let max = Math.max(...arr, number);
    console.log(max);
    return max;
}
let array = [1, 2, 56, 45, 78, 100, 178, 45, 34, 29];
maxNumderInArray(array, number[]);
//third task
return number <= 1 ? number : fiban(number - 1) + fiban(number - 2);
function fiban(number, arrLength) {
}
console.log(fiban(10));
//fourth task
let qual = 0;
function qualAndCount(firstNumber, secondNumber) {
    let count = 0;
    for (let i = 0; i < firstNumber.lenght; i++) {
        if (firstNumber[i] === secondNumber[i]) {
            count++;
        }
        for (let j = 0; j < secondNumber.length; j++) {
            if (firstNumber[i] === secondNumber[j]) {
                qual++;
            }
        }
    }
    console.log(qual, count);
}
qualAndCount('3487', '3794');
//fifth task
let arrayDescending = [13, 22, 11, 0, 8];
arrayDescending.sort((a, b) => b - a);
number;
console.log(arrayDescending);
let arrayAscending = [13, 22, 11, 0, 8];
arrayAscending.sort(function (a, b) {
    return a - b;
});
console.log(arrayAscending);
//sixth task 
function arrayUnique(arr) {
    return arr.filter((element, index, array) => array.indexOf(element) == index);
}
console.info(arrayUnique([1, 2, 3, 1, 2, 33, 33, 55, 66], number), number);
