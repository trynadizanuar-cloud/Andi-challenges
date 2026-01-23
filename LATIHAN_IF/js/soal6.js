let totalBelanja = 350000;
// Tulis kode if-else if statement di sini

if (totalBelanja >= 500000){
    diskon = 20;
} else if (totalBelanja >= 200000){
    diskon = 10;
} else if (totalBelanja >= 100000){
    diskon = 5;
}

// hitungan total bayar dan diskon
let totalBayar = (totalBelanja - (totalBelanja * diskon/100))

console.log (`Total Belanja :${totalBelanja}`);
console.log (`Diskon : ${diskon}%`)
console.log (`Total Bayar : ${totalBayar}`);