import promptSync from "prompt-sync";
const prompt = promptSync();

let angka: number;
let lanjut: string;
// Tulis kode do-while loop di sini

do {
    angka = parseInt(prompt("Masukan Angka : "));
    console.log(`kuadrat dari ${angka} adalah : ${angka * angka}`);
    lanjut = prompt("Apakah ingin melanjutkan? (y/n):");
} while (lanjut === "y");
console.log("Terima kasih telah menggunakan program!");

export { }