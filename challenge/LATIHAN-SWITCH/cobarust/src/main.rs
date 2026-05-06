fn main() {
    soal7()
}

// fn soal1 () {
//     let nomor_hari = 3;
//     let nama_hari = match nomor_hari {
//         1 => "Senin",
//         2 => "Selasa",
//         3 => "Rabu",
//         4 => "Kamis",
//         5 => "Jumat",
//         6 => "Sabtu",
//         7 => "Minggu",
//         _ => "Nomor hari tidak valid",
//     };

//     println!("Hari ke-{}: {}", nomor_hari, nama_hari);
// }

// fn soal2() {
//     let pilihan = 2;
// // Tulis kode switch statement di sini
// let (menu,harga) = match pilihan {
//     1 => ("Nasi Goreng",15000),
//     2 => ("Mie Ayam",12000),
//     3 => ("Bakso",10000),
//     4 => ("Es Teh",5000),
//     _ => ("Menu tidak tersedia",0),
// };
// if harga > 0 {
//     println! ("Anda Memilih : {}",menu);
//     println! ("Harga        :Rp.{}",harga);
// }
// else {
//     println! ("Menu Tidak Tersedia!");
// }
// }

// fn soal3 (){
//     let grade = "B";
// // Tulis kode switch statement di sini
//     let penilaian = match grade {
//         "A" => "Sangat Baik",
//         "B" => "Baik",
//         "C" => "Cukup",
//         "D" => "Kurang",
//         _ => "Sangat Kurang",
//     };

//     // output
//     println! ("Grade {}: {}",grade,penilaian);
// }

// fn soal4() {
//     let bulan = 2;

//     // Gunakan match untuk menentukan nama bulan dan jumlah hari
//     let (nama_bulan, jumlah_hari) = match bulan {
//         1 => ("Januari", 31),
//         2 => ("Februari", 28),
//         3 => ("Maret", 31),
//         4 => ("April", 30),
//         5 => ("Mei", 31),
//         6 => ("Juni", 30),
//         7 => ("Juli", 31),
//         8 => ("Agustus", 31),
//         9 => ("September", 30),
//         10 => ("Oktober", 31),
//         11 => ("November", 30),
//         12 => ("Desember", 31),
//         _ => ("Tidak diketahui", 0),
//     };

//     if jumlah_hari > 0 {
//         println!(
//             "Bulan ke-{} ({}) memiliki {} hari",
//             bulan, nama_bulan, jumlah_hari
//         );
//     } else {
//         println!("Bulan tidak valid");
//     }
// }

// fn soal5() {
//     let angka1 = 15;
//     let angka2 = 4;
//     let operator = "%";
//     // Tulis kode switch statement di sini
//     match operator {
//         "+" => {
//             println!("{} + {} = {}", angka1, angka2, angka1 + angka2);
//         }
//         "-" => {
//             println!("{} - {} = {}", angka1, angka2, angka1 - angka2);
//         }
//         "*" => {
//             println!("{} * {} = {}", angka1, angka2, angka1 * angka2);
//         }
//         "/" => {
//             if angka2 != 0 {
//                 println!("{} / {} = {}", angka1, angka2, angka1 / angka2);
//             } else {
//                 println!("Error : pembagian dengan nol");
//             }
//         }
//         "%" => {
//             if angka2 != 0 {
//                 println!("{} % {} = {}", angka1, angka2, angka1 % angka2);
//             } else {
//                 println!("Error : modulo dengan nol");
//             }
//         }
//         _ => {
//             println!("error : operator tidak valid");
//         }
//     }
// }

// fn soal6() {
//     let warna = "hitam";
//     // Tulis kode switch statement di sini

//     match warna {
//         "merah" => {
//             println!("Lampu Merah : Berhenti");
//         }
//         "kuning" => {
//             println!("Lampu Kuning : Hati -hati, Bersiap berhenti");
//         }
//         "hijau" => {
//             println!("Lampu Hijau : Jalan");
//         }
//         _ => {
//             println!("Lampu Tidak Berfungsi");
//         }
//     }
// }

fn soal7() {
    let size = "L";
    // Tulis kode switch statement di sini
    match size {
        "S" => {
            println!("Size S : Small (36-38)");
        }
        "M" => {
            println!("Size M  : Medium (40-42)");
        }
        "L" => {
            println!("Size L : Large (44-46)");
        }
        "XL" => {
            println!("Size XL : Xtra Large (48-50)");
        }
        _ => {
            println!("Size Tidak Tersedia");
        }
    }
}
