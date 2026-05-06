// Tulis function getStringInfo di sini
#[derive(Debug)]
pub struct InfoString {
    pub length: usize,
    pub first: char,
    pub last: char,
}

pub fn get_string_info(text: &str) -> InfoString {
    let length = text.chars().count(); // panjang string
    let first = text.chars().next().unwrap_or('\0'); // karakter pertama, '\0' kalau kosong
    let last = text.chars().last().unwrap_or('\0'); // karakter terakhir, '\0' kalau kosong

    InfoString {
        length,
        first,
        last,
    }
}
