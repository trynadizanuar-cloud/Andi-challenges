let angka = 2;
let iterasi = 0;
let hasil = angka;
// Tulis kode while loop di sini untuk pengkuadratan berulang

while (angka <= 1000) {
    iterasi++;
    let sebelum = hasil;
    hasil = hasil * hasil;
    angka = hasil;
    console.log(`Iterasi ${iterasi}: ${sebelum} ^2 = ${hasil} `);
}
console.log("Angka " + 2 + " harus dikuadratkan " + iterasi + " kali untuk melebihi 1000");
console.log(`Hasil akhir: ${hasil} `);


let angka = 2;
let iterasi = 0;
let hasil = angka;

while (hasil <= 1000) {
    iterasi++;
    let sebelum = hasil;
    hasil = hasil * hasil;
    console.log(`Iterasi ${iterasi}: ${sebelum} ^2 = ${hasil}`);
}

console.log(`Angka ${angka} harus dikuadratkan ${iterasi} kali untuk melebihi 1000`);
console.log(`Hasil akhir: ${hasil}`);



