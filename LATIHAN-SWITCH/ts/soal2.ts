let pilihan : number = 2;
let menu : string;
let harga: string;

// Tulis kode switch statement di sini
switch (pilihan){
    case 1 :
        menu = "Nasi Goreng";
        harga = 15000;
        break;
        case 2 :
            menu = "Mie Ayam";
            harga = 12000;
            break;
            case 3 :
                menu = "Bakso";
                harga = 10000;
                break;
                case 4:
                    menu = "Es Teh";
                    harga = 5000;
                    break;
                    default:
                    menu = "Tidak Tersedia";
                    harga = 0;
}

console.log (`Anda Memili : ${menu}`)
console.log (`Harga : Rp.${harga}`)