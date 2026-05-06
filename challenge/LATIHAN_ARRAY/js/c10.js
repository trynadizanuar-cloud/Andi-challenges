// Tulis function arrayAnalyzer di sini
function arrayAnalyzer(arr) {
    const original = [...arr];
    const length = arr.length;

    const sum = arr.reduce((a, b) => a + b, 0);
    const average = length > 0 ? + (sum / length).toFixed(2) : 0;
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    const sorted = [...arr].sort((a, b) => a - b);
    let median;
    if (length === 0) {
        median = null;
    } else if (length % 2 === 0) {
        median = (sorted[length / 2 - 1] + sorted[length / 2]) / 2;
    } else {
        median = sorted[Math.floor(length / 2)];
    }

    const frekuensi = {};
    let maxFreq = 0;
    let mode = null;
    let hasDuplicates = false;


    arr.forEach(num => {
        frekuensi[num] = (frekuensi[num] || 0) + 1;
        if (frekuensi[num] > maxFreq) {
            hasDuplicates = true;
            maxFreq = frekuensi[num];
            mode = num;
        }
        if (maxFreq === 1) mode = null;
    });


    const doubled = arr.map(x => x * 2);
    const squared = arr.map(x => x ** 2);
    const filtered = arr.filter(x => x > 4);
    const reversed = arr.reverse();


    const sortedDesc = [...arr].sort((a, b) => b - a);

    const allNumbers = arr.every(x => typeof x === "number");
    const hasNegatives = arr.some(x => x < 0);
    const hasZeros = arr.some(x => x === 0)

    return {
        original,
        length,
        statistics: {
            sum,
            average,
            min,
            max,
            median,
            mode
        },
        transformations: {
            doubled,
            squared,
            filtered,
            reversed
        },
        sorted: {
            ascending: sorted,
            descending: sortedDesc
        },
        validation: {
            allNumbers,
            hasNegatives,
            hasZeros,
            hasDuplicates
        }
    };

}

let data = [5, 2, 8, 1, 9, 5];
let result = arrayAnalyzer(data);
console.log(result);