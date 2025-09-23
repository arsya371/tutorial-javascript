/* ​‌‍‌⁡⁢⁣⁢Numbers di Javascript⁡​ */
/* ⁡⁣⁢⁢Di JavaScript, tipe data Number digunakan untuk merepresentasikan angka.
Angka ini bisa berupa bilangan bulat (integer), pecahan (floating point), atau bilangan khusus seperti Infinity dan NaN (Not-a-Number).⁡ */

// ⁡⁣⁣⁢contoh penggunaan numbers⁡
let bilanganBulat = 26 
let bilanganPecahan = 27.5
let bilanganNegatiif = -8
let infinityValue = Infinity
let notANumber = NaN
console.log(notANumber)

// ⁡⁣⁣⁢JavaScript menyediakan beberapa properti pada objek Number yang berguna:⁡

// ⁡⁣⁣⁢1. Number.MAX_VALUE⁡
console.log(Number.MAX_VALUE) // Nilai maksimum yang dapat direpresentasikan dalam JavaScript

// ⁡⁣⁣⁢2. Number.MIN_VALUE⁡
console.log(Number.MIN_VALUE) // Nilai minumum yang dapat direpresentasikan dalam JavaScript

// ⁡⁣⁣⁢3. Number.POSITIVE_INFINITY⁡
console.log(Number.POSITIVE_INFINITY) // Nilai positif tak terhingga

// ⁡⁣⁣⁢4. Number.NEGATIVE_INFINITY⁡
console.log(Number.NEGATIVE_INFINITY) // Nilai negatif tak terhingga

// ⁡⁣⁣⁢5. Number.NaN⁡
console.log("abc"/0) // Output: NaN, Hasil dari operasi matematika ynag tidak valid

// ⁡⁣⁣⁢Metode Bawaan Number⁡

// ⁡⁣⁣⁢1. toString(), Mengubah Angka menjadi string⁡
let num = 732.9 
let str = num.toString() // Mengubah angka menjadi string
console.log(str, typeof str) // Output: '732.9', 'string'

// ⁡⁣⁣⁢2. toFixed(digits), Mengubah angka menjadi string dengan jumlah digit desimal yang ditentukan.⁡
let floating = 3.1234567 // Angka dengan banyak digit desimal
console.log(floating.toFixed(2), typeof floating.toFixed(2)) // Output: '3.12', Membulatkan menjadi 2 digit desimal

// ⁡⁣⁣⁢3. toPrecision(digits), Mengubah angka menjadi string dengan panjang total yang ditentukan.⁡
let float = 3.142890
console.log(float.toPrecision(2)) // Output '3.1', Membulatkan menjadi 2 digit total

// ⁡⁣⁣⁢4. parseInt() dan parseFloat(), Mengubah string menjadi angka integer atau floating point.⁡
let str2 = "123.8"
let int = parseInt(str2) // Mengubah string menjadi angka integer
let float2 = parseFloat("123.45") // Mengubah string menjadi angka floating point
console.log(float2)
console.log(int)