let angka: number = 2;
let iterasi: number = 0;
let hasil: number = angka;
// Tulis kode while loop di sini untuk pengkuadratan berulang
while (angka <= 1000) {
    iterasi++;
    let sebelum: number = hasil;
    hasil = hasil * hasil;
    angka = hasil;
    console.log(`Iterasi ${iterasi} : ${sebelum} ^ 2 = ${hasil}`);
}
console.log("Angka " + 2 + " harus dikuadratkan " + iterasi + " kali untuk melebihi 1000");
console.log(`Hasil akhir: ${hasil}`);

export { }