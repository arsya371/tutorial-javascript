/* ​‌‍‌⁡⁢⁣⁢Loop di JavaScript⁡​ */

// ⁡⁣⁢⁢Loop⁡ ⁡⁣⁣⁢digunakan untuk menjalankan blok kode berulang kali selama kondisi tertentu terpenuhi. JavaScript mendukung beberapa jenis loop: for, while, dan do-while. Setiap jenis loop memiliki kegunaannya sendiri, tergantung pada kebutuhan.⁡

// ⁡⁣⁣⁢For Loop⁡

/* 
    ⁡⁣⁢⁢for⁡ ⁡⁣⁢⁣(inisialisasi; kondisi; perubahan)⁡ ⁡⁣⁣⁢{⁡
        // ⁡⁢⁢⁢kode yang dijalankan selama kondisi benar⁡
    ⁡⁣⁣⁢}⁡
*/

for (let i = 1; i <= 5; i++) {
  console.log(`Iterasi ke ${i} dengan for loop`);
}

// ⁡⁣⁣⁢While Loop⁡

/*
    ⁡⁣⁢⁢while⁡ ⁡⁣⁢⁣(kondisi)⁡ ⁡⁣⁣⁢{⁡
        ⁡⁢⁢⁢// kode yang dijalankan selama kondisi benar⁡
    ⁡⁣⁣⁢}⁡
*/

let y = 1;
while (y <= 5) {
  console.log(`Iterasi ke ${y} dengan while loop`);
  y++;
}

// ⁡⁣⁣⁢Do-While Loop⁡
/* 
    ⁡⁣⁣⁢do⁡ ⁡⁣⁣⁢{⁡
       ⁡⁢⁢⁢ // kode yang dijalankan⁡
    ⁡⁣⁣⁢}⁡ ⁡⁣⁢⁣while (kondisi)⁡;
*/

let z = 1;
do {
  console.log(`Iterasi ke ${z} dengan do-while loop`);
  z++;
} while (z <= 5);

// For-In Loop
// const object = { nama: "John", umur: 30, kota: "New York" };

// for (let key in object) {
//   console.log(`${key}: ${object[key]}`);
// }

// For-Of Loop
let sum = 0;
const array = [10, 2, 3, 4, 5];

for (let nilai of array) {
  sum = sum + nilai;
}
console.log(sum);
