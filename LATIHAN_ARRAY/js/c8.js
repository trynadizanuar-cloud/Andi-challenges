
function aggregateArray(arr) {
    let result = { original: arr };

    if (arr.length === 0) return result;

    // Jika array number
    if (typeof arr[0] === "number") {
        // SUM
        result.sum = arr.reduce(function (acc, val) {
            return acc + val;
        }, 0);

        // PRODUCT
        result.product = arr.reduce(function (acc, val) {
            return acc * val;
        }, 1);

        // MAX
        result.max = arr.reduce(function (acc, val) {
            return val > acc ? val : acc;
        }, arr[0]);

        // MIN
        result.min = arr.reduce(function (acc, val) {
            return val < acc ? val : acc;
        }, arr[0]);

        // SORT ASC
        result.sortedAsc = arr.slice().sort(function (a, b) {
            return a - b;
        });

        // SORT DESC
        result.sortedDesc = arr.slice().sort(function (a, b) {
            return b - a;
        });
    }

    // Jika array string
    else {
        // CONCATENATION
        result.concatenated = arr.reduce(function (acc, val) {
            return acc + val;
        }, "");

        // LONGEST STRING
        result.longest = arr.reduce(function (acc, val) {
            return val.length > acc.length ? val : acc;
        }, arr[0]);

        // SHORTEST STRING
        result.shortest = arr.reduce(function (acc, val) {
            return val.length < acc.length ? val : acc;
        }, arr[0]);

        // SORT ASC
        result.sortedAsc = arr.slice().sort();

        // SORT DESC
        result.sortedDesc = arr.slice().sort().reverse();
    }

    return result;
}

// DRIVER CODE
console.log(aggregateArray([3, 1, 4, 1, 5, 9, 2, 6]));
console.log(aggregateArray(["banana", "apple", "cherry", "date"]));
