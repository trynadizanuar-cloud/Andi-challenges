function analyzeElements(arr) {
    const Hasil = [];

    for (let i = 0; i < arr.length; i++) {
        Hasil.push({
            value: arr[i],
            index: i,
            type: typeof arr[i],
        });
    }

    return Hasil;
};

// driver code
console.log(analyzeElements([10, "hello", true]));
console.log(analyzeElements([1, 2, 3]));
