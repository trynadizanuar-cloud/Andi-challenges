// Tulis function analyzeCharacters di sini
#[allow(dead_code)]
#[derive(Debug)]
pub struct Character {
    char: char,
    position: usize,
}

pub fn analyze_characters(text: &str) -> Vec<Character> {
    let mut result: Vec<Character> = Vec::new();

    for (i, c) in text.chars().enumerate() {
        result.push(Character {
            char: c,
            position: i,
        });
    }
    result
}
