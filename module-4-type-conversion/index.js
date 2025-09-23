// Implicit conversion

// let result = "5" + 10 
let result = "5" - 10 

// Falsey value: 0, null, undefined, NaN, ""
let bool = !0

// Explicit conversion
let num = 100

let string = num.toString() // "100"

let string2 = "200.88"
// let num2 = parseInt(string2) // 200
let num2 = parseFloat(string2) // 200.88

let bool2 = Boolean(0) // false
let bool3 = Boolean(1) // true
let bool4 = Boolean("hello") // true
let bool5 = Boolean("") //false
console.log(bool2, typeof bool2)