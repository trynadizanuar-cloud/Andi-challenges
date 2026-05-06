import prompt from "prompt-sync";
let input = prompt()

let pilihan: number;
// Tulis kode while loop di sini untuk sistem menu
while (pilihan !== 4) {
    console.log(`
=== MENU KALKULATOR ===
1. Tambah
2. Kurang  
3. Kali
4. Keluar
`)

    pilihan = Number(input("Pilih Menu 1-4 :"));

    switch (pilihan) {
        case 1:
            console.log("Anda Memilih Tambah");
            break;
        case 2:
            console.log("Anda Memilih Kurang");
            break;
        case 3:
            console.log("Anda Memilih Kali");
            break;
        case 4:
            continue;
        default:
            console.log("Anda Salah Memasukan Input")
            break;

    }

}
console.log("Terima kasih telah menggunakan program!");

export { }