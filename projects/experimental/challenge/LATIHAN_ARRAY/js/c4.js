function manageQueue(arr, operations) {
    // clone array supaya tidak mengubah array asli
    const queue = [...arr];

    // statistik
    const stats = {
        enqueued: 0,
        dequeued: 0,
        operations: operations.length
    };

    for (let op of operations) {
        if (op.startsWith("enqueue:")) {
            const value = op.split(":")[1];
            queue.push(value); // enqueue ke akhir
            stats.enqueued++;
        } else if (op === "dequeue") {
            if (queue.length > 0) {
                queue.shift(); // dequeue dari awal
                stats.dequeued++;
            }
        }
    }

    return {
        result: queue,
        stats
    };
}

// driver code
console.log(manageQueue([1, 2], ["enqueue:3", "dequeue", "enqueue:4"]));
console.log(manageQueue([], ["enqueue:x", "enqueue:y", "dequeue"]));

// | Baris                    | Fungsi               |
// | ------------------------ | -------------------- |
// | `for...of`               | Loop setiap operasi  |
// | `startsWith("enqueue:")` | Deteksi enqueue      |
// | `split(":")[1]`          | Ambil nilai          |
// | `push()`                 | Masuk belakang queue |
// | `shift()`                | Keluar depan queue   |
// | `stats++`                | Hitung operasi       |
