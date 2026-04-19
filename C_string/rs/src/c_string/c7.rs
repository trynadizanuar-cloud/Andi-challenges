pub struct ReplaceReturn {
    pub result: String,
    pub replacements: u32,
    pub original: String,
}

pub fn replace_text(text: &str, old_text: &str, new_text: &str) -> ReplaceReturn {
    let replacements = text.matches(old_text).count() as u32;
    let result = text.replace(old_text, new_text);

    ReplaceReturn {
        result,
        replacements,
        original: text.to_string(),
    }
}
