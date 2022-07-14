let a = 4, b = 0;

let c = ++a;
let d = b++;
// a = 5, b = 1, c = 5, d = 0
console.log(`а = ${a}, b = ${b}, c = ${c}, d = ${d}`);


let e = 3;
let f = 2;
let x = 1 + (e += 2);
let у = 1 + (f *= 2);
// e = 5, f = 4, x = 6, y = 5
console.log(`e = ${e}, f = ${f}, x = ${x}, y = ${у}`);

let footbalChemp = +prompt("Введите год, чтобы я назвал английского чемпиона по футболу о.о");

// if (footbalChemp < 2011 && footbalChemp > 0) {
//     console.log("Статистика еще не велась");
// } else if (footbalChemp > 2022) {
//     console.log("Все лучшее впереди!");
// } else if (footbalChemp === 2015 || footbalChemp === 2017) {
//     console.log("Челси");
// } else if (footbalChemp === 2012 || footbalChemp === 2014 || footbalChemp === 2018 || footbalChemp === 2019) {
//     console.log("Манчестер Сити");
// } else if (footbalChemp === 2011 || footbalChemp === 2013) {
//     console.log("Манчестер Юнайтед");
// } else if (footbalChemp === 2020) {
//     console.log("Ливерпуль");
// } else if (footbalChemp === 2016) {
//     console.log("Лестер Сити");
// } else if (footbalChemp === 2022) {
//     console.log("Сезон еще идет");
// } else console.log("Обновите страницу и введите год(");


footbalChemp < 2011 && footbalChemp > 0 ? console.log("Статистика еще не велась") :
    footbalChemp > 2022 ? console.log("Все лучшее впереди!") :
        footbalChemp === 2015 || footbalChemp === 2017 ? console.log("Челси") :
            footbalChemp === 2012 || footbalChemp === 2014 || footbalChemp === 2018 || footbalChemp === 2019 ? console.log("Манчестер Сити") :
                footbalChemp === 2011 || footbalChemp === 2013 ? console.log("Манчестер Юнайтед") :
                    footbalChemp === 2020 ? console.log("Ливерпуль") :
                        footbalChemp === 2016 ? console.log("Лестер Сити") :
                            footbalChemp === 2022 ? console.log("Сезон еще идет") : console.log("Обновите страницу и введите год(");


// switch (footbalChemp) {
//     case footbalChemp < 2011:
//         console.log("Статистика еще не велась");
//     case footbalChemp > 2022:
//         console.log("Все лучшее впереди!");
//     case 2015:
//     case 2017:
//         console.log("Челси");
//     case 2012:
//     case 2014:
//     case 2018:
//     case 2019:
//         console.log("Манчестер Сити");
//     case 2011:
//     case 2013:
//         console.log("Манчестер Юнайтед");
//     case 2020:
//         console.log("Ливерпуль");
//     case 2016:
//         console.log("Лестер Сити");
//     case 2022:
//         console.log("Сезон еще идет");
//     default:
//         console.log("Обновите страницу и введите год(");
// }



let userLogin = prompt("Введите свой логин");
let userPassword;

if (userLogin === "Админ") {
    userPassword = prompt("Введите пароль");
    userPassword === "Я главный" ? console.log("Здравствуйте!") :
        (userPassword) ? console.log("Неверный пароль") : console.log("Отменено");
} else if (userLogin) {
    console.log("Я вас не знаю");
} else if (!userLogin) {
    console.log("Отменено");
}

let i;
for (i = 0; i <= 15; i++) {
    if (i % 2 === 1) console.log(i);
    if (i === 12) break;
}
console.log(`${i}. Цикл прерван`);


let j = 0;
while (j < 5) {
    j++;
    console.log(`number ${j}!`);
}

function max(a, b) {
    a > b ? console.log(a) : console.log(b);
}


function pow(x, n) {
    n > 0 ? console.log(x**n) : console.log(`${n} должно быть больше нуля :(`);
}
