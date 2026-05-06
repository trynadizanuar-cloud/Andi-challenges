
// (Mulai)
let angkaRandom;
let percobaan = 0;

do {
  // Generate angka random 1 - 100 
  angkaRandom = Math.floor(Math.random() * 100) + 1;
// Kita kalikan dengan 100 supaya rentangnya berubah dari [0,1) menjadi [0,100)
//   membulatkan ke bawah ke integer terdekat

  percobaan++;  // Tambah percobaan


  // Cek genap atau ganjil Validasi (genap / ganjil) & Cetak hasil
  if (angkaRandom % 2 !== 0) {
    console.log("Percobaan " + percobaan + ": " + angkaRandom + " (ganjil, coba lagi)");
  } else {
    console.log("Percobaan " + percobaan + ": " + angkaRandom + " (genap, selesai!)");
  }

} while (angkaRandom % 2 !== 0); // Cek kondisi (post-condition)
console.log("Angka genap ditemukan: " + angkaRandom + " dalam " + percobaan + " percobaan");

// let angkaRandom;
// let percobaan = 0;
// // Tulis kode do-while loop di sini untuk generate angka genap
// do {
// percobaan += 1;
// angkaRandom = Math.floor(Math.random() * 100) + 1;
// console.log(angkaRandom % 2 == 1 ? `Percobaan ${percobaan} : ${angkaRandom} (ganjil coba lagi)` : `Percobaan ${percobaan}: ${angkaRandom} (genap, selesai!)`)

// } while (angkaRandom % 2 == 1);
// console.log("Angka genap ditemukan: " + angkaRandom + " dalam " + percobaan + " percobaan");

