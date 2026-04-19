import promptSync from "prompt-sync";
const prompt = promptSync();

let password: string;
let valid: boolean = false;

do {
    // Minta user membuat password
    password = prompt("Buat password Anda: ");

    // Cek panjang minimal 6 karakter
    let panjangmin: boolean = password.length >= 6;

    // Cek ada angka
    let adaAngka: boolean = /\d/.test(password); // regex \d = digit

    if (panjangmin && adaAngka) {
        console.log("Password valid!");
        valid = true;
    } else {
        console.log("Password tidak valid! Harus minimal 6 karakter dan mengandung angka.");
    }

} while (valid == false); // ulangi selama password belum valid

console.log("Password berhasil dibuat: " + password);

export { }