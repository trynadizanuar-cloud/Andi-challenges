let kata = "programming";
let i = 0;
let ditemukan = false;

while (i < kata.length && !ditemukan) {
    if (kata.charAt(i) === 'a') {  // versi dasar tanpa []
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
