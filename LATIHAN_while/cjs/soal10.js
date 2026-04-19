let angka = [5, 3, 8, 2, -1, 7, 4];
let i = 0;
let jumlahPositif = 0;
let totalPositif = 0;

while (i < angka.length && angka[i] >= 0) {
  console.log("Memproses: " + angka[i] + " (positif)");
  jumlahPositif++;
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

coba cek apakah sudah sesuai 
While, array processing, early termination, conditional counting, multiple conditions