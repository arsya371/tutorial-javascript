/**
 * Tipe Data Primitive
 */

// String
const nama = "Jhon"
const negara = "Indonesia"
const domisili = "Jakarta"

// Number
const umur = 20.5

// Boolean
const isMarried = true

// Undefined
let x;

// Null
const person = null

// Symbol
const symbol1 = Symbol('description 1') // membuat symbol dengan deskripsi 'description 1'

// BigInt
const bigInt1 = 42342543543543343225535n 


/* Tipe data Reference */

// Object
const orang = {
    nama: "Jhon",
    umur: 26,
    isMarrried: true,
    negara: "Indonesia"

}

// Array
const hobby = ["Membaca", "Menulis", "Bersepeda"] // array of string 

// Function
function sayHello() { 
    return "Hello frontend developer"
}

const output = sayHello()

console.log(output, typeof output) // Output : Hello frontend developer 'string'
// https://github.com/rohan-paul/Awesome-JavaScript-Interviews/blob/master/Javascript/Tricky-JS-Problems/typeof-null-why-its-object.md

/* Perbedaan tipe data primitive dan reference */

// Tipe data primitive
let a = 10 // 'a' menyimpan nilai 10
let b = a //  'b' menyimpan nilai salinan dari 'a', b = 10

a = 20 // mengubah nilai 'a' menjadi 20
console.log(b) // Output : 10

// Tipe data reference

let obj1 = {
    nama: "Jhon",
    umur: 26,
}
let obj2 = obj1 // 'obj2' akan menyimpan referensi yang sama dengan 'obj1'

obj1.nama = "Budi" // mengubah properti 'nama' pada 'obj1'
console.log(obj2) // Output : { nama: 'Budi', umur: 26 }
// karena 'obj2' mereferensikan objek yang sama dengan 'obj1'

