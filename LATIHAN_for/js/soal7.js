let kata = "programming";
let jumlahVokal = 0;
// Tulis kode for loop di sini untuk menghitung vokal
for (let i = 0; i < kata.length; i++) {
    let huruf = kata.charAt(i);
    if ("aeiouAEIOU".includes(huruf)) {
        jumlahVokal++;
    }
}

console.log("Jumlah vokal: " + jumlahVokal);