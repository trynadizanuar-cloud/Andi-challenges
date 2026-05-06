// Tulis function transformArray di sini
interface Operations {
    multiply?: number;
    add?: number;
    logEach?: boolean;
}
type TransformFunction = (arr: any[], operations: Operations) => {
    original: any[];
    transformed: any[];
    stats: {
        proccesed: number,
        sum: number,
        average: number
    }
}
const transformArray: TransformFunction = (arr, operations) => {
    let transformed = [];
    let sum = 0;

    transformed = arr.map(function (item) {
        let result = item;

        if (operations.multiply !== undefined) {
            result *= operations.multiply;
        } if (operations.add !== undefined) {
            result += operations.add;
        }

        return result
    });

    transformed.forEach(function (item, index) {
        sum += item;
        if (operations.logEach)
            console.log(`Processing: ${index + 1} -> ${item}`);
    })

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
let numbers = [1, 2, 3, 4, 5];
console.log(transformArray(numbers, {
    multiply: 2,
    add: 1,
    logEach: true
}));

export { }

// Tulis function aggregateArray di sini
// interface NumberResult {

//     original: number[]
//     sum?: number,
//     product?: number,
//     max?: number,
//     min?: number,
//     sortedAsc?: number[],
//     sortedDesc?: number[]
// }
// interface StringResult {
//     original: string[],
//     concatenated?: string,
//     longest?: string,
//     shortest?: string,
//     sortedAsc?: string[],
//     sortedDesc?: string[]
// }
// type AggregateFunction = (arr: string[] | number[]) => NumberResult | StringResult;

// const aggregateArray: AggregateFunction = (arr: string[] | number[]): StringResult | NumberResult => {

//     if (arr.length === 0) return { original: arr as never[] };

//     if (typeof arr[0] === "number") {
//         const numbers = arr as number[];
//         return {
//             original: numbers,


//             sum: numbers.reduce(function (acc, val) {
//                 return acc + val;
//             }, 0),
//             product: numbers.reduce(function (acc, val) {
//                 return acc * val;
//             }, 1),
//             max: numbers.reduce(function (acc, val) {
//                 return acc > val ? acc : val;
//             }, arr[0]),
//             min: numbers.reduce(function (acc, val) {
//                 return acc < val ? acc : val;
//             }, arr[0]),
//             sortedAsc: numbers.slice().sort(function (a, b) {
//                 return a - b;
//             }),
//             sortedDesc: numbers.slice().sort(function (a, b) {
//                 return b - a;
//             }),

//         }
//     }

//     else if (typeof arr[0] === "string") {
//         const strings = arr as string[];
//         return {
//             original: strings,
//             concatenated: strings.reduce(function (acc, val) {
//                 return acc + val;
//             }, ""),
//             longest: strings.reduce(function (acc, val) {
//                 return acc.length >= val.length ? acc : val;
//             }, arr[0]),
//             shortest: strings.reduce(function (acc, val) {
//                 return acc.length < val.length ? acc : val;
//             }, arr[0]),
//             sortedAsc: strings.slice().sort(),
//             sortedDesc: strings.slice().sort().reverse()
//         }
//     }

// }

// console.log(aggregateArray([3, 1, 4, 1, 5, 9, 2, 6]));
// console.log(aggregateArray(["banana", "apple", "cherry", "date"]));

// export { }