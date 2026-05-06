let angka: number = 100;
let langkah: number = 0;
// Tulis kode while loop di sini untuk pembagian berulang

while (angka >= 1) {
    let hasil: number = angka / 2;
    console.log(`Langkah ${langkah} :${angka}/2 = ${hasil}`);
    angka = hasil;
    langkah++;
}
console.log("Proses selesai setelah " + langkah + " langkah");

export { }