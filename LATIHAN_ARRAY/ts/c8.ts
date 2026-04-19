// Tulis function aggregateArray di sini
interface NumberResult {

    original: number[]
    sum?: number,
    product?: number,
    max?: number,
    min?: number,
    sortedAsc?: number[],
    sortedDesc?: number[]
}
interface StringResult {
    original: string[],
    concatenated?: string,
    longest?: string,
    shortest?: string,
    sortedAsc?: string[],
    sortedDesc?: string[]
}
type AggregateFunction = (arr: string[] | number[]) => NumberResult | StringResult;

const aggregateArray: AggregateFunction = (arr: string[] | number[]): StringResult | NumberResult => {

    if (arr.length === 0) return { original: arr as never[] };

    if (typeof arr[0] === "number") {
        const numbers = arr as number[];
        return {
            original: numbers,


            sum: numbers.reduce(function (acc, val) {
                return acc + val;
            }, 0),
            product: numbers.reduce(function (acc, val) {
                return acc * val;
            }, 1),
            max: numbers.reduce(function (acc, val) {
                return acc > val ? acc : val;
            }, arr[0]),
            min: numbers.reduce(function (acc, val) {
                return acc < val ? acc : val;
            }, arr[0]),
            sortedAsc: numbers.slice().sort(function (a, b) {
                return a - b;
            }),
            sortedDesc: numbers.slice().sort(function (a, b) {
                return b - a;
            }),

        }
    }

    else if (typeof arr[0] === "string") {
        const strings = arr as string[];
        return {
            original: strings,
            concatenated: strings.reduce(function (acc, val) {
                return acc + val;
            }, ""),
            longest: strings.reduce(function (acc, val) {
                return acc.length >= val.length ? acc : val;
            }, arr[0]),
            shortest: strings.reduce(function (acc, val) {
                return acc.length < val.length ? acc : val;
            }, arr[0]),
            sortedAsc: strings.slice().sort(),
            sortedDesc: strings.slice().sort().reverse()
        }
    }

}

console.log(aggregateArray([3, 1, 4, 1, 5, 9, 2, 6]));
console.log(aggregateArray(["banana", "apple", "cherry", "date"]));

export { }