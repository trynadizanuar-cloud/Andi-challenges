let teks = "   hello world   ";
let langkah = 0;

// selama karakter pertama adalah spasi, jalankan kode di dalam loop
while (teks[0] === " ") {
  // Buat string baru tanpa karakter pertama
  let temp = ""; // temp → string kosong untuk menyimpan hasil sementara
  for (let i = 1; i < teks.length; i++) {
    // += → tambah ke string yang sudah ada
    // temp awalnya ""(kosong)
    // Setiap loop i, karakter teks[i] ditambahkan ke temp
    temp += teks[i];
  }
  // Menyimpan hasil sementara (temp) ke variabel utama (teks) untuk dipakai di langkah berikutnya
  teks = temp;
  // setelah di simpan lakukan lagi 1 kali
  langkah++;
  console.log("Langkah " + langkah + ": '" + teks + "'");
}

console.log("Hasil akhir: '" + teks + "'");
console.log("Total spasi yang dihapus: " + langkah);
