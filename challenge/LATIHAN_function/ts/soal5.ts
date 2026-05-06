// Tulis function displayUserInfo di sini
const displayUserInfo = (nama: string, umur: number, kota: string): void => {
    console.log(` 
===Info User===
nama: ${nama} 
umur: ${umur}
kota: ${kota}
`);
}
// Panggil function dengan data berbeda
displayUserInfo("Ahmad", 25, "Jakarta");
displayUserInfo("Lisa", 30, "Bandung");