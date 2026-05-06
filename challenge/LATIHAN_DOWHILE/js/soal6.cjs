const prompt = require("prompt-sync")();

const soal = ["5 + 3 = ?", "10 - 4 = ?", "7 * 2 = ?"];
const jawaban = [8, 6, 14];

let jawabanUser;
let lanjut;
let nomorSoal = 0;
let benar = 0;
// Tulis kode do-while loop di sini untuk kuis

do {
    // berikan soal terima jawaban 
    console.log(`soal ${nomorSoal + 1} : ${soal[nomorSoal]}`);
    jawabanUser = parseInt(prompt("Jawaban Anda :"));

        // validasi dan tambah
    if (jawabanUser == jawaban[nomorSoal]) {
        console.log("Benar!");
        benar++;
    } else {
        console.log(`Salah! Jawaban yang benar : ${jawaban[nomorSoal]}`);
    }
    // lanjut soal
    lanjut = prompt("Lanjut ke soal berikutnya? (y/n): ").toLowerCase();
    nomorSoal++;

    // cek kondisi
} while (lanjut === "y" && nomorSoal < soal.length);

console.log("Kuis selesai! Skor: " + benar + "/" + nomorSoal);