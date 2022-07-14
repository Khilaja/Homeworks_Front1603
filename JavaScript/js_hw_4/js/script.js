let mozartPrompt = prompt("Type Mozart here :)");

function isMozartHere(str) {
    if (str.trim().toLowerCase().includes("mozart")) {
        console.log("true");
    } else console.log("faaaalse :(");
}

isMozartHere(mozartPrompt);


// let testString = prompt("Тестовый текст, напиши что-нибудь с маленькой буквы о.о");
// function showUppercaseFirstLetter(str) {
//    console.log(str[0].toUpperCase() + str.slice(1));
// }
// showUppercaseFirstLetter(testString);


// let teamA = [];
// let teamH = [];
// let harryPotterTeam = ["Albus", "Hermione", "Ronald", "Draco", "Neville"];
// harryPotterTeam.forEach(item => {
//    if (item.toLowerCase().includes("a")) {teamA.push(item)};
//    if (item.toLowerCase().includes("h")) {teamH.push(item)};
// })


// let arrSum = 0;
// let arrProduct = 1;
// let arr = [6, 3, "ten", 1, true, "4"];
// arr.forEach(item => {
//    if (typeof(item) == "number") {
//        arrSum += item;
//        arrProduct *= item;
//    }
// })


// let numArr = [1, 3, 5, 7, 9, 11];
// let squareNumArr = numArr.map(item => item **2);

// function square(arr) {
//   return arr.map((item) => item ** 2);
// }
// let squareNumArr = square(numArr);


// let strBooksNames = "Роман «1984» наряду с такими произведениями, как «Мы» Евгения Замятина (1920), «О дивный новый мир» Олдоса Хаксли (1932)» и «451 градус по Фаренгейту» Рэя Брэдбери (1953) считается одним из образцов антиутопии.";
// let booksNamesToArr = strBooksNames.split(' ');
// let fahrenheitBookArr = [];
// booksNamesToArr.forEach(item => {
//     if (item == "«451" || item.toLowerCase() == "градус" || item.toLowerCase() == "по" || item.toLowerCase() == "фаренгейту»"){
//         fahrenheitBookArr.push(item);
//     }
// })
// let strFahrenheitBook = fahrenheitBookArr.join(" ");


// let fahrenheitBookArr = booksNamesToArr.map(item => {
//     if (item == "«451" || item.toLowerCase() == "градус" || item.toLowerCase() == "по" || item.toLowerCase() == "фаренгейту»") {
//     return item;
//     }
// })
// let strFahrenheitBook = fahrenheitBookArr.join(" ");


// let students = [ {name: 'Alexey', id: 123, marks : 9 }, 
// {name: 'Vitalik', id: 101, marks : 5 }, 
// {name: 'Tanya', id: 200, marks : 7 }, 
// {name: 'Sasha', id: 115, marks : 10 }
// ]

// let idFound = students.filter(item => item.id === 101);


// let students = [ {name: 'Alexey', id: 123, marks : 9 }, 
// {name: ' Vitalik', id: 101, marks : 5 }, 
// {name: 'Tanya ', id: 200, marks : 7 }, 
// {name: 'Sasha', id: 115, marks : 10 }
// ]

// let smartStudents = [];
// students.forEach(item => {
// if (item.marks > 7) smartStudents.push(item);
// });

// let studentsNamesLowerCase = students.map(item => item.name.trim().toLowerCase());


// let javaScriptTypes = ["number", "null", "undefined", "string"];
// javaScriptTypes.push("boolean", "BigInt", "object", "symbol");
// javaScriptTypes.splice(3, 0, "boolean", "BigInt", "object", "symbol");
// let allJavaScriptTypes = javaScriptTypes.concat(["boolean", "BigInt", "object", "symbol"]);


// let salary = [1000, 500, 1200, 230];
// function sortSalary(arr) {
// if (typeof arr == "object") {
//   console.log("Это массив о.о");
//   let newArr = arr.slice();
//   newArr.sort((a,b) =>  a - b);
//   newArr.reverse();
//   return newArr;
//  }
// }
// sortSalary(salary);


// let serials = ["How i met your mom", "Friends", "Big bang theory"];
// let strSerials = serials.join(', ');
