const prompt = require("prompt-sync");
const input = prompt()
let angka = input ("Masukan angka antara 1-10 :");

while (!(angka >= 1 && angka <=10)){
  console.log ("Input Tidak Valid!, Masukan angka 1-10  :");
  angka = input ("Masukan angka antara 1-10 :");
}

console.log(`Angka valid yang dimasukkan:${angka}`);
