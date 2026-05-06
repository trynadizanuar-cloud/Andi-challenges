let namaHari: string;
let nomorHari: number = 3;

switch (nomorHari) {
    case 1:
        namaHari = "senin";
        break;
    case 2:
        namaHari = "selasa";
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
        namaHari = "sabtu";
        break;
    case 7:
        namaHari = "minggu";
        break;
    default: "Nomor hari tidak valid";

}

console.log(`Hari ke-${nomorHari}: ${namaHari}`);
