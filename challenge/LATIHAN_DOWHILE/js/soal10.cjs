const prompt = require("prompt-sync")();

let antrian = ["Budi", "Sari", "Andi"];
let nasabahDilayani = 0;
let adaNasabahBaru;

do {
    // Layanin semua nasabah yang ada di antrian
    while (antrian.length > 0) {
        let nasabah = antrian.shift(); // ambil nasabah paling depan
        nasabahDilayani++;
        console.log(`Melayani nasabah: ${nasabah}`);
        if (antrian.length > 0) {
            console.log(`Sisa antrian: ${antrian.length} orang`);
        } else {
            console.log("Antrian kosong.");
        }
    }

    // Tanyakan apakah ada nasabah baru
    adaNasabahBaru = prompt("Ada nasabah baru yang datang? (y/n): ").toLowerCase();
    if (adaNasabahBaru === "y") {
        let namaBaru = prompt("Nasabah baru: ");
        antrian.push(namaBaru);
    }

} while (antrian.length > 0 || adaNasabahBaru === "y");

console.log(`Bank tutup. Total nasabah dilayani: ${nasabahDilayani}`);

// Melayani nasabah → minimal satu kali (mandatory service)

// Cek antrian → kalau masih ada, teruskan

// Kalau kosong → tanya apakah ada nasabah baru

// Update antrian → jika ada nasabah baru, masukkan ke antrian

// Loop sampai tidak ada nasabah