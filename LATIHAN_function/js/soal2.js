// Tulis function getCurrentTime di sini
function getCurrentTime() {
    const now = new Date();

    let hours = String(now.getHours()).padStart(2, "0");
    let minutes = String(now.getMinutes()).padStart(2, "0");
    let seconds = String(now.getSeconds()).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
}
// Panggil function dan simpan hasilnya
let waktu = getCurrentTime();
console.log("Waktu sekarang: " + waktu);