#[derive(Debug, Clone)]
pub enum Value {
    Int(i32),
    Bool(bool),
    Str(String),
}

#[derive(Debug, Clone)]
pub struct InformasiElemen {
    pub value: Value,
    pub index: usize,
    pub r#type: String, // gunakan r#type karena 'type' keyword Rust
}

pub fn analyze_elements(arr: &[Value]) -> Vec<InformasiElemen> {
    arr.iter()
        .enumerate()
        .map(|(i, val)| InformasiElemen {
            value: val.clone(),
            index: i,
            r#type: match val {
                Value::Int(_) => "number".to_string(),
                Value::Str(_) => "string".to_string(),
                Value::Bool(_) => "boolean".to_string(),
            },
        })
        .collect()
}
