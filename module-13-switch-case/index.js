/**
 * ​‌‍‌ ⁡⁢⁣⁢Switch-Case di JavaScript​⁡
 *
 * @format
 */

// ⁡⁣⁢⁢Switch-case⁡ ⁡⁣⁣⁢adalah pernyataan kondisional di JavaScript yang digunakan untuk membandingkan sebuah ekspresi dengan beberapa kemungkinan nilai dan mengeksekusi blok kode tertentu berdasarkan kecocokan nilai tersebut. Switch-case sering digunakan sebagai alternatif dari beberapa pernyataan if-else yang berturut-turut ketika kita ingin mengevaluasi sebuah variabel terhadap banyak kemungkinan nilai.⁡

/*
    ⁡⁣⁢⁢switch⁡ ⁡⁣⁢⁣(ekspresi)⁡ ⁡⁣⁢⁣{⁡
        ⁡⁣⁢⁢case⁡ ⁡⁢⁣⁢nilai1⁡:
            ⁡⁢⁢⁢// Kode yang dijalankan jika ekspresi === nilai1⁡
            ⁡⁣⁢⁢break;⁡
        ⁡⁣⁢⁢case⁡ ⁡⁢⁣⁢nilai2⁡:
            ⁡⁢⁢⁢// Kode yang dijalankan jika ekspresi === nilai2⁡
          ⁡⁣⁢⁢  break;⁡
        ⁡⁣⁣⁢// Tambahkan lebih banyak case sesuai kebutuhan⁡
      ⁡⁣⁢⁢  ⁡⁢⁣⁢default⁡:⁡⁡
            ⁡⁢⁢⁢// Kode yang dijalankan jika tidak ada case yang cocok⁡
    ⁡⁣⁢⁣}⁡
*/

// ⁡⁣⁢⁢Eksekusi Tanpa Break:⁡ ⁡⁣⁣⁢Jika kamu tidak menempatkan break setelah setiap case, maka semua case di bawahnya akan dijalankan (⁡⁢⁣⁢fall-through⁡⁣⁣⁢) hingga menemukan break atau akhir dari switch-case.⁡

// ⁡⁣⁢⁢Switch-Case dengan Ekspresi atau Operasi⁡

/*  ⁡⁣⁣⁢Kelebihan:⁡
      ⁡⁢⁢⁢Lebih mudah dibaca dibandingkan dengan rantai if-else panjang.
      Cocok digunakan saat ada banyak kemungkinan nilai yang harus diperiksa.⁡

   ⁡⁣⁣⁢ Kekurangan:⁡
     ⁡⁢⁢⁢ Kurang fleksibel dibandingkan if-else saat membandingkan dengan kondisi kompleks.
      Rentan terhadap kesalahan jika ⁡⁢⁣⁢break⁡ terlewat.⁡
*/
