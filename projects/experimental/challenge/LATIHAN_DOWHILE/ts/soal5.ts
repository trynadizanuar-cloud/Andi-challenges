let angkaRandom: number;
let percobaan: number = 0;

do {
  percobaan++;
  angkaRandom = Math.floor(Math.random() * 100) + 1;

  if (angkaRandom % 2 === 0) {
    console.log(`Percobaan ${percobaan}: ${angkaRandom} (genap, selesai!)`);
  } else {
    console.log(`Percobaan ${percobaan}: ${angkaRandom} (ganjil, coba lagi)`);
  }

} while (angkaRandom % 2 !== 0);

console.log(
  `Angka genap ditemukan: ${angkaRandom} dalam ${percobaan} percobaan`
);
