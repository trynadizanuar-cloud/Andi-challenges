let angka = 100;
let langkah = 0;

while (angka >= 1) {
    langkah++;
    let hasil = angka / 2;
    console.log("Langkah " + langkah + ": " + angka + " / 2 = " + hasil);
    angka = hasil;
}

console.log("Proses selesai setelah " + langkah + " langkah");
