import promptSync from "prompt-sync";

const prompt = promptSync();

const soal: string[] = ["5 + 3 = ?", "10 - 4 = ?", "7 * 2 = ?"];
const jawaban: number[] = [8, 6, 14];

let jawabanUser: number;
let lanjut: string;
let nomorSoal: number = 0;
let benar: number = 0;

do {
    // tampilkan soal & terima jawaban
    console.log(`Soal ${nomorSoal + 1}: ${soal[nomorSoal]}`);
    jawabanUser = parseInt(prompt("Jawaban Anda: "));

    // validasi jawaban
    if (jawabanUser === jawaban[nomorSoal]) {
        console.log("Benar!");
        benar++;
    } else {
        console.log(`Salah! Jawaban yang benar: ${jawaban[nomorSoal]}`);
    }

    // lanjut soal?
    lanjut = prompt("Lanjut ke soal berikutnya? (y/n): ").toLowerCase();
    nomorSoal++;

} while (lanjut === "y" && nomorSoal < soal.length);

console.log(`Kuis selesai! Skor: ${benar}/${nomorSoal}`);
