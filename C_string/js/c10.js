function textAnalyzer(text) {
  // Original text
  let original = text;
  // Cleaned: trim spasi di awal & akhir
  let cleaned = text.trim();

  // Split words berdasarkan spasi
  let words = cleaned.split(/\s+/);

  // Hitung panjang
  let totalLength = original.length;
  let cleanedLength = cleaned.length;

  // Hitung jumlah kalimat (hanya titik dianggap akhir kalimat)
  let sentenceCount = (cleaned.match(/\./g) || []).length;

  // Hitung uppercase dan lowercase
  let uppercaseCount = 0;
  let lowercaseCount = 0;
  for (let char of cleaned) {
    if (char >= 'A' && char <= 'Z') uppercaseCount++;
    if (char >= 'a' && char <= 'z') lowercaseCount++;
  }

  // Longest & shortest word
  let longestWord = words.reduce((a, b) => (a.length >= b.length ? a : b));
  let shortestWord = words.reduce((a, b) => (a.length <= b.length ? a : b));

  // Cek angka dan karakter spesial
  let hasNumbers = /\d/.test(cleaned);
  let hasSpecialChars = /[^a-zA-Z0-9\s]/.test(cleaned);

  return {
    original,
    cleaned,
    stats: {
      totalLength,
      cleanedLength,
      wordCount: words.length,
      sentenceCount,
      uppercaseCount,
      lowercaseCount
    },
    words,
    longestWord,
    shortestWord,
    hasNumbers,
    hasSpecialChars
  };
}

// Driver code
let result = textAnalyzer("  Hello World! This is a TEST string.  ");
console.log(result);