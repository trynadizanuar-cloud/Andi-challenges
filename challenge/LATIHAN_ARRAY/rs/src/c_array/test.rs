#[allow(dead_code)]
#[derive(Debug)]
pub enum Value {
    Number(i32),
    Str(String),
    Null,
    Undefined,
}
#[allow(dead_code)]
#[derive(Debug)]
pub struct Stats {
    pub total: usize,
    pub numbers: usize,
    pub strings: usize,
    pub nulls: usize,
    pub undefined: usize,
}
#[allow(dead_code)]
#[derive(Debug)]
pub struct ValidateResult {
    pub is_valid: bool,
    pub all_numbers: bool,
    pub has_nulls: bool,
    pub has_undefined: bool,
    pub stats: Stats,
    pub cleaned: Vec<i32>,
}

pub fn validate_array_data(arr: &[Value]) -> ValidateResult {
    let mut numbers_count = 0;
    let mut strings_count = 0;
    let mut nulls_count = 0;
    let mut undefined_count = 0;
    let mut cleaned = Vec::new();

    for item in arr {
        match item {
            Value::Number(n) => {
                numbers_count += 1;
                cleaned.push(*n);
            }
            Value::Str(_) => {
                strings_count += 1;
            }
            Value::Null => {
                nulls_count += 1;
            }
            Value::Undefined => {
                undefined_count += 1;
            }
        }
    }

    let total = arr.len();
    let all_numbers = numbers_count == total;
    let has_nulls = nulls_count > 0;
    let has_undefined = undefined_count > 0;
    let is_valid = all_numbers && !has_nulls && !has_undefined;

    ValidateResult {
        is_valid,
        all_numbers,
        has_nulls,
        has_undefined,
        stats: Stats {
            total: total,
            numbers: numbers_count,
            strings: strings_count,
            nulls: nulls_count,
            undefined: undefined_count,
        },
        cleaned,
    }
}
