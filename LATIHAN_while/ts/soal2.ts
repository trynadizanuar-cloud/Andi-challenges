import prompt from "prompt-sync"
let angkaRahasia = 7;
let tebakan: number;
let percobaan = 0;
// Tulis kode while loop di sini untuk game tebak angka

while (tebakan !== angkaRahasia) {
    tebakan = parseInt(prompt("Tebak Angka :"))
    percobaan++;

    if (tebakan < angkaRahasia) {
        console.log("Terlalu Kecil! Coba Lagi,");
    } else if (tebakan > angkaRahasia) {
        console.log("Terlalu Besar! Coba lagi.");
    }
}
console.log("Selamat! Anda berhasil menebak dalam " + percobaan + " percobaan");

export { }

// Import prompt-sync dengan CommonJS style
// import pkg from "prompt-sync";
// const prompt = pkg(); // panggil factory function

// // Angka rahasia
// const angkaRahasia: number = 7;

// // Variabel untuk tebakan user dan jumlah percobaan
// let tebakan: number | undefined;
// let percobaan: number = 0;

// console.log("Selamat datang di game Tebak Angka!");
// console.log("Tebak angka antara 1 sampai 10.");

// // Loop sampai tebakan benar
// while (tebakan !== angkaRahasia) {
//     tebakan = parseInt(prompt("Tebak Angka: "));

//     percobaan++;

//     if (tebakan < angkaRahasia) {
//         console.log("Angka Terlalu Kecil, Coba Lagi.");
//     } else if (tebakan > angkaRahasia) {
//         console.log("Angka Terlalu Besar, Coba Lagi.");
//     }
// }

// // Tebakan benar
// console.log(`Selamat! Anda berhasil menebak dalam ${percobaan} percobaan.`);

export { }