trait Searchable {
    fn matches(&self, value: &str, condition: &str) -> bool;
    fn equals(&self, value: &str) -> bool;
}

impl Searchable for i32 {
    fn matches(&self, value: &str, condition: &str) -> bool {
        let val: i32 = value.parse().unwrap();

        match condition {
            "greater" => self > &val,
            "less" => self < &val,
            _ => false,
        }
    }

    fn equals(&self, value: &str) -> bool {
        self == &value.parse().unwrap()
    }
}

impl Searchable for String {
    fn matches(&self, value: &str, condition: &str) -> bool {
        match condition {
            "contains" => self.contains(value),
            _ => false,
        }
    }

    fn equals(&self, value: &str) -> bool {
        self == value
    }
}

#[derive(Debug)]
struct Criteria {
    value: String,
    condition: String,
}

#[derive(Debug)]
#[allow(dead_code)]
struct SearchResult<T> {
    found: Option<T>,
    filtered: Vec<T>,
    includes: bool,
    count: usize,
}

fn search_array<T>(arr: &Vec<T>, criteria: Criteria) -> SearchResult<T>
where
    T: Searchable + Clone + std::fmt::Debug,
{
    let filtered: Vec<T> = arr
        .iter()
        .filter(|item| item.matches(&criteria.value, &criteria.condition))
        .cloned()
        .collect();

    let found = arr
        .iter()
        .find(|item| item.matches(&criteria.value, &criteria.condition))
        .cloned();

    SearchResult {
        found,
        filtered: filtered.clone(),
        includes: arr.iter().any(|item| item.equals(&criteria.value)),
        count: filtered.len(),
    }
}

fn main() {
    let numbers = vec![1, 5, 10, 15, 20];

    let result_numbers = search_array(
        &numbers,
        Criteria {
            value: "10".to_string(),
            condition: "greater".to_string(),
        },
    );

    println!("{:?}", result_numbers);

    let words = vec![
        "apple".to_string(),
        "banana".to_string(),
        "cherry".to_string(),
    ];

    let result_words = search_array(
        &words,
        Criteria {
            value: "an".to_string(),
            condition: "contains".to_string(),
        },
    );

    println!("{:?}", result_words);
}

