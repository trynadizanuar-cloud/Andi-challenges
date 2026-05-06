const prompt = require("prompt-sync")();

let tambahBilas;
let siklusSelesai = 0;

do {
    siklusSelesai++;
    console.log(`
\n=== SIKLUS PENCUCIAN ${siklusSelesai} ===
Mengisi air... selesai
Mencuci... selesai
Membilas... selesai
Mengeringkan... selesai
`);

    tambahBilas = prompt("Tambah siklus pembilasan? (y/n): ").toLowerCase();
} while (tambahBilas === "y");

console.log(`Mesin cuci selesai! Total siklus: ${siklusSelesai}`);


// versi dzikri
// const prompt = require("prompt-sync")();
// let tahap = ["Mengisi air", "Mencuci", "Membilas", "Mengeringkan"];
// let tambahBilas;
// let siklusSelesai = 0;
// // Tulis kode do-while loop di sini untuk simulasi mesin cuci

// do {
//     siklusSelesai += 1;
//     console.log(`=== SIKLUS PENCUCIAN ${siklusSelesai} ===`);
//     tahap.forEach(item => {
//         console.log(`${item}... selesai`);
//     })

//     tambahBilas = prompt("Tambah siklus pembilasan? (y/n):");

// } while (tambahBilas == "y");
// console.log("Mesin cuci selesai! Total siklus: " + siklusSelesai);