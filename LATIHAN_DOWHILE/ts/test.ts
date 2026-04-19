import promptSync from "prompt-sync";
const prompt = promptSync();

let antrian: string[] = ["Budi", "Sari", "Andi"];
let nasabahDilayani: number = 0;
let adaNasabahBaru: string;
// Tulis kode do-while loop di sini untuk simulasi antrian bank

do {
    while (antrian.length > 0) {
        let nasabah: string = antrian.shift();
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
        let namaBaru: string = prompt("Nasabah baru:");
        antrian.push(namaBaru);
    }

} while (antrian.length > 0 || adaNasabahBaru === "y");
console.log("Bank tutup. Total nasabah dilayani: " + nasabahDilayani);
