// let students = [{ name: 'Alexey', id: 123, marks: 9 },
// { name: 'Vitalik', id: 101, marks: 5 },
// { name: 'Tanya', id: 200, marks: 7 },
// { name: 'Sasha', id: 115, marks: 10 }
// ]

// let smartStudents = students.reduce((acc, {name, marks}) => {
//  if (marks < 8) acc.push(name);
//  return acc;
// }, []);

// let smartStudents = [];
// students.forEach(({ name, marks }) => {
//     if (marks < 8) smartStudents.push(name);
// });


// function showAverageMark(arr) {
//     let newArr = [];
//     arr.forEach(item => {
//         if (item.id > 120) newArr.push(item.marks)
//         return newArr;
//     })
//     let sum = 0;
//     newArr.forEach(item => sum += item / newArr.length);
//     return sum;
// }

// function showAverageMark(arr) {
//     let newArr = arr.reduce((acc, { id, marks }) => {
//         if (id > 120) acc.push(marks)
//         return acc;
//     }, [])
//     return newArr.reduce((acc, item) => acc + item, 0) / newArr.length;
// }



// let students = [
//     {name: 'Alexey', id: 123, marks : 9 },
//     {name: 'Vitalik', id: 101, marks : 5 },
//     {name: 'Tanya', id: 200, marks : 7 },
//     {name: 'Sasha', id: 115, marks : 10 },
//     {name: 'Kolya', id: 440, marks : 5 },
//     {name: 'Dima', id: 170, marks : 7 }
//     ]

// let smartStudents = studentsNew.reduce((acc, {name, id, marks}) => {
//     if (marks > 5 && id <= 200) acc.push(name);
//     return acc;
// }, [])
