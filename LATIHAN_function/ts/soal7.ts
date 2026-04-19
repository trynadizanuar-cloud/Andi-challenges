// Tulis function createProfile di sini
type input = (nama: string, profil?: string) => string;
const createProfile: input = (nama: string, profil: string = "Member"): string => {
    return `profil : ${nama},${profil}`;
}
// Panggil function dengan dan tanpa parameter kedua
let profil1: string = createProfile("Budi");
let profil2: string = createProfile("Sari", "Admin");

console.log(profil1);
console.log(profil2);

export { }