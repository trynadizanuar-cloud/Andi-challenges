#[derive(Debug)]
pub struct QueueResult {
    pub result: Vec<String>, // hasil akhir queue
    pub stats: QueueStats,   // statistik operasi
}

#[derive(Debug)]
pub struct QueueStats {
    pub enqueued: usize,
    pub dequeued: usize,
    pub operations: usize,
}

pub fn manage_queue(arr: Vec<String>, operations: Vec<&str>) -> QueueResult {
    let mut queue = arr; // langsung gunakan arr, clone nggak perlu
    let mut enqueued = 0;
    let mut dequeued = 0;

    for op in operations.iter() {
        if op.starts_with("enqueue:") {
            let value = op[8..].to_string();
            queue.push(value);
            enqueued += 1;
        } else if op == &"dequeue" {
            if !queue.is_empty() {
                queue.remove(0); // FIFO: shift dari awal
                dequeued += 1;
            }
        }
    }

    let stats = QueueStats {
        enqueued,
        dequeued,
        operations: operations.len(),
    };

    QueueResult { result: queue, stats }
}
