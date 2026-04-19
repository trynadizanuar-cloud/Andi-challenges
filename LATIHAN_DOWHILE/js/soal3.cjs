const prompt = require("prompt-sync")(); // Jika pakai Node.js

let password;
let valid = false;

do {
    // Minta user membuat password
    password = prompt("Buat password Anda: ");

    // Cek panjang minimal 6 karakter
    let panjangOk = password.length >= 6;

    // Cek ada angka
    let adaAngka = /\d/.test(password); // regex \d = digit

    if (panjangOk && adaAngka) {
        console.log("Password valid!");
        valid = true;
    } else {
        console.log("Password tidak valid! Harus minimal 6 karakter dan mengandung angka.");
    }

} while (valid == false); // ulangi selama password belum valid

console.log("Password berhasil dibuat: " + password);

// const prompt = require("prompt-sync")(); // Jika pakai Node.js

// let password;
// let valid = false;

// do {
//     // Minta user membuat password
//     password = prompt("Buat password Anda: ");

//     // Cek panjang minimal 6 karakter
//     let panjangOk = password.length >= 6;

//     // Cek ada angka
//     let adaAngka = /\d/.test(password); // regex \d = digit

//     if (panjangOk && adaAngka) {
//         console.log("Password valid!");
//         valid = true;
//     } else {
//         console.log("Password tidak valid! Harus minimal 6 karakter dan mengandung angka.");
//     }

// } while (!valid); // ulangi selama password belum valid

// console.log("Password berhasil dibuat: " + password);
