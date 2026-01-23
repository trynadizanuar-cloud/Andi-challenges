let berat = 70; // kg
let tinggi = 1.75; // meter
let kategori ;
// Hitung BMI terlebih dahulu
let bmi= (berat / (tinggi*tinggi)).toFixed (2)

// Tulis kode if-else if-else statement di sini
if (bmi < 18.5){
    kategori = "underweight";
} else if ( bmi < 25){
    kategori = "Normal";
} else if ( bmi < 30){
    kategori = "Overweight";
} else {
    kategori = " Obese";
}

console.log (`BMI      : ${bmi}`);
console.log (`Kategori : ${kategori}`);