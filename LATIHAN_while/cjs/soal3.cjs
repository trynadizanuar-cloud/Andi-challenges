const prompt = require("prompt-sync")();

let pilihan;
// Tulis kode while loop di sini untuk sistem menu
while (pilihan !== 4) {
    console.log(`

=== MENU KALKULATOR ===

     1. Tambah
     2. Kurang  
     3. Kali
     4. Keluar
`)

    pilihan = Number(prompt("Pilih Menu 1-4 :"));
    switch (pilihan) {
        case 1:
            console.log("Anda Memilih tambah");
            break;
        case 2:
            console.log("Anda Memilih kurang");
            break;
        case 3:
            console.log("Anda Memilih kali");
            break;
        case 4:
            console.log("Anda Memilih keluar");
            continue;
        default:
            console.log("Anda Salah Memasukan Input");
            break;
    }
}
console.log("Terima kasih telah menggunakan program!");
