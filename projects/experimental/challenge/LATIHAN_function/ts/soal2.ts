// Tulis function getCurrentTime di sini
type currentime = () => string;

const getCurrentTime: currentime = (): string => {
    const now = new Date();

    let hours: string = String(now.getHours()).padStart(2, "0");
    let minutes: string = String(now.getMinutes()).padStart(2, "0");
    let seconds: string = String(now.getSeconds()).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
}
// Panggil function dan simpan hasilnya
let waktu = getCurrentTime();
console.log("Waktu sekarang: " + waktu);