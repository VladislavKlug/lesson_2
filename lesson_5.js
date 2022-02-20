//first task

let gamerFirstSum = 0;
let gamerSecondSum = 0;

for(let i = 0; i < 3; i++) {
    gamerFirstSum += Math.floor(Math.random() * (6 - 1 + 1) + 1);
    gamerSecondSum += Math.floor(Math.random() * (6 - 1 + 1) + 1);
    console.log(`First gamer score is ${gamerFirstSum}`);
    console.log(`Second gamer score is ${gamerSecondSum}`);
}


//second task

let result = 0;

for(let year = 2000; year < new Date().getFullYear(); year++) {
    for(let month = 0; month < 12; month++) {
        let date = new Date(year, month, 13);
        if(date.getDay() === 5) {
            result++;
        } 
    }
}

console.log(result);


//third task

let number = 10;
let a = number;
let parts = 7;
let partsArray =[];
let randSumm = 0;
for (let i = 1; i < parts; i++) {
    let rand = Number((Math.random() * a).toFixed(2));
    partsArray.push(rand);
    randSumm += rand;
    a = a - rand;
}
partsArray.push(Number((number - randSumm).toFixed(2)));

console.log(partsArray);

//lesson_5