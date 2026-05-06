import prompt from "prompt-sync"
let input: number = prompt()("Masukan Angka 1-10 :");
let angka: number;
// Tulis kode while loop di sini untuk validasi input
while (!(angka >= 1 && angka <= 10)) {
    console.log("Angka Tidak Valid, Masukan Angka 1-10 :");
    angka = prompt()("Masukan Angka 1-10 :");
}
console.log("Angka valid yang dimasukkan: " + angka);

export { }