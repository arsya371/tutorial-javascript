/** Array di JavScript */

// Apa itu Array? Array adalah tipe data yang dapat menyimpan banyak nilai dalam satu variabel. Array digunakan untuk menyimpan daftar item dalam satu variabel tunggal.

// Membuat Array
// 1. Menggunakan notasi array literal
let fruits = ["Apple", "Banana", "Cherry"];
// console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]

// 2. Menggunakan new Array()
let num = new Array(1, 2, 3, 4, 5);
// console.log(num) // Output: [1, 2, 3, 4, 5]

// Mengakses elemen Array
// console.log(fruits[0]); // Output: Apple
// console.log(fruits[1]); // Output: Banana
// console.log(fruits[2]); // Output: Cherry

// Menambah atau mengubah elemen Array
fruits[1] = "Blueberry"; // Mengubah elemen kedua
// console.log(fruits); // Output: ["Apple", "Blueberry", "Cherry"]

fruits[3] = "Date"; // Menambah elemen keempat
// console.log(fruits); // Output: ["Apple", "Blueberry", "Cherry", "Date"]

fruits.push("Elderberry"); // Menambah elemen di akhir array
// console.log(fruits); // Output: ["Apple", "Blueberry", "Cherry", "Date", "Elderberry"]

fruits.unshift("Avocado"); // Menambah elemen di awal array
// console.log(fruits); // Output: ["Avocado", "Apple", "Blueberry", "Cherry", "Date", "Elderberry"]

// Manipulasi Array
let numbers = [1, 2, 3];
// numbers.push(4) // Menambah elemen di akhir array
// numbers.pop() // Menghapus elemen terakhir
// numbers.shift() // Menghapus elemen pertama
// numbers.unshift(1) // Menambah elemen di awal array
// console.log(numbers) // Output: [1, 2, 3]

let numbers2 = [4, 5];
let newNumber = numbers.concat(numbers2); // Menggabungkan dua array
console.log(newNumber);
newNumber.splice(2, 1, 10);
console.log(newNumber);
console.log(newNumber.indexOf(10));
console.log(newNumber.includes(5));
// console.log(newNumbers.slice(2, 4))

// Multidimensional Array (Array of Arrays)
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix[1][2]); // Output: 6
