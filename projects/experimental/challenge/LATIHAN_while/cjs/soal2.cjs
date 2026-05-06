// const prompt = require("prompt-sync")();  // Pastikan prompt-sync dipanggil dengan benar

// let angkaRahasia = 7;
// let tebakan;
// let percobaan = 0;
// // Tulis kode while loop di sini untuk game tebak angka
//   while (tebakan !== angkaRahasia){
//     tebakan = parseInt(prompt("Tebak Angka :"));
//     percobaan++;

//     if (tebakan < angkaRahasia){
//       console.log ("Angka Terlalu Kecil, Coba Lagi");
//     } else if (tebakan > angkaRahasia){
//       console.log ("Angka Terlalu Besar, Coba Lagi");
//     }
//   }

// console.log("Selamat! Anda berhasil menebak dalam " + percobaan + " percobaan");

const prompt = require("prompt-sync")();

let angkaRahasia = 7;
let tebakan = 0;
let percobaan = 0;

while (tebakan !== angkaRahasia) {
    let inputUser = prompt("Masukan Angka :");
    tebakan = parseInt(inputUser);

    // Cek apakah input valid (angka)
    if (isNaN(tebakan)) {
        console.log("Input tidak valid! Masukkan angka.");
        continue; // langsung ke loop berikutnya tanpa menambah percobaan
    }

    percobaan++;

    if (tebakan > angkaRahasia) {
        console.log("Angka Lebih Besar! Coba Lagi.");
    } else if (tebakan < angkaRahasia) {
        console.log("Angka Lebih Kecil! Coba Lagi.");
    }
}

console.log("Selamat! Anda berhasil menebak dalam " + percobaan + " percobaan");













































// let valid = false;
// let pilihan = 0;

// // Loop hingga mendapatkan input yang valid
// while (!valid) {
//     console.clear();  // Membersihkan konsol untuk tampilan yang lebih bersih
//     console.log("=== MENU KALKULATOR ===");
//     console.log("1. Tambah");
//     console.log("2. Kurang");
//     console.log("3. Kali");
//     console.log("4. Keluar");
    
//     let input = prompt("Pilih menu (1-4):");

//     // Pastikan input bukan null (jika pengguna menekan Cancel pada prompt)
//     if (input === null) {
//         console.log("Input dibatalkan.");
//         break; // Keluar jika input dibatalkan
//     }

//     // Parsing input menjadi integer
//     let parsedInput = parseInt(input.trim(), 10);

//     // Validasi jika input adalah angka valid antara 1 dan 4
//     if (isNaN(parsedInput)) {
//         console.log("Masukan angka! (harus berupa bilangan bulat)");
//         continue; // Jika input bukan angka, lanjutkan ke iterasi berikutnya
//     }

//     if (parsedInput >= 1 && parsedInput <= 4) {
//         pilihan = parsedInput;

//         switch (pilihan) {
//             case 1:
//                 console.log("Anda memilih Tambah");
//                 break;
//             case 2:
//                 console.log("Anda memilih Kurang");
//                 break;
//             case 3:
//                 console.log("Anda memilih Kali");
//                 break;
//             case 4:
//                 console.log("Terima kasih telah menggunakan program!");
//                 valid = true;  // Mengakhiri loop jika memilih keluar
//                 break;
//             default:
//                 break;
//         }
//     } else {
//         console.log("Pilihan tidak valid, masukkan angka 1-4");
//     }
// }
