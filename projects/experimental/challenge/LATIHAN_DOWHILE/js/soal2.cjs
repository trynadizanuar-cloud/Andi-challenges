const prompt = require("prompt-sync")();

let saldo = 100000;
let pilihan;
let lanjut;
// Tulis kode do-while loop di sini

do {
    console.log(`=== ATM MENU ===
1. Cek Saldo
2. Tarik Tunai
3. Setor Tunai
4. Keluar`);

    pilihan = prompt("Pilih Menu :");

    switch (pilihan) {
        case "1":
            console.log(`Saldo Anda : Rp.${saldo}`);
            break;
        case "2":
            let tarik = Number(prompt("Masukan Jumlah :"));
            if (tarik > saldo) {
                console.log("Saldo tidak cukup!");
            } else {
                saldo -= tarik;
                console.log(`Penarikan berhasil. Saldo: Rp.${saldo}`);
            }
            break;
        case "3":
            let setor = Number(prompt("Masukkan jumlah : "));
            saldo += setor;
            console.log(`Setoran berhasil. Saldo: Rp.${saldo}`);
            break;
        case "4":
            console.log("Keluar dari ATM...");
            lanjut = "n"; // otomatis keluar loop
            continue; // skip tanya lanjut
        default:
            console.log("Angka Tidak valid!");
            break;
    }
    if (pilihan !== 4) {
        lanjut = prompt("Apakah ingin melakukan transaksi lain? (y/n)");
    }
} while (lanjut === "y");

console.log("Terima kasih telah menggunakan ATM!"); 