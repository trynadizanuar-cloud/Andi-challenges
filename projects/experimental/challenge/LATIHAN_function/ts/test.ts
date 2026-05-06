// Tulis function displayUserInfo di sini
type info = (nama: string, umur: number, kota: string) => void;
const displayUserInfo: info = (nama: string, umur: number, kota: string): void => {
    console.log(`=== Info User ===
Nama: ${nama}
Umur: ${umur}
Kota: ${kota}`);
}
// Panggil function dengan data berbeda
displayUserInfo("Ahmad", 25, "Jakarta");
displayUserInfo("Lisa", 30, "Bandung");

export { }