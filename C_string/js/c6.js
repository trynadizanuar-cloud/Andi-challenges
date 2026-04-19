function processWords(sentence) {
    const words = sentence.split(" ");
    const count = words.length;
    const reversed = words.slice().reverse().join(" ");
    return { words, count, reversed };
}
// Tulis function processWords di sini

console.log(processWords("Hello beautiful world"));
console.log(processWords("JavaScript is awesome"));