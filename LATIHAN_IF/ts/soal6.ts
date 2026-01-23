let totalBelanja : number = 350000;
let diskon : number ;
// Tulis kode if-else if statement di sini

if (totalBelanja >= 500000){
  diskon = 20;
}
else if (totalBelanja >= 200000){
  diskon = 10;
}
else if (totalBelanja >= 100000){
  diskon = 5;
}

// Hitungan total bayar konversi diskon
let totalBayar : number = totalBelanja - (totalBelanja * diskon/100);

// output hasil
console.log (`Total Belanja : Rp.${totalBelanja}`);
console.log (`Diskon        : ${diskon}%`);
console.log (`Total Bayar   : Rp.${totalBayar}`);