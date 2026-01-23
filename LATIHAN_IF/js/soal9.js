let jenisKendaraan = "Mobil";
let durasi = 3; // jam
let tarif_perjam;
let total_bayar;
// Tulis kode if-else if-else statement di sini
if (jenisKendaraan === "Motor") {
    tarif_perjam = 2000;
} else if (jenisKendaraan === "Mobil") {
    tarif_perjam = 5000;
} else if (jenisKendaraan === "Truk") {
    tarif_perjam = 10000;
} else {
    tarif_perjam = 0;
}

// Hitung Total Pembayaran jika kendaraan Valid

if (tarif_perjam > 0) {
    total_bayar = tarif_perjam * durasi;

    console.log(`Jenis Kendaraan : ${jenisKendaraan}`)
    console.log(`Durasi Parkir   : ${durasi} Jam`);
    console.log(`Tarif Per Jam   : Rp.${tarif_perjam}`);
    console.log(`Total Bayar     : Rp.${total_bayar}`);
} else {
    console.log("Kendaraan Tidak Di izinkan!");
}