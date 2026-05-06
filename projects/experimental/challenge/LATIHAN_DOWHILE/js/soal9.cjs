const prompt = require("prompt-sync")();

let tahapInstalasi = ["Download file", "Extract file", "Install program", "Setup konfigurasi"];
let berhasil = false;
let percobaan = 0;

do {
    percobaan++;
    console.log(`=== PERCOBAAN INSTALASI ${percobaan} ===`);

    let sukses = true; // anggap berhasil dulu

    // Menggunakan forEach untuk mencetak status setiap tahap instalasi
    tahapInstalasi.forEach(item => {
        // Simulasi gagal/berhasil (80% berhasil)
        const berhasilTahap = Math.random() > 0.2;  // 80% chance berhasil

        if (berhasilTahap) {
            console.log(`${item}... selesai`);
        } else {
            console.log(`${item}... GAGAL!`);
            sukses = false;  // Gagal jika ada satu tahap yang gagal
        }
    });

    if (sukses) {
        console.log(`\nInstalasi berhasil dalam ${percobaan} percobaan!`);
        berhasil = true;  // Tandai instalasi berhasil
    } else {
        // Jika gagal, tanya apakah mau mencoba lagi
        let cobaLagi = prompt("Instalasi gagal! Coba lagi? (y/n): ");
        if (cobaLagi.toLowerCase() !== "y") {
            console.log(`\nInstalasi dibatalkan setelah ${percobaan} percobaan.`);
            break;  // Hentikan loop jika tidak mau mencoba lagi
        }
    }
} while (!berhasil);  // Loop akan terus berjalan sampai berhasil


// anggap berhasil dulu
// Menggunakan forEach untuk mencetak status setiap tahap instalasi
// Simulasi gagal/berhasil (80% berhasil)
// 80% chance berhasil
// Gagal jika ada satu tahap yang gagal
// Tandai instalasi berhasil
// Jika gagal, tanya apakah mau mencoba lagi
// Hentikan loop jika tidak mau mencoba lagi
// Loop akan terus berjalan sampai berhasil



