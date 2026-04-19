// generic type T untuk angka atau string
type ArrayOperations = <T>(
    arr: T[],
    start: number,
    deleteCount: number,
    items: T[]
) => {
    original: T[],
    sliced: T[],
    spliced: T[],
    removed: T[]
};

const arrayOperations: ArrayOperations = (arr, start, deleteCount, items) => {
    const original = [...arr];              // clone original
    const sliced = arr.slice(start, start + deleteCount); // slice tanpa mengubah arr
    const spliced = [...arr];               // clone untuk splice
    const removed = spliced.splice(start, deleteCount, ...items); // hapus & sisipkan items

    return { original, sliced, spliced, removed };
}

// testing
console.log(arrayOperations([1, 2, 3, 4, 5], 1, 2, [10, 20]));
console.log(arrayOperations(["a", "b", "c", "d"], 0, 1, ["x"]));
