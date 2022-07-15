// let student = {
//     name: "Tanya",
//     age: 31,
//     id: 1,
// }

// let studentArr = Object.entries(student);

// let studentMap = new Map(studentArr);

// studentMap.set("course", "Frontend");
// studentMap.set("isSuccesfull", false);

// console.log(studentMap.get("name"));

// function showMapInfo (collection) {
// for (let keys of collection.keys()) {
//     console.log(keys);
// }
// for (let values of collection.values()) {
//     console.log(values);
// }
// for (let entries of collection.entries()) {
//     console.log(entries);
// }
// }
// showMapInfo(studentMap);


// let amount = {
//     apple: 440,
//     burger: 316,
//     juice: 1120,
// }

// let amountDivided = Object.fromEntries(
//     Object.entries(amount).map(([key, value]) => {
//         return [key, value / 2];
//     })
// )

// let sumAmountDivided = 0;
// for (let value of Object.values(amountDivided)) {
//     sumAmountDivided += value;
// }



// function getUnique(...arg) {
//   let uniqueArr = new Set (arg)
//   return uniqueArr;
// }



// const weather = {
//     "coord": {
//         "lon": -122.08,
//         "lat": 37.39
//     },
//     "weather": [
//         {
//             "id": 800,
//             "main": "Clear",
//             "description": "clear sky",
//             "icon": "01d"
//         }
//     ],
//     "base": "stations",
//     "main": {
//         "temp": 282.55,
//         "feels_like": 281.86,
//         "temp_min": 280.37,
//         "temp_max": 284.26,
//         "pressure": 1023,
//         "humidity": 100
//     },
//     "visibility": 10000,
//     "wind": {
//         "speed": 1.5,
//         "deg": 350
//     },
//     "clouds": {
//         "all": 1
//     },
//     "dt": 1560350645,
//     "sys": {
//         "type": 1,
//         "id": 5122,
//         "message": 0.0139,
//         "country": "US",
//         "sunrise": 1560343627,
//         "sunset": 1560396563
//     },
//     "timezone": -25200,
//     "id": 420006353,
//     "name": "Mountain View",
//     "cod": 200
// }

// const weatherCopy = JSON.parse(JSON.stringify(weather));


// const time = 1654420481877;
// let date = new Date(time);
// console.log(date);

// let year = date.getFullYear();
// let month = (date.getMonth() + 1)
// let day = date.getDate();
// let minutes = date.getMinutes();
// let seconds = date.getSeconds();
// let fullDate = `${year}/${month < 9 ? ("0" + month) : month}/${day < 9 ? ("0" + day) : day} (${minutes}:${seconds})`;
// console.log(fullDate);