// Tulis function calculateRectangleArea di sini
type luas_persegi = (panjang: number, lebar: number) => number;
const calculateRectangleArea: luas_persegi = (panjang: number, lebar: number): number => {
    return panjang * lebar;
}
// Panggil function dan hitung luas
let luas1: number = calculateRectangleArea(10, 5);
let luas2: number = calculateRectangleArea(7, 3);
console.log("Luas persegi panjang (10x5): " + luas1);
console.log("Luas persegi panjang (7x3): " + luas2);