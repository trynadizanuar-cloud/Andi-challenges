let angka: Array = [5, 3, 8, 2, -1, 7, 4];
let i: number = 0;
let jumlahPositif: number = 0;
let totalPositif: number = 0;
// Tulis kode while loop di sini untuk memproses array
while (i < angka.length && angka[i] >= 0) {
    jumlahPositif++;
    console.log(`Memproses : ${angka[i]} (Positif)`);
    totalPositif += angka[i];
    i++;
}

console.log("Jumlah angka positif: " + jumlahPositif);
console.log("Total nilai positif: " + totalPositif);
if (i < angka.length) {
    console.log("Dihentikan karena menemukan angka negatif: " + angka[i]);
} else {
    console.log("Semua elemen array telah diproses");
}

export { }
