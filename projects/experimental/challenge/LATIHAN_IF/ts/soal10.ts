let angka1: number = 10;
let angka2: number = 3;
let operator: string = "/";
let hasil: number;
// Tulis kode if-else if-else statement di sini

if (operator === "+") {
    hasil = angka1 + angka2;
}
else if (operator === "-") {
    hasil = angka1 - angka2;
}
else if (operator === "*") {
    hasil = angka1 * angka2;
}
else if (operator === "/") {
    if (angka2 !== 0) {
        hasil = angka1 / angka2;
    }
    else {
        console.log("Error, angka tidak bisa dibagi 0");
    }
}
else {
    console.log("operator tidak valid!");
}

// output hasil 

    console.log (`${angka1} ${operator} ${angka2} = ${hasil.toFixed(2)}`);
