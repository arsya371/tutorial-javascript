/* ​‌‍‌⁡⁢⁣⁢IIFE (Immediately Invoked Function Expression)⁡​ */

// ⁡⁣⁢⁢IIFE⁡ ⁡⁣⁣⁢adalah function yang dipanggil langsung setelah dibuat. Ini berguna untuk mengisolasi variabel dan mencegahnya mengganggu kode lain.⁡

// Contoh Penerepan

(function () {
  console.log("IIFE dipanggil!");
})(); // Output: IIFE dipanggil!

const appConfig = (function () {
  const apiKey = "12345";
  const apiUrl = "https://example.com";

  return {
    getApiKey: function () {
      return apiKey;
    },
    getApiUrl: function () {
      return apiUrl;
    },
  };
})();

console.log(appConfig.getApiKey());
console.log(appConfig.getApiUrl());
