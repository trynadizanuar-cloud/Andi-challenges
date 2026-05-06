import promptSync from "prompt-sync";

const prompt = promptSync();
let tahapInstalasi = ["Download file", "Extract file", "Install program", "Setup konfigurasi"];
let berhasil: boolean = false;
let percobaan: number = 0;
// Tulis kode do-while loop di sini untuk simulasi instalasi

do {
    percobaan++;
    console.log(`=== PERCOBAAN INSTALASI ${percobaan} ===`)
    let sukses: boolean = true;
    // anggap berhasil dulu

    tahapInstalasi.forEach(item => {
        const berhasilTahap: number = Math.random() > 0.2;

        if (berhasilTahap) {
            console.log(`${item}...selesai`);
        } else {
            console.log(`${item}...GAGAL`);
            sukses = false;
        }
    });

    if (sukses) {
        console.log(`\nInstalasi berhasil dalam ${percobaan} percobaan!`);
        berhasil = true;
    } else {
        let cobalagi: string = prompt("Instalasi gagal! Coba lagi? (y/n): ");
        if (cobalagi.toLowerCase() !== "y") {
            console.log(`Instalasi dibatalkan setelah ${percobaan} percobaan.`);
            break;
        }

    }

} while (!berhasil);

export { }












