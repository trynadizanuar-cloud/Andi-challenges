let grade = "B";
// Tulis kode switch statement di sini
let penilaian;

switch (grade) {
    case "A":
        penilaian = "Sangat baik";
        break;
    case "B":
        penilaian = "Baik";
        break;
    case "C":
        penilaian = "cukup";  
        break;
    case "D":
        penilaian = "Kurang";   
        break;
    case "E":
        penilaian = "Sangat Kurang";   
        break;
    default:
        penilaian = "tidak dapat nila";

}

console.log (`Grade ${grade} : ${penilaian}`);