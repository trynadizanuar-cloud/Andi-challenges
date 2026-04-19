const prompt = require("prompt-sync")();
let angka;
let lanjut;
// Tulis kode do-while loop di sini

do {
    angka = parseInt(prompt("Masukan Angka : "));
    console.log(`kuadrat dari ${angka} adalah : ${angka * angka}`);
    lanjut = prompt("Apakah ingin melanjutkan? (y/n):");
} while (lanjut === "y");
console.log("Terima kasih telah menggunakan program!");



// versi rapih
// let angka;
// let lanjut;

// do {
//     angka = parseInt(prompt("Masukkan angka:"), 10); // Minta user memasukkan angka

//     if (isNaN(angka)) { // Cek, jika user memasukan huruf
//         console.log("Input harus angka!, Coba Lagi.");
//     } else { // Jika sudah sesuai, kuadratkan
//         console.log(`Kuadrat dari ${angka} adalah: ${angka * angka}`); // Tampilkan kuadrat 
//     }
//     // Tanyakan apakah ingin melanjutkan
//     lanjut = prompt("Apakah ingin melanjutkan? (y/n):");

// } while (lanjut.toLowerCase() === "y"); // untuk memastikan manakala user typo huruf kapital (Y/y)

// console.log("Terima kasih telah menggunakan program!");
