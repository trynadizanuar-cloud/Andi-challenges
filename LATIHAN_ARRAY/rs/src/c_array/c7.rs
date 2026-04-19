// c7.rs

pub struct CArray {
    pub original: Vec<i32>,
    pub transformed: Vec<i32>,
    pub sum: i32,
    pub average: f32,
}

pub fn transform_array(arr: &Vec<i32>, multiply: i32, add: i32, log_each: bool) -> CArray {
    let mut sum = 0;

    // map → transform array
    let transformed: Vec<i32> = arr
        .iter()
        .enumerate()
        .map(|(i, item)| {
            let result = item * multiply + add;
            sum += result;

            // forEach (efek samping)
            if log_each {
                println!("Processing ke - {} : {} -> {}", i + 1, item, result);
            }

            result
        })
        .collect();

    CArray {
        original: arr.clone(),
        transformed,
        sum,
        average: if arr.is_empty() {
            0.0
        } else {
            sum as f32 / arr.len() as f32
        },
    }
}
