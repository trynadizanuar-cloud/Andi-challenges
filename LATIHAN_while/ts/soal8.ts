let teks: string = "   hello world   ";
let langkah: number = 0;
// Tulis kode while loop di sini untuk menghapus spasi awal
while (teks[0] === " ") {
    let temp = "";

    for (let i = 1; i < teks.length; i++) {
        temp += teks[i];
    }
    teks = temp
    langkah++;
    console.log(`Langkah ${langkah} : '${teks}'`);
}
console.log("Hasil akhir: '" + teks + "'");
console.log("Total spasi yang dihapus: " + langkah);

export { }