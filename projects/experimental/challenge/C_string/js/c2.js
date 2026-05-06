// Tulis function analyzeCharacters di sini
function analyzeCharacters(text) {
    // siapkan tempat penyimpanan proses
    const result = []; 

    for (let i = 0; i < text.length; i++) {
        // memasukkan data ke array
        result.push({
            // menyimpan karakter
            char: text.charAt(i),
            // menyimpan index
            position: i
        });
    }
    return result
}

console.log(analyzeCharacters("Hi"));
console.log(analyzeCharacters("Code"));