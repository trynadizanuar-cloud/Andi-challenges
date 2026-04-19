// Tulis function greetUser di sini
type print = () => void;
const greetUser = (nama: string): void => {
    console.log(`Hallo ${nama}, Selamat Datang`);
}
// Panggil function dengan berbagai nama
greetUser("Budi");
greetUser("Sari");

export { }