/** Operator Ternary */

// condition ? exprIfTrue : exprIfFalse
let age = 17
let canDrive = age >= 18 ? 'yes' : 'no'
console.log(canDrive) // output: no

// // same as
// if (age >= 16) { 
//     canDrive = 'yes'
// } else {
//     canDrive = 'no' 
// }
// // console.log(canDrive) // yes

// // condition ? exprIfTrue : exprIfFalse
// let access = age < 18 ? 'denied' : 'granted'
// console.log(access) // denied

// // same as
// if (age < 18) {
//     access = 'denied'
// } else {
//     access = 'granted'
// }
// // console.log(access) // denied

// // nested ternary operator
// let message = age < 3 ? 'Hi, baby!' : 
//               age < 18 ? 'Hello!' :
//               age < 100 ? 'Greetings!' :
//               'What an unusual age!'
// // console.log(message)

// // same as
// if (age < 3) {
//     message = 'Hi, baby!'
// } else if (age < 18) {
//     message = 'Hello!'
// }
// else if (age < 100) {
//     message = 'Greetings!'
// }
// else {
//     message = 'What an unusual age!'
// }
// console.log(message)

