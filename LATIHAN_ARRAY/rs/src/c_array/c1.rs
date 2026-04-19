#[derive(Debug)]
pub struct ArrayInfo<T> {
    pub length: usize,
    pub first: Option<T>,
    pub last: Option<T>,
    pub is_empty: bool,
}

pub fn get_array_info<T: Clone>(arr: &[T]) -> ArrayInfo<T> {
    ArrayInfo {
        length: arr.len(),
        first: arr.first().cloned(),
        last: arr.last().cloned(),
        is_empty: arr.is_empty(),
    }
}
