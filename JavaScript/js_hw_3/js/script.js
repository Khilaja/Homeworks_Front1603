function howManyDays(month) {
    let days;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            days = 31;
            break;

        case 4:
        case 6:
        case 9:
        case 11:
            days = 30;
            break;

        case 2:
            days = 28;
            break;
    }
    return days;
}


function calcIfEven(a, b) {
    let result = a *= b;
    result % 2 === 0 ? console.log(`${result} - четное`) : console.log(`${result} - нечетное`);
}

// let calcResultIfEven = (a, b) => (a *= b) % 2 === 0 ? console.log(`четное`) : console.log(`нечетное`);


let learner = {
    name : "Таня",
    surname : "Иваненко",
    age : 31,
    class : "frontend",
    levelOfEnglish : "B2"
}

delete learner.levelOfEnglish;


let book = {
    numberOfPages : 545,
    cover  : true,
    isTheAuthorAlive  : false, 
    isBestseller  : true,
    booksEditions  : 20000000,
}

for (let key in book) {
    if (typeof book[key] === "boolean"){
        console.log(key);
    }
};


let train = {
    locomotiveLength : 25,
    totalCoachCars: 4,
    coachLength : 15,
}

let calcTrainLength = (a, b, c) => a + b * c;

console.log( calcTrainLength(train.locomotiveLength, train.totalCoachCars, train.coachLength));


let myFavCar = {
    model: "Chrysler",
    color: "black",
    doorsNumber: 5,
    horsepower: 253,
    engineCapacity: 3.5,
    transmission: "automatic",
}


let anotherFavCar = {}; 

for (let key in myFavCar) {
    anotherFavCar[key] = myFavCar[key];
}

let oneMoreFavCar = {};

Object.assign(oneMoreFavCar, myFavCar);


let animalObj = {
    name: "cat",
    legs: 4,
    color: "black"
}

function animal(obj) {  
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs`;
} 


function calcResultIfEven(a, b, even, odd) {
    (a * b) % 2 === 0 ? even() : odd();
}

function resultEven(){
    console.log("У нас тут четное число");
}

function resultOdd(){
    console.log("У нас тут нечетное число");
}


let student = {
    name: "Вася",
    surname: "Пупкин",
    groupNumber: "16_03",
    introduction() {
        console.log(`Это студент ${this.name} ${this.surname} из группы ${this.groupNumber}.`);
    },
};

student.introduction();


function Animal(legs, predator, name) {
    this.kingdom = "animal";
    this.legsNumber = legs;
    this.isPredator = predator;
    this.name = name;
}

let myAnimal = new Animal(4, true, "cat");

console.log(myAnimal);