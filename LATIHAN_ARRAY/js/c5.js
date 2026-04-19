function arrayOperations(arr, start, deleteCount, items) {
    // simpan original
    const original = [...arr]; // clone supaya tidak berubah

    // slice mengambil tanpa menghapus array asli
    const sliced = arr.slice(start, start + deleteCount);

    // splice (mengubah arr) menghapus dan sisipkan item baru jika ada 
    const spliced = [...arr]; // clone supaya tidak mengubah original array
    const removed = spliced.splice(start, deleteCount, ...items);

    return {
        original,
        sliced,
        spliced,
        removed
    };
}

// driver code
console.log(arrayOperations([1, 2, 3, 4, 5], 1, 2, [10, 20]));
console.log(arrayOperations(["a", "b", "c", "d"], 0, 1, ["x"]));
