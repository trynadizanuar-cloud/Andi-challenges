// Tulis function createProfile di sini
pub fn create_profile(nama: &str, profil: Option<&str>) -> String {
    let profil = profil.unwrap_or("Member");
    format!("Profil: {} ({})", nama, profil)
}
