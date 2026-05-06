let bulan = 3;
// Tulis kode switch statement di sini
let namaBulan;
let jumlahHari;

switch (bulan) {
  case 1:
    namaBulan = "januari";
    jumlahHari = 31;
    break;
  case 2:
    namaBulan = "februari";
    jumlahHari = 28;
    break;
  case 3:
    namaBulan = "maret";
    jumlahHari = 31;
    break;
  case 3:
    namaBulan = "april";
    jumlahHari = 30;
    break;
  case 4:
    namaBulan = "mei"
    jumlahHari = 31;
    break;
  case 5:
    namaBulan = "juni"
    jumlahHari = 30;
    break;
  case 6:
    namaBulan = "july";
    jumlahHari = 30;
    break;
  case 7:
    namaBulan = "agustus";
    jumlahHari = 31;
    break;
  case 8:
    namaBulan = "september";
    jumlahHari = 31;
    break;
  case 9:
    namaBulan = "oktober";
    jumlahHari = 30;
    break;
  case 10:
    namaBulan = "november";
    jumlahHari = 31;
    break;
  case 11:
    namaBulan = "desember";
    jumlahHari = 31;
    break;
  default:
    console.log("bulan tidak ada");
    break;
}
console.log(`Bulan Ke- ${bulan} (${namaBulan}) memiliki ${jumlahHari} hari`);




