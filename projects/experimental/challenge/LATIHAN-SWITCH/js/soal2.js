let pilihan = 2;
let menu;
let harga;
// Tulis kode switch statement di sini

switch (pilihan) {
    case 1:
        menu = "Nasi Goreng";
        harga = 15000;
        break;
    case 2:
        menu = "Mie Ayam"
        harga = 12000;
        break;
    case 3:
        menu = "Bakso";
        harga = 10000;
        break;
    case 4:
        menu = "Teh Manis";
        harga = 5000;
        break;
    default:
        menu = "tidak tersedia";
        harga = "tidak muncul";

}

console.log(`Anda memilih : ${menu}`);
console.log(`Harga        : Rp. ${harga}`);