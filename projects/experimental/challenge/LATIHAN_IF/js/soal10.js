let angka1 = 10;
let angka2 = 3;
let operator = "/";
let hasil;
// Tulis kode if-else if-else statement di sini

    if (operator === "+"){
        hasil = angka1+angka2;
    }
    else if (operator === "-"){
        hasil = angka1-angka2;
    }
    else if (operator === "*"){
        hasil = angka1&angka2;
    }
    else if (operator === "/"){
        if (angka2 !== 0){
            hasil = angka1/angka2;
        } else {
                console.log ("error, angka tidak bisa dibagi 0");
            }
        }
    
    else {
        console.log ("operator tidak valid!");
    }

// output jika hasil terdefinisi
if (hasil !== undefined){
    console.log (`${angka1} ${operator} ${angka2} : ${hasil.toFixed(2)}`);
}