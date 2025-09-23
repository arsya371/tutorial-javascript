/** Strings di JavaScript */

// 1. Membuat String
let singleQuote = 'Hello, world!'
let doubleQuote = "Hello, world!"
let backtick = `Hello, world!` 

// Mengakses karakter di dalam string
let str = 'JavaScript' // Index: 0123456789
// console.log(str[0]) // Output: 'J'

// Properti dan metode string
// console.log(str.length) // Output: 10 // Mengetahui panjang string
// console.log(str.toUpperCase()) // Output: 'JAVASCRIPT' // Mengubah menjadi huruf besar
// console.log(str.toLowerCase()) // Output 'javascript' // Mengubah menjadi huruf kecil

// let testTrim = '  JavaScript   '
// console.log(testTrim.trim()) // Output: 'JavaScript' // Menghapus spasi di awal dan akhir string
// console.log(testTrim.trimStart()) // Output: 'JavaScript   ' // Menghapus spasi di aawal string
// console.log(testTrim.trimEnd()) // Output: '  JavaScript' // Menghapus spasi di akhir string

// Manipulasi string

// Concat 
// let firstName = 'John'
// let lastName = 'Doe'
// let result = firstName + lastName
// // let result2 = firstName + ' ' + lastName // Menyisipkan spasi di antar nama depan dan belakang
// // console.log(result) // Output: 'JohnDoe' // Output Result2: 'John Doe'

// // Concat metode template literal
// let resultBactics = `${firstName} ${lastName}`
// console.log(resultBactics) // Output: 'John Doe'

// // Mengambil bagian dari string (slice, substring, substr)
// let text = "JavaScript"
// console.log(text.slice(0, 4)) // Output: 'Java' // Mengambil karakter dari index 0 sampai 4 (tidak termasuk index 4)
// console.log(text.substring(4)) // Output: 'Script' // Mengambil karakter dari index 4 sampai akhir string
// console.log(text.substr(4, 3)) // Output: 'Scr' // Mengambil 3 karakter dari index 4

// // Mengganti bagian dari string (replace)
// let replacement = 'Hello, world!'
// let newReplacement = replacement.replace('world', 'JavaScript') // Mengganti 'world' dengan 'JavaScript'
// console.log(newReplacement) // Output: 'Hello, Javascript!'

// const arr = ['test', 'array', 'di', 'string']
// // console.log(arr.join('-')) // Output: 'Saya suka JavaScript' // Menggabungkan elemen array menjadi string dengan spasai sebagai pemisah

// const testString = 'test-array-di-string' // String dengan pemisah '-'

// console.log(testString.split('-', 3))

// Pencarian di dalam string

// indexOf
let sentence = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat dolorum veniam, laborum ut ipsa et accusamus consectetur corrupti necessitatibus omnis?"
let index = sentence.indexOf("dolor") // Mencari index dari kata 'dolor'
console.log(index) // Output: 13
let lastIndex = sentence.lastIndexOf("dolor") // Mencari index terakhir dari kata 'dolor'
console.log(lastIndex) // Output: 66

let exists = sentence.includes("dolor") // Mengecek apakah kata 'dolor' ada di dalama string
console.log(exists) // Output: true