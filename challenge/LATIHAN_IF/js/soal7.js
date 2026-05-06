let skor = 85;
let grade;
// Tulis kode if-else if-else statement di sini

if (skor >= 90) {
    grade = "A";
}
else if (skor >= 80) {
    grade = "B";
}
else if (skor >= 70) {
    grade = "C";
}
else if (skor >= 60) {
    grade = "D";
}
else {
    grade = "E"
}

console.log(`Skor  : ${skor} `);
console.log(`Grade : ${grade}`);