const prompt = require("prompt-sync")();

let antrian = ["Budi", "Sari", "Andi"];
let nasabahDilayani = 0;
let adaNasabahBaru;
// Tulis kode do-while loop di sini untuk simulasi antrian bank

do {
    while (antrian.length > 0) {
        let nasabah = antrian.shift();
        nasabahDilayani++;
        console.log(`Melayani nasabah: ${nasabah}`);

        if (antrian.length > 0) {
            console.log(`Sisa antrian: ${antrian.length} orang`);
        } else {
            console.log("Antrian kosong.");
        }
    }

    adaNasabahBaru = prompt("Ada nasabah baru yang datang? (y/n):");
    if (adaNasabahBaru === "y") {
        let namaBaru = prompt("Nasabah baru:");
        antrian.push(namaBaru);
    }

} while (antrian.length > 0 || adaNasabahBaru === "y");
console.log("Bank tutup. Total nasabah dilayani: " + nasabahDilayani);

















// // Jika setelah antrian habis, ada nasabah baru: y (Dewi), lalu n
// // Maka output:
// Melayani nasabah: Budi
// Sisa antrian: 2 orang
// Melayani nasabah: Sari
// Sisa antrian: 1 orang
// Melayani nasabah: Andi
// Antrian kosong.
// Ada nasabah baru yang datang? (y/n): y
// Nasabah baru: Dewi
// Melayani nasabah: Dewi
// Antrian kosong.
// Ada nasabah baru yang datang? (y/n): n
// Bank tutup. Total nasabah dilayani: 4