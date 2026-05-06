interface Operations {
    multiply?: number,
    add?: number,
    logEach: boolean
}

interface TransformResult {
    original: number[];
    transformed: number[],
    stats: {
        proccesed: number,
        sum: number,
        average: number
    }
}
type TransformFunction = (arr: number[], operations: Operations) => TransformResult;

const transformArray: TransformFunction = (arr: number[], operations: Operations): TransformResult => {
    let transformed = [];
    let sum = 0;

    transformed = arr.map(function (item, index) {
        let result = item;

        if (operations.multiply !== undefined) {
            result *= operations.multiply;
        }
        if (operations.add !== undefined) {
            result += operations.add;
        }
        sum += result;
        if (operations.logEach) {
            console.log(`Processing: ${index + 1} -> ${item}`);
        }
        return result
    });
    return {
        original: arr,
        transformed: transformed,
        stats: {
            proccesed: transformed.length,
            sum: sum,
            average: sum / transformed.length

        }
    }
}
const numbers: number[] = [1, 2, 3, 4, 5];
console.log(transformArray(numbers, {
    multiply: 2,
    add: 1,
    logEach: true
}));

export { }