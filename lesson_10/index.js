//task 1

function getRandom() {
    return Math.floor(Math.random() * (5 - 1 + 1) + 1);
}

function getTimeout() {
    return new Promise((res, rej) => {
        let random = getRandom();
        setTimeout(() => {
            console.log(random);
            res(random);
        }, random * 1000)
    })
}

let promiseFirst = getTimeout();
let promiseSecond = getTimeout();
let promiseThird = getTimeout();

Promise.all([promiseFirst, promiseSecond, promiseThird])
.then((data) => {
    let sum = data.reduce((acc, next) => {
        return acc + next;
    })
    console.log(sum);
    return sum;
})


//task 2

Promise.race([promiseFirst, promiseSecond, promiseThird])
.then((data) => {
    console.log(data);
});


//task 3

function getNum () {
    return new Promise((res, rej) => {
        let random = getRandom();
        setTimeout(() => {
            console.log(random);
            res(random);
        }, 3000)
    })
}

async function getRandomNumSqrt() {
    let result = await getNum();
    console.log(result * result);
    return result; 
}

getRandomNumSqrt();


//task 4

function getRandomNumFirst() {
    return Math.floor(Math.random() * (5 - 1 + 1) + 1);
}

function getNumFirst () {
    return new Promise((res, rej) => {
        let random = getRandomNumFirst();
        setTimeout(() => {
            console.log(random);
            res(random);
        }, 3000)
    })
}

function getRandomNumSecond() {
    return Math.floor(Math.random() * (10 - 6 + 1) + 6);
}

function getNumSecond () {
    return new Promise((res, rej) => {
        let random = getRandomNumSecond();
        setTimeout(() => {
            console.log(random);
            res(random);
        }, 5000)
    })
}

async function getRandomNumSqrtFirst() {
    let resultFirst = await getNumFirst();
    console.log(resultFirst); 
}

async function getRandomNumSqrtSecond() {
    let resultSecond = await getNumSecond();
    console.log(resultSecond); 
}

console.log(getRandomNumSqrtFirst() + getRandomNumSqrtSecond());