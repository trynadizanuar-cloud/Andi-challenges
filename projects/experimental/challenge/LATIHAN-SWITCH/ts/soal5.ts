
let angka1 = 15;
let angka2 = 4;
let operator = "%";

let hasil;

switch (operator) {
    case "+":
        hasil = angka1 + angka2;
        break;
    case "-":
        hasil = angka1 - angka2;
        break;
    case "*":
        hasil = angka1 * angka2;
        break;
    case "/":
        if (angka2 !== 0) {
            hasil = angka1 / angka2;
        } else {
            console.log("Error: Pembagian dengan nol tidak diperbolehkan");
        }
        break;
    case "%":
        if (angka2 !== 0) {
            hasil = angka1 % angka2;
        } else {
            console.log("Error: Modulo dengan nol tidak diperbolehkan");
        }
        break;
    default:
        console.log("Operator tidak valid");
}

if (hasil !== undefined) {
    console.log(`${angka1} ${operator} ${angka2} = ${hasil}`);
}
