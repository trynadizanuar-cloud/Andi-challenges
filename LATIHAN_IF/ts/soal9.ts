let jenisKendaraan : string = "mobil";
let durasi : number = 3; // jam
let tarif_jam : number;
let total_bayar : number;
// Tulis kode if-else if-else statement di sini

if (jenisKendaraan === "motor"){
    tarif_jam = 2000;
}
else if (jenisKendaraan === "mobil"){
    tarif_jam = 5000;
}
else if (jenisKendaraan === "truk"){
    tarif_jam = 10000;
}
else {
    tarif_jam = 0;
}

// hitung Total bayar jika kendaraan true / valid 
if (tarif_jam > 0){
    total_bayar = tarif_jam * durasi;
}

// output 
console.log (`Jenis Kendaraan : ${jenisKendaraan}`);
console.log (`Durasi Parkir   : ${durasi} Jam`);
console.log (`Tarif Per Jam   : Rp.${tarif_jam}`);
console.log (`Total Bayar     : Rp.${total_bayar} `);