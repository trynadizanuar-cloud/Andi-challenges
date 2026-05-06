// Tulis function calculateSquare di sini
type kuadrat = (input: number) => number;
const calculateSquare: kuadrat = (angka: number): number => {
    return Math.pow(angka, 2);
}
// Panggil function dan tampilkan hasilnya
let hasil1 = calculateSquare(5);
let hasil2 = calculateSquare(8);
console.log("5 kuadrat = " + hasil1);
console.log("8 kuadrat = " + hasil2);

export { }