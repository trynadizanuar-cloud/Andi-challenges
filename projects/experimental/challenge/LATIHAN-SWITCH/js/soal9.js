let tombol = "SPACE";
let fungsi;
// Tulis kode switch statement di sini

switch (tombol){
    case "W":
        fungsi = "Maju";
        break;
        case "S":
            fungsi = "Mundur";
            break;
            case "A":
                fungsi = "Kiri";
                break;
                case "D":
                    fungsi = "Kanan";
                    break; 
                    case "SPACE" :
                        fungsi = "Karakter Melompat";
                        break;
                        case "Escape":
                            fungsi = "Pause";
                            break;
                            default :
                            fungsi = "Tombol Tidak Valid";

}
console.log (`Tombol ${tombol} : ${fungsi}`);