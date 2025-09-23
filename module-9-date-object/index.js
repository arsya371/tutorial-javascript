/** 
    Date Object di JavaScript 

*/

// Apa itu Date Object? Date Object adalah sebuah objek bawaan di JavaScript yang digunakan untuk bekerja dengan tanggal dan waktu. Dengan Date Object, kita dapat membuat, memanipulasi, dan mengambil informasi tentang tanggal dan waktu.

// Membuat Date Object
// Tanggal dan aktu saat ini
let now = new Date()
// console.log(now)

// Menggunakan string
let spesificDate = new Date("Sept 23, 2025 07:50:00")
// console.log(spesificDate)

// Menggunakan parameter (tahun, bulan, hari, jam, menit, detik, milidetik)
let customDate = new Date(2024, 7, 20, 10, 30)
// console.log(customDate)

// Bulan ke-8 (Sept, karena bulan dimulai dari 0)


// Mengambil informasi tanggal dan waktu
let today = new Date()
// console.log(today.getFullYear())
// console.log(today.getMonth())
// console.log(today.getDate())
// console.log(today.getDay())
// console.log(today.getHours())
// console.log(today.getMinutes())
// console.log(today.getSeconds())


let date = new Date()
// Mengatur tahun menjadi 2026
date.setFullYear(2026)
// console.log(date)

// Mengatur bulan menjadi Januari (0, karena bulan dimulai dari 0)
date.setMonth(11)
// console.log(date)

// Mengatur hari mnejadi 25
date.setDate(29)
// console.log(date)

// Perhitungan waktu dengan Date Object
let startDate = new Date(2024, 7, 20, 10, 30) // 20 Agustus 2024, 10:30
let endDate = new Date(2024, 8, 3, 10, 30) // 3 September 2024, 10:30
let diff = endDate - startDate // selisih dalam milidetik
console.log(diff) // 1209600000 milidetik

let diffIndays = diff / (1000 * 3600 * 24) // konversi ke hari
console.log(diffIndays) // 14 hari
