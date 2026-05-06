// Function untuk mencari data di array berdasarkan kriteria
function searchArray(arr, criteria) {
    const { type, value, condition } = criteria;

    // filter → menyaring data berdasarkan tipe (number / string)
    const typedArr = arr.filter(item => typeof item === type);
    let filtered = [];

    // filter → pencarian berdasarkan kondisi untuk number
    if (type === "number") {
        if (condition === "greater") filtered = typedArr.filter(item => item > value);
        else if (condition === "less") filtered = typedArr.filter(item => item < value);
        else if (condition === "equal") filtered = typedArr.filter(item => item === value);
    }
    // filter → pencarian berdasarkan kondisi untuk string
    else if (type === "string") {
        if (condition === "contains") filtered = typedArr.filter(item => item.includes(value));
        else if (condition === "equal") filtered = typedArr.filter(item => item === value);
    }

    // find → mengambil elemen pertama dari hasil filter
    let found = filtered.find(item => true);

    // indexOf → search operation untuk mengetahui posisi data
    let index = arr.indexOf(value);
    let existsByIndex = index !== -1;

    // includes → search operation (disesuaikan dengan tipe data)
    let includesResult;
    if (type === "number") {
        includesResult = existsByIndex; // hasil pencarian dari indexOf
    } else {
        includesResult = filtered.includes(value);
    }

    // return hasil pencarian sesuai format soal
    return {
        filtered,
        found,
        includes: includesResult,
        count: filtered.length
    };
}

let numbers = [1, 5, 10, 15, 20];
console.log(searchArray(numbers, { type: "number", value: 10, condition: "greater" }));

let words = ["apple", "banana", "cherry"];
console.log(searchArray(words, { type: "string", value: "an", condition: "contains" }));