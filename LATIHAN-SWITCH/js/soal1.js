let nomorHari = 3;
let namaHari;
// Tulis kode switch statement di sini
switch (nomorHari) {
    case 1:
        namaHari = "Senin";
        break;
    case 2:
        namaHari = "Selasa";
        break;
    case 3:
        namaHari = "Rabu";
        break;
    case 4:
        namaHari = "Kamis";
        break;
    case 5:
        namaHari = "Jumat";
        break;
    case 6:
        namaHari = "Sabtu";
        break;
    case 7:
        namaHari = "Minggu";
        break;
        default:
            namaHari = " Nomor hari tidak Valid";
}
console.log (`Hari ke- ${nomorHari}: ${namaHari}`);