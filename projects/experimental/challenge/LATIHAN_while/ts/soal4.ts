let kata: string = "programming";
let i: number = 0;
let ditemukan: boolean = false;
// Tulis kode while loop di sini untuk mencari huruf 'a'
while (i < kata.length && !ditemukan) {
    if (kata.charAt(i) === "a") {
        ditemukan = true;
        break;
    }
    i++;

}
if (ditemukan) {
    console.log("Huruf 'a' ditemukan di posisi: " + i);
} else {
    console.log("Huruf 'a' tidak ditemukan");
}

export { }