/**
 * ​‌‍‌⁡⁢⁣⁢Object di JavaScript⁡​
 *
 * @format
 */

// ⁡⁣⁢⁢Pengertian Object,⁡ ⁡⁣⁣⁢Object di JavaScript adalah tipe data yang digunakan untuk menyimpan koleksi data dan entitas yang lebih kompleks. Sebuah object adalah pasangan antara key dan value (disebut juga properti).⁡

// ⁡⁣⁣⁢Membuat Object⁡
// ⁡⁣⁣⁢1. Object Literal⁡
let mobil = {
  merk: "Toyota",
  model: "Camry",
  tahun: 2022,
};
console.log(mobil);

// ⁡⁣⁣⁢2. Menggunakan Constructor new Object()⁡:
let buku = new Object();
buku.judul = "Harry Potter";
buku.penulis = "J.K. Rowling";
// console.log(buku)

let mahasiswa = {
  nama: "John",
  umur: 21,
  jurusan: "Teknik Informatika",
};

// ⁡⁣⁣⁢Mengakses Properti Object⁡
// ⁡⁣⁣⁢1. Menggunakan Notasi Titik (Dot Notation):⁡
console.log(mahasiswa.nama);

// ⁡⁣⁣⁢2. Menggunakan Notasi Kurung (Bracket Notation):⁡
console.log(mahasiswa["jurusan"]);

//⁡⁣⁣⁢ Menambah dan Mengubah Properti
//⁡⁣⁣⁢ 1. Menambah Properti:⁡
mahasiswa.alamat = "Jl. Contoh No. 123";
console.log(mahasiswa);

// ⁡⁣⁣⁢2. Mengubah Properti:⁡
mahasiswa.nama = "Jane";
console.log(mahasiswa);

// ⁡⁣⁣⁢Menghapus Properti⁡
delete mahasiswa.alamat;
console.log(mahasiswa);

// ⁡⁣⁣⁢Nested Object⁡
let universitas = {
  nama: "ITB",
  fakultas: {
    nama: "Teknik Fisika Industri",
    jurusan: "Teknik Fisika",
  },
};
console.log(universitas);
// ⁡⁣⁣⁢Destructuring Object⁡
let { nama, umur } = mahasiswa;
console.log(nama);
