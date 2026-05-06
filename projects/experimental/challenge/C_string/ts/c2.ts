// Tulis function analyzeCharacters di sini
interface Character {
    char: string,
    position: number

};
type characterfn = (text: string) => Character[];

const analyzeCharacters: characterfn = (text: string): Character[] => {
    const result: Character[] = [];

    for (let i = 0; i < text.length; i++) {
        result.push({
            char: text.charAt(i),
            position: i
        });
    }
    return result
}
console.log(analyzeCharacters("Hi"));
console.log(analyzeCharacters("Code"));