let berat: number = 70; // kg
let tinggi: number = 1.75; // meter
let kategori: string;
// Hitung BMI terlebih dahulu
let bmi: number = (berat / (tinggi * tinggi)).toFixed(2);
// Tulis kode if-else if-else statement di sini

if (bmi < 18.5) {
    kategori = "Underweight";
}
else if (bmi < 25) {
    kategori = "Normal";
}
else if (bmi < 30) {
    kategori = "Overweight";
}
else {
    kategori = "Obese";
}

// output 

console.log(`BMI      : ${bmi}`);
console.log(`Kategori : ${kategori}`);