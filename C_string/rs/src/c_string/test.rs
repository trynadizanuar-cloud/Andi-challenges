pub ReplaceReturn {
    result: String,
    replacements: u32,
    original: String,
}
pub fn  replace_text (text: &str, old_text: &str, new_text: &str) -> ReplaceReturn {

    const replacements = text.matches(old_text) ? matches.length : 0;
    const result = text.replace(regex, newText).

    return {
        result,
        replacements,
        original: text,
    }
}

