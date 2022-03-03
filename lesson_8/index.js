//first task

function getNumberOfCall() {
    let count = 1;
    function getCount() {
        console.log(count);
        return count++;
    }
    return getCount;
}

let number = getNumberOfCall();
number()
number()
number()


//second task

function getArray() {
    let array = [];
    return function addRandomNumber() {
        let random = Math.floor(Math.random() * (100 - 1 + 1) + 1);
        if(!array.includes(random)) {
            array.push(random);
        }
        if(array.length < 100) {
            addRandomNumber();
        }
        return array;
    }
} 

let num = getArray();
console.log(num());


//third task

let arr = [1, -2, 3, 0, 4, -5, 6, -11];

console.log(arr.filter(elem => elem >= 0));

let arrayPositiv = arr.filter(elem => elem >= 0);
let result = arrayPositiv.map(function(item) {
    return Math.sqrt(item);
});

console.log(result);


//fourth task

let array = [12, 35, 90, 32, 44, 9, 4, 15]
function inputNumbers(arr) {
    console.log(arr[0]);
    arr.shift();
    if(arr.length > 0) {
        inputNumbers(arr);
    }
}

inputNumbers(array);


//fives task

function add(number) {
    let sum = number.toString().split('').reduce((acc, next) => {
        return +acc + +next;
    });
    if(sum > 9) {
        return add(sum);
    }
    return sum;
}

console.log(add(4354523));