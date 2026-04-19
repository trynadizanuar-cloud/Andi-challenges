let grade : string = "B";
let penilaian : string;
// Tulis kode switch statement di sini

switch (grade){
case "A":
    penilaian = "Sangat Baik";
    break;
    case "B":
    penilaian = "Baik";
    break;
    case "C":
        penilaian = "Cukup";
        break;
        case "D":
            penilaian = "Kurang";
            break;
            case "E": 
            penilaian = "Sangat Kurang";
            break;
            default:
                penilaian = "Grade Tidak Valid"; 
}

console.log (`Grade ${grade} :${penilaian}`); 