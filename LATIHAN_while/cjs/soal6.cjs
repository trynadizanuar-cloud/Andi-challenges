const prompt = require("prompt-sync")();

let password;
let percobaan = 0;
let maxPercobaan = 3;
let berhasil = false;

while (percobaan < maxPercobaan && !berhasil) {
  password = prompt("Masukkan password:");

  if (password === "admin123") {
    berhasil = true;
    break;
  }
  percobaan++;
  console.log(`Password salah. Sisa percobaan:  ${maxPercobaan - percobaan}`);
}

if (berhasil) {
  console.log("Login berhasil!");
} else {
  console.log("Akses ditolak. Terlalu banyak percobaan gagal.");
}


// const prompt = require("prompt-sync")();
// let password;
// let percobaan = 0;
// let maxPercobaan = 3;
// let berhasil = false;
// // Tulis kode while loop di sini untuk validasi password
// while (percobaan < maxPercobaan && password != "admin123") {
//     password = prompt("Masukan Password :");

//     if (password === "admin123") {
//         berhasil = true;
//     } else {
//         console.log(`Password salah. Sisa percobaan: ${maxPercobaan - percobaan}`);
//     }
//     percobaan++;
// }
// if (berhasil) {
//     console.log("Login berhasil!");
// } else {
//     console.log("Akses ditolak. Terlalu banyak percobaan gagal.");
// }