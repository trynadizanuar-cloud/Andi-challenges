import PromptSync from "prompt-sync";
const prompt = PromptSync();
let password: string = "";
let percobaan: number = 0;
let maxPercobaan: number = 3;
let berhasil: boolean = false;
// Tulis kode while loop di sini untuk validasi password
while (percobaan < maxPercobaan && password != "admin123") {
    password = prompt("Masukan Password :");

    if (password === "admin123") {
        berhasil = true;
    } else {
        console.log(`Password salah. Sisa percobaan: ${maxPercobaan - percobaan}`);
    }
    percobaan++;
}

if (berhasil) {
    console.log("Login berhasil!");
} else {
    console.log("Akses ditolak. Terlalu banyak percobaan gagal.");
}