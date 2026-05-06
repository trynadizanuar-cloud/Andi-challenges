const prompt = require("prompt-sync")();

let namaDepan = "user";
let username;
let puas;
let percobaan = 0;

do {
    percobaan++;

    // Generate angka random 4 digit
    let angkaRandom = Math.floor(Math.random() * 10000);
    username = namaDepan + angkaRandom;

    console.log(`Percobaan ${percobaan}: Username yang dihasilkan: ${username}`);
    puas = prompt("Apakah Anda puas dengan username ini? (y/n): ").toLowerCase();
} while (puas !== "y");

console.log(`Username final: ${username} (dibuat dalam ${percobaan} percobaan)`);
