// Tulis function extractText di sini
type ExtractFunction = (text: string, start: number, end: number) => {
    result: string,
    success: boolean,
    original: string
}
const extractText: ExtractFunction = (text, start, end) => {
    if (start < 0 || end > text.length || start >= end) {
        return {
            result: "",
            success: false,
            original: text
        }
    }
    return {
        result: text.substring(start, end),
        success: true,
        original: text
    }
}
console.log(extractText("JavaScript", 0, 4));
console.log(extractText("Programming", 3, 7));
console.log(extractText("Hello", 10, 15));