/* ​‌‍‌⁡⁢⁣⁢𝗠𝗮𝘁𝗵 𝗢𝗯𝗷𝗲𝗰𝘁⁡​ */

// ⁡⁣⁣⁢Apa itu Math Object,⁡ ⁡⁣⁢⁢Math Object di JavaScript adalah objek bawaan yang berisi berbagai properti dan metode untuk melakukan operasi matematika. 

// ⁡⁣⁣⁢Properti Math⁡

// * Math.PI: Mengembalikan nilai π (3.14159...).
// * Math.E: Mengembalikan nilai konstanta Euler (2.718...).

console.log(Math.PI) // 3.141592653589793
console.log(Math.E) // 2.718281828459045


// ⁡⁣⁣⁢Metode Math⁡
console.log(Math.abs(-7)) // Mengembalikan nilai absolut dari sebuah angka
console.log(Math.pow(2,5)) // Mengembalikan hasil perpangkatan dari sebuah angka
console.log(Math.sqrt(16)) // Mengembalikan akar kuadrat dari sebuah angka
console.log(Math.cbrt(8)) // Mengembalikan akar kubik dari sebuah angka
console.log(Math.max(1,13,89,2,75)) // Mengembalikan nilai terbesar dari sekumpulan angka
console.log(Math.min(1,13,89,2,75)) // Mengembalikan nilai terkecil dari sekumpulan angka


// ⁡⁣⁣⁢Pembulatan Angka⁡
console.log(Math.round(3.6)) // Mengembalikan nilai yang dibulatkan ke angka terdekat
console.log(Math.ceil(4.0000001)) // Mengembalikan nilai yang dibulatkan ke atas
console.log(Math.floor(3.9)) // Mengembalikan nilai yang dibulatkan ke bawah
console.log(Math.trunc(4.99999)) // Mengembalikan nilai bilangan bulat dengan menghilangkan angka di belakang koma


// ⁡⁣⁣⁢Random Number⁡

console.log(Math.round(Math.random() * 100)) // Mengembalikan angka acak antara 0 hingga 100