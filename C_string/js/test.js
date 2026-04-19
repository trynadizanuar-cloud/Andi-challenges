// Tulis function textAnalyzer di sini
function textAnalyzer(text) {
    let original = text;
    let cleaned = text.trim();

    let totalLength = original.length;
    let cleanedLength = cleaned.length;

    let words = cleaned.split(/\s+/);

    let sentenceCount = (cleaned.match(/\./g) || []).length;

    let uppercaseCount = 0;
    let lowercaseCount = 0;
    for (let char of cleaned) {
        if (char >= "A" && char <= "Z") uppercaseCount++;
        if (char >= "a" && char <= "z") lowercaseCount++;
    }

    let longestWord = words.reduce((a, b) => a.length >= b.length ? a : b);
    let shortestWord = words.reduce((a, b) => a.length <= b.length ? a : b);

    let hasNumbers = /\d/.test(cleaned);

    let hasSpecialChars = /[^a-zA-Z0-9/s]/.test(cleaned);

    return {
        original,
        cleaned,
        stats: {
            totalLength,
            cleanedLength,
            wordCount: words.length,
            sentenceCount,
            uppercaseCount,
            lowercaseCount,
        },
        words,
        longestWord,
        shortestWord,
        hasNumbers,
        hasSpecialChars,
    }
}

let result = textAnalyzer("  Hello World! This is a TEST string.  ");
console.log(result);