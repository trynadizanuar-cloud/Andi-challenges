mod c_function;
use c_function::validate_and_calculate_grade;

fn main() {
    let grade1 = validate_and_calculate_grade("Budi", 85);
    let grade2 = validate_and_calculate_grade("Sari", 150);
    let grade3 = validate_and_calculate_grade("Andi", 72);

    println!("Grade Budi: {:?}", grade1);
    println!("Grade Sari: {:?}", grade2);
    println!("Grade Andi: {:?}", grade3);
}

// fn main() {
//     // Panggil function dan gunakan return value
//     let total_bayar1 = process_order("Nasi Goreng", 2);
//     let total_bayar2 = process_order("Mie Ayam", 3);
//     println!(
//         "Total yang harus dibayar: Rp {} ",
//         total_bayar1 + total_bayar2
//     );
// }

// fn main() {
//     // Panggil function dengan slice
//     let total1 = sum_all_numbers(&[1, 2, 3]);
//     let total2 = sum_all_numbers(&[5, 10, 15, 20]);
//     let total3 = sum_all_numbers(&[2, 4, 6, 8, 10, 12]);

//     println!("Total (1,2,3): {}", total1);
//     println!("Total (5,10,15,20): {}", total2);
//     println!("Total (2,4,6,8,10,12): {}", total3);
// }

// fn main() {
//     // Panggil function dengan dan tanpa parameter kedua
//     let profil1 = create_profile("Budi", None);
//     let profil2 = create_profile("Sari", Some("Admin"));

//     println!("{}", profil1);
//     println!("{}", profil2);
// }

// fn main() {
//     // Panggil function dan hitung luas
//     let luas1 = calculate_rectang_le_area(10, 5);
//     let luas2 = calculate_rectang_le_area(7, 3);
//     println!("Luas persegi panjang (10x5): {} ", luas1);
//     println!("Luas persegi panjang (7x3): {}", luas2);
// }

// fn main() {
//     // Panggil function dengan data berbeda
//     display_user_info("Ahmad", 25, "Jakarta");
//     display_user_info("Lisa", 30, "Bandung");
// }
// mod c_function;
// use c_function::display_user_info;
// fn main() {
//     // Panggil function dengan data berbeda
//     display_user_info("Ahmad", 25, "Jakarta");
//     display_user_info("Lisa", 30, "Bandung");
// }

// mod c_function;
// use c_function::calculate_square;

// fn main() {
//     // Panggil function dan tampilkan hasilnya
//     let hasil_1 = calculate_square(5);
//     let hasil_2 = calculate_square(8);

//     println!("5 kuadrat = {}", hasil_1);
//     println!("8 kuadrat = {}", hasil_2);
// }

// mod c_function;
// use c_function::get_current_time;

// fn main() {
//     let waktu = get_current_time();
//     println!("Waktu sekarang: {}", waktu);
// }

// mod c_function;
// use c_function::greet_user;

// fn main() {
//     greet_user("Andi");
//     greet_user("Sari");
// }

// mod c_function;
// use c_function::say_hello;

// fn main() {
//     say_hello();
// }
