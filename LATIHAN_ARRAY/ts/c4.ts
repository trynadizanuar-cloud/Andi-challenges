// Tulis function manageQueue di sini
type Operations = string;

interface stats {
    enqueued: number;
    dequeued: number;
    operations: number;
}

interface QueueResult<T> {
    result: T[];
    stats: stats;
}

const manageQueue = <T>(arr: T[], operations: Operations[]): QueueResult<T> => {
    const queue: T[] = [...arr];

    const stats: stats = {
        enqueued: 0,
        dequeued: 0,
        operations: operations.length,
    }

    for (const op of operations) {
        if (op.startsWith("enqueue:")) {
            let nilai = op.split(":")[1] as unknown as T;
            queue.push(nilai);
            stats.enqueued++;
        } else if (op === "dequeue") {
            if (queue.length > 0) {
                queue.shift();
                stats.dequeued++;
            }
        }
    } return {
        result: queue,
        stats
    }
}


console.log(manageQueue([1, 2], ["enqueue:3", "dequeue", "enqueue:4"]));
console.log(manageQueue([], ["enqueue:x", "enqueue:y", "dequeue"]));

export { }