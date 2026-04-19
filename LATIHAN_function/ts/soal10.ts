
// Tulis function validateAndCalculateGrade di sini
type validasi = (nama: string, nilai: number) => string;
const validateAndCalculateGrade = (nama: string, nilai: number): string => {
    console.log(`=== Hasil Penilaian ===
Nama: ${nama}`);
    if (nilai < 0 || nilai > 100) {
        console.log(`Nilai: ${nilai} (Tidak Valid - harus 0-100)\n`);
        return null;
    }

    console.log(`Nilai: ${nilai} (Valid)`);

    let grade: string;

    if (nilai >= 90) {
        grade = "A";
    } else if (nilai >= 80) {
        grade = "B";
    } else if (nilai >= 70) {
        grade = "C";
    } else if (nilai >= 60) {
        grade = "D";
    } else {
        grade = "E"
    }

    console.log(`Grade: ${grade}\n`);

    return grade;
}
// Test dengan berbagai nilai
let grade1 = validateAndCalculateGrade("Budi", 85);
let grade2 = validateAndCalculateGrade("Sari", 150); // invalid
let grade3 = validateAndCalculateGrade("Andi", 72);

console.log("Grade Budi: " + grade1);
console.log("Grade Sari: " + grade2);
console.log("Grade Andi: " + grade3);