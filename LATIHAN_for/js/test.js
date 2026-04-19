let baris = 15;
// looping baris 
for (let i = 5; i <= 15; i++) {
    let pola = "";

    // looping bintang 
    for (let j = 5; j <= i; j++)
        pola += "*";
    console.log(pola);
}