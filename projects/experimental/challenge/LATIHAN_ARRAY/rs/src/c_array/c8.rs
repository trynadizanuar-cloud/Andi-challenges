pub struct NumberResult {
    pub original: Vec<i32>,
    pub sum: Option<i32>,
    pub product: Option<i32>,
    pub max: Option<i32>,
    pub min: Option<i32>,
    pub sorted_asc: Option<Vec<i32>>,
    pub sorted_desc: Option<Vec<i32>>,
}

pub struct StringResult {
    pub original: Vec<String>,
    pub concatenated: Option<String>,
    pub longest: Option<String>,
    pub shortest: Option<String>,
    pub sorted_asc: Option<Vec<String>>,
    pub sorted_desc: Option<Vec<String>>,
}
pub fn aggregate_numbers(arr: &Vec<i32>) -> NumberResult {
    if arr.is_empty() {
        return NumberResult {
            original: arr.clone(),
            sum: None,
            product: None,
            max: None,
            min: None,
            sorted_asc: None,
            sorted_desc: None,
        };
    }

    let sum: i32 = arr.iter().sum();
    let product: i32 = arr.iter().product();
    let max = *arr.iter().max().unwrap();
    let min = *arr.iter().min().unwrap();

    let mut sorted_asc = arr.clone();
    sorted_asc.sort();

    let mut sorted_desc = arr.clone();
    sorted_desc.sort_by(|a, b| b.cmp(a));

    NumberResult {
        original: arr.clone(),
        sum: Some(sum),
        product: Some(product),
        max: Some(max),
        min: Some(min),
        sorted_asc: Some(sorted_asc),
        sorted_desc: Some(sorted_desc),
    }
}
pub fn aggregate_strings(arr: &Vec<String>) -> StringResult {
    if arr.is_empty() {
        return StringResult {
            original: arr.clone(),
            concatenated: None,
            longest: None,
            shortest: None,
            sorted_asc: None,
            sorted_desc: None,
        };
    }

    let concatenated = arr.join(""); // concat semua string
    let longest = arr
        .iter()
        .fold(
            &arr[0],
            |acc, item| {
                if item.len() > acc.len() {
                    item
                } else {
                    acc
                }
            },
        )
        .clone();
    let shortest = arr.iter().min_by_key(|s| s.len()).unwrap().clone();

    let mut sorted_asc = arr.clone();
    sorted_asc.sort();

    let mut sorted_desc = arr.clone();
    sorted_desc.sort_by(|a, b| b.cmp(a));

    StringResult {
        original: arr.clone(),
        concatenated: Some(concatenated),
        longest: Some(longest),
        shortest: Some(shortest),
        sorted_asc: Some(sorted_asc),
        sorted_desc: Some(sorted_desc),
    }
}
