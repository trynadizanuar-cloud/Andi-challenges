#[derive(Debug)]
pub struct StackResult {
    pub result: Vec<String>,
    pub log: Vec<String>,
}

pub fn manage_stack(
    arr: Vec<String>,
    operations: Vec<&str>,
) -> StackResult {
    let mut stack = arr.clone();
    let mut log: Vec<String> = Vec::new();

    for operasi in operations {
        if operasi.starts_with("push:") {
            let value = operasi[5..].to_string();
            stack.push(value.clone());
            log.push(format!("Added {}", value));
        } else if operasi == "pop" {
            if let Some(removed) = stack.pop() {
                log.push(format!("Removed {}", removed));
            }
        }
    }

    StackResult { result: stack, log }
}
