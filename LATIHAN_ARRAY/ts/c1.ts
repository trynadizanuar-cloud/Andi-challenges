type array_info = (arr: any[]) => {

    length: number;
    first: any;
    last: any;
    isEmpty: boolean;
};
const getArrayInfo: array_info = (arr: any[]) => {
    return {
        length: arr.length,
        first: arr[0],
        last: arr[arr.length - 1],
        isEmpty: arr.length === 0
    };
};
console.log(getArrayInfo([1, 2, 3, 4, 5]));
console.log(getArrayInfo(["a", "b", "c"]));
console.log(getArrayInfo([]));



export { }


// type array_info = <T>(arr: T[]) => {
//     length: number;
//     first: T | undefined;
//     last: T | undefined;
//     isEmpty: boolean;
// };
// const getArrayInfo: array_info = <T>(arr: T[]) => {
//     return {
//         length: arr.length,
//         first: arr[0],
//         last: arr[arr.length - 1],
//         isEmpty: arr.length === 0
//     };
// };

// // Contoh penggunaan
// console.log(getArrayInfo([1, 2, 3, 4, 5]));
// console.log(getArrayInfo(["a", "b", "c"]));
// console.log(getArrayInfo([]));
