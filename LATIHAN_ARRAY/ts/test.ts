interface ValidateResult {
    isValid: boolean,
    allNumbers: boolean,
    hasNulls: boolean,
    hasUndefined: boolean,
    stats: {
        total: number,
        numbers: number,
        strings: number,
        nulls: number,
        undefined: number
    }
    cleaned: number[];
}
type ValidateFunction = (arr: (number | string | boolean | null | undefined)[]) => ValidateResult;
const validateArrayData: ValidateFunction = (arr: (number | string | boolean | null | undefined)[]): ValidateResult => {

    const stats = {
        total: arr.length,
        numbers: arr.filter(x => typeof x === "number").length,
        strings: arr.filter(x => typeof x === "string").length,
        nulls: arr.filter(x => x === null).length,
        undefined: arr.filter(x => x === undefined).length,
    };

    const allNumbers = arr.every(x => typeof x === "number");
    const hasNulls = arr.some(x => x === null);
    const hasUndefined = arr.some(x => x === undefined);
    const isValid = allNumbers && !hasNulls && !hasUndefined;

    const cleaned = arr.filter((x): x is number => typeof x === "number");

    return {
        isValid,
        allNumbers,
        hasNulls,
        hasUndefined,
        stats,
        cleaned
    }
}
let data1 = [1, 2, 3, 4, 5];
let data2 = [1, "2", 3, null, 5, undefined];
console.log(validateArrayData(data1));
console.log(validateArrayData(data2));

