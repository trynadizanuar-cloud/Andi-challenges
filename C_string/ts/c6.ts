// Tulis function processWords di sini
type ProccesFunction = (sentence: string) => {
    words: string[],
    count: number,
    reversed: string
}
const processWords: ProccesFunction = (sentence) => {
    const words = sentence.split(" ");
    const count = words.length;
    const reversed = words.slice().reverse().join(" ");

    return {
        words,
        count,
        reversed
    }
}
console.log(processWords("Hello beautiful world"));
console.log(processWords("JavaScript is awesome"));