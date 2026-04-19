#[allow(dead_code)]
pub fn convert_case(text: &str, mode: &str) -> String {
    if mode == "upper" {
        text.to_uppercase()
    } else if mode == "lower" {
        text.to_lowercase()
    } else if mode == "title" {
        text.split_whitespace()
            .map(|word| {
                let mut chars = word.chars();
                match chars.next() {
                    Some(first) => {
                        first.to_uppercase().collect::<String>() + &chars.as_str().to_lowercase()
                    }
                    None => String::new(),
                }
            })
            .collect::<Vec<String>>()
            .join(" ")
    } else {
        text.to_string()
    }
}
