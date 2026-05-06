let waktu = 10;
let tombolDitekan = false;
let waktuDitekan = 0;

while (waktu > 0 && !tombolDitekan) {
  console.log("Countdown:", waktu);

  // Simulasi: tombol ditekan di detik ke-7
  if (waktu === 7) {
    tombolDitekan = true;
    waktuDitekan = waktu;
    break;
  }

  waktu--;
}

if (tombolDitekan) {
  console.log("Timer dihentikan oleh user pada detik ke-" + waktuDitekan);
} else {
  console.log("Countdown selesai!");
}
