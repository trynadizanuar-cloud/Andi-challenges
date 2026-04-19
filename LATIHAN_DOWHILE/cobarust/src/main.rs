// use std::io::{self, Write};

fn main() {
    soal10()
}

// fn main() {
//     let mut lanjut = String::new();
//     // Tulis kode do-while loop di sini
//     loop {
//         let mut input = String::new();
//         println!("Masukan Angka :");
//         io::stdout().flush().unwrap();
//         io::stdin().read_line(&mut input).unwrap();

//         let angka: i32 = input.trim().parse().expect("input tidak valid");
//         println!("Kuadrat dari {} adalah : {}", angka, angka * angka);

//         lanjut.clear();
//         print!("Apakah ingin melanjutkan? (y/n):");
//         io::stdout().flush().unwrap();
//         io::stdin().read_line(&mut lanjut).unwrap();

//         if lanjut.trim() != "y" {
//             break;
//         }
//     }
//     println!("Terima kasih telah menggunakan program!");
// }

// fn soal1() {
//     let mut lanjut = String::new();

//     loop {
//         let mut input = String::new();

//         print!("Masukan Angka : ");
//         io::stdout().flush().unwrap();
//         io::stdin().read_line(&mut input).unwrap();

//         let angka: i32 = input.trim().parse().unwrap();
//         println!("Kuadrat dari {} adalah : {}", angka, angka * angka);

//         lanjut.clear();
//         print!("Apakah ingin melanjutkan? (y/n): ");
//         io::stdout().flush().unwrap();
//         io::stdin().read_line(&mut lanjut).unwrap();

//         if lanjut.trim() != "y" {
//             break;
//         }
//     }

//     println!("Terima kasih telah menggunakan program!");
// }

// fn soal2() {
//     let mut saldo: i32 = 100_000;

//     // Tulis kode do-while loop di sini

//     loop {
//         println!(
//             "=== ATM MENU ===
// 1. Cek Saldo
// 2. Tarik Tunai
// 3. Setor Tunai
// 4. Keluar"
//         );

//         println!("Pilih Menu :");
//         io::stdout().flush().unwrap();
//         let mut pilihan = String::new();
//         io::stdin().read_line(&mut pilihan).unwrap();
//         let pilihan = pilihan.trim();

//         match pilihan {
//             "1" => {
//                 println!("Saldo Anda : Rp.{}", saldo);
//             }
//             "2" => {
//                 println!("Masukkan Jumlah: ");
//                 io::stdout().flush().unwrap();
//                 let mut input = String::new();
//                 io::stdin().read_line(&mut input).unwrap();
//                 let tarik: i32 = input.trim().parse().unwrap_or(0);

//                 if tarik > saldo {
//                     println!("Saldo tidak cukup!");
//                 } else {
//                     saldo -= tarik;
//                     println!("Penarikan berhasil. Saldo: Rp.{}", saldo);
//                 }
//             }
//             "3" => {
//                 println!("Masukkan jumlah : ");
//                 io::stdout().flush().unwrap();
//                 let mut input = String::new();
//                 io::stdin().read_line(&mut input).unwrap();
//                 let setor: i32 = input.trim().parse().unwrap_or(0);

//                 saldo += setor;
//                 println!("Setoran berhasil. Saldo: Rp.{}", saldo);
//             }
//             "4" => {
//                 println!("Keluar dari ATM...");
//                 break;
//             }
//             _ => {
//                 println!("Angka Tidak valid!");
//             }
//         }
//         if pilihan != "4" {
//             println!("Apakah ingin melakukan transaksi lain? (y/n): ");
//             io::stdout().flush().unwrap();
//             let mut lanjut = String::new();
//             io::stdin().read_line(&mut lanjut).unwrap();
//             let lanjut = lanjut.trim();
//             if lanjut != "y" {
//                 break; // keluar loop        }
//             }
//         }
//     }
//     println!("Terima kasih telah menggunakan ATM!");
// }

// fn soal3() {
//     let mut password = String::new();

//     loop {
//         print!("Buat password Anda: ");
//         io::stdout().flush().unwrap(); // Supaya prompt muncul di baris yang sama
//         password.clear();
//         io::stdin().read_line(&mut password).unwrap();
//         let password = password.trim(); // hapus spasi/enter

//         let panjang_min = password.len() >= 6;
//         let ada_angka = password.chars().any(|c| c.is_digit(10)); // cek ada digit

//         if panjang_min && ada_angka {
//             println!("Password Valid!");
//             break; // keluar loop
//         } else {
//             println!("Password tidak valid! Harus minimal 6 karakter dan mengandung angka.");
//         }
//     }

//     println!("Password berhasil dibuat: {}", password);
// }

// fn tes() {
//     loop {
//         println!("Buat Password anda :");
//         io::stdout().flush().unwrap();
//         let mut password = String::new();
//         io::stdin()
//             .read_line(&mut password)
//             .expect("Input tidak valid");

//         let re = Regex::new(
//             r"^(?:\d.{5,}|.{1,}\d.{4,}|.{2,}\d.{3,}|.{3,}\d.{2,}|.{4,}\d.{1,}|.{5,}\d)$",
//         )
//         .unwrap();

//         if re.is_match(password.trim()) {
//             println!("password valid!");
//             println!("Password berhasil dibuat! : {}", password);
//             break;
//         } else {
//             println!("password tidak valid! Harus minimal 6 karakter dan mengandung angka");
//         }
//     }
// }

// use rand::Rng;
// fn soal5() {
//     let mut angka: i32;
//     let mut percobaan = 0;

//     loop {
//         // 1. Generate angka random
//         angka = rand::thread_rng().gen_range(1..=100);
//         percobaan += 1;

//         // 2. Validasi (post-condition check)
//         if angka % 2 != 0 {
//             println!("Percobaan {}: {} (ganjil, coba lagi)", percobaan, angka);
//         } else {
//             println!("Percobaan {}: {} (genap, selesai!)", percobaan, angka);
//             break; // keluar loop → do-while behavior
//         }
//     }

//     println!(
//         "Angka genap ditemukan: {} dalam {} percobaan",
//         angka, percobaan
//     );
// }

// use rand::Rng;

// fn soal5() {
//     let mut angka: i32;
//     let mut percobaan = 0;

//     loop {
//         angka = rand::thread_rng().gen_range(1..=100);
//         percobaan += 1;

//         if angka % 2 != 0 {
//             println!("Percobaan {}: {} (ganjil, coba lagi)", percobaan, angka);
//         } else {
//             println!("percobaan {}: {} (genap, Selesai!", percobaan, angka);
//             break;
//         }
//     }
//     println!(
//         "Angka genap ditemukan: {} dalam {} percobaan",
//         angka, percobaan
//     );
// }

// use std::io;

// fn soal6() {
//     let soal: [&str; 3] = ["5 + 3 = ?", "10 - 4 = ?", "7 * 2 = ?"];
//     let jawaban: [i32; 3] = [8, 6, 14];
//     let mut jawaban_user = String::new();
//     let mut lanjut = String::new();
//     let mut nomor_soal: usize = 0;
//     let mut benar: i32 = 0;
//     // Tulis kode do-while loop di sini untuk kuis

//     loop {
//         println!("Soal {}: {}", nomor_soal + 1, soal[nomor_soal]);

//         jawaban_user.clear();
//         println!("Jawaban Anda :");
//         io::stdin().read_line(&mut jawaban_user).unwrap();
//         let jawaban_user: i32 = jawaban_user.trim().parse().unwrap();

//         if jawaban_user == jawaban[nomor_soal] {
//             println!("Benar!");
//             benar += 1;
//         } else {
//             println!("Salah! Jawaban yang benar :{} ", jawaban[nomor_soal]);
//         }

//         lanjut.clear();
//         println!("Lanjut ke soal berikutnya? (y/n):");
//         io::stdin().read_line(&mut lanjut).unwrap();
//         let lanjut = lanjut.trim();

//         nomor_soal += 1;

//         if lanjut != "y" || nomor_soal == soal.len() {
//             break;
//         }
//     }

//     println!("Kuis selesai! Skor:{}/{}", benar, nomor_soal);
// }

// fn soal6() {
//     let soal = ["5 + 3 = ?", "10 - 4 = ?", "7 * 2 = ?"];
//     let jawaban = [8, 6, 14];

//     let mut jawaban_user = String::new();
//     let mut lanjut = String::new();
//     let mut nomor_soal = 0;
//     let mut benar = 0;

//     loop {
//         // Tampilkan soal
//         println!("Soal {}: {}", nomor_soal + 1, soal[nomor_soal]);

//         // Input jawaban
//         jawaban_user.clear();
//         io::stdin().read_line(&mut jawaban_user).unwrap();
//         let jawaban_user: i32 = jawaban_user.trim().parse().unwrap_or(-1);

//         // Validasi jawaban
//         if jawaban_user == jawaban[nomor_soal] {
//             println!("Benar!");
//             benar += 1;
//         } else {
//             println!("Salah! Jawaban yang benar: {}", jawaban[nomor_soal]);
//         }

//         // Tanya lanjut
//         lanjut.clear();
//         println!("Lanjut ke soal berikutnya? (y/n):");
//         io::stdin().read_line(&mut lanjut).unwrap();
//         let lanjut = lanjut.trim().to_lowercase();

//         nomor_soal += 1;

//         // Post-condition check (mirip do-while)
//         if lanjut != "y" || nomor_soal >= soal.len() {
//             break;
//         }
//     }

//     println!("Kuis selesai! Skor: {}/{}", benar, nomor_soal);
// }

// fn soal7() {
//     let mut tambah_bilas = String::new();
//     let mut siklus_selesai = 0;

//     loop {
//         siklus_selesai += 1;
//         println!("\n=== SIKLUS PENCUCIAN {} ===", siklus_selesai);

//         println!("Mengisi air... selesai");
//         println!("Mencuci... selesai");
//         println!("Membilas... selesai");
//         println!("Mengeringkan... selesai");

//         // Tanya user
//         tambah_bilas.clear();
//         println!("Tambah siklus pembilasan? (y/n):");
//         io::stdin().read_line(&mut tambah_bilas).unwrap();
//         let tambah_bilas = tambah_bilas.trim().to_lowercase();

//         // Post-condition check
//         if tambah_bilas != "y" {
//             break;
//         }
//     }

//     println!("Mesin cuci selesai! Total siklus: {}", siklus_selesai);
// }

// use rand::Rng;

// fn soal8() {
//     let nama_depan = "user";
//     let mut username: String;
//     let mut puas = String::new();
//     let mut percobaan = 0;

//     loop {
//         percobaan += 1;

//         // Generate angka random 0..9999
//         let angka_random = rand::thread_rng().gen_range(0..10000);
//         username = format!("{}{}", nama_depan, angka_random);

//         println!(
//             "Percobaan {}: Username yang dihasilkan: {}",
//             percobaan, username
//         );

//         // Tanya user
//         puas.clear();
//         println!("Apakah Anda puas dengan username ini? (y/n):");
//         io::stdin().read_line(&mut puas).unwrap();
//         let puas = puas.trim().to_lowercase();

//         // Post-condition check
//         if puas == "y" {
//             break;
//         }
//     }

//     println!(
//         "Username final: {} (dibuat dalam {} percobaan)",
//         username, percobaan
//     );
// }

// // use std::io;
// use std::collections::VecDeque;

// fn soal10() {
//     let mut antrian: VecDeque<String> = VecDeque::from(vec![
//         "Budi".to_string(),
//         "Sari".to_string(),
//         "Andi".to_string(),
//     ]);
//     let mut nasabah_dilayani = 0;
//     let mut input = String::new();
//     let mut ada_nasabah_baru;

//     loop {
//         // Layani semua nasabah yang ada di antrian
//         while let Some(nasabah) = antrian.pop_front() {
//             nasabah_dilayani += 1;
//             println!("Melayani nasabah: {}", nasabah);
//             if !antrian.is_empty() {
//                 println!("Sisa antrian: {} orang", antrian.len());
//             } else {
//                 println!("Antrian kosong.");
//             }
//         }

//         // Tanyakan apakah ada nasabah baru
//         input.clear();
//         println!("Ada nasabah baru yang datang? (y/n):");
//         io::stdin().read_line(&mut input).unwrap();
//         ada_nasabah_baru = input.trim().to_lowercase();

//         if ada_nasabah_baru == "y" {
//             input.clear();
//             println!("Nasabah baru:");
//             io::stdin().read_line(&mut input).unwrap();
//             let nama_baru = input.trim().to_string();
//             antrian.push_back(nama_baru);
//         }

//         if antrian.is_empty() && ada_nasabah_baru != "y" {
//             break; // tidak ada nasabah lagi → keluar loop
//         }
//     }

//     println!("Bank tutup. Total nasabah dilayani: {}", nasabah_dilayani);
// }

// versi dzikri
// fn soal5() {
//     let mut angka_genap: bool = false;
//     let mut percobaan: i32 = 1;
//     loop {
//         let angka_random: i32 = rand::thread_rng().gen_range(1..101);

//         if angka_random % 2 == 1 {
//             println!(
//                 "percobaan ke- {} : {} (ganjil,coba lagi)",
//                 percobaan, angka_random
//             );
//             percobaan += 1;
//             continue;
//         } else {
//             angka_genap = true;
//             break;
//         }
//     }
//     println!(
//         "Angka genap ditemukan: {} dalam {} percobaan",
//         angka_genap, percobaan
//     );
// }

// versi dzikri no.7
// let tahap = ["Mengisi air", "Mencuci", "Membilas", "Mengeringkan"];
// let mut siklusSelesai: i32 = 0;
// // Tulis kode do-while loop di sini untuk simulasi mesin cuci

// loop {
//     siklusSelesai += 1;
//     println!("=== SIKLUS PENCUCIAN {} ===", siklusSelesai);

//     for item in tahap.iter(){
//         println!("{}...selesai", item);
//     }

//     let mut tambahBilas: String = String::new ();
//     print!("Tambah siklus pembilasan? (y/n):");
//     io:: stdout().flush().unwrap();
//     io:: stdin()
//         .read_line(& mut tambahBilas)
//         .expect("input tidak valid");

//     if tambahBilas.trim() != "y" {
//         break;
//     }
// }
// println!("Mesin cuci selesai! Total siklus: {}", siklusSelesai);

// soal8() {
// let namaDepan:&str = "user";
// let mut username: String = "".to_string();
// let mut percobaan: i32 = 0;

// loop{
// percobaan +=1 ;
// let angka_random :i32 = rand::thread_rng().gen_range(1..10000);

// username = format!("{}{}", namaDepan, angka_random);
// println!("percobaan {} : username yang dihasilkan : {}{}", percobaan,namaDepan, angka_random);

// let mut puas = String::new();
// print!("Apakah Anda puas dengan username ini? (y/n):");
// io::stdout().flush().unwrap();
// io::stdin()
// .read_line(&mut puas)
// .expect("input tidak valid");
// if puas.trim() == "y" {
// break;
// }
// }
// println!("username final: {} (dibuat dalam : {} percobaan)", username, percobaan);
// }

// use rand::Rng;
// use std::io;

// fn soal9() {
//     let tahap_instalasi = [
//         "Download file",
//         "Extract file",
//         "Install program",
//         "Setup konfigurasi",
//     ];

//     let mut berhasil = false;
//     let mut percobaan = 0;

//     loop {
//         percobaan += 1;
//         println!("=== PERCOBAAN INSTALASI {} ===", percobaan);

//         let mut sukses = true; // anggap berhasil dulu

//         for item in tahap_instalasi {
//             let berhasil_tahap: bool = rand::thread_rng().gen_bool(0.8);

//             if berhasil_tahap {
//                 println!("{}... selesai", item);
//             } else {
//                 println!("{}... GAGAL", item);
//                 sukses = false;
//             }
//         }

//         if sukses {
//             println!("\nInstalasi berhasil dalam {} percobaan!", percobaan);
//             berhasil = true;
//             break;
//         } else {
//             println!("\nInstalasi gagal! Coba lagi? (y/n): ");

//             let mut cobalagi = String::new();
//             io::stdin()
//                 .read_line(&mut cobalagi)
//                 .expect("Gagal membaca input");

//             if cobalagi.trim().to_lowercase() != "y" {
//                 println!("Instalasi dibatalkan setelah {} percobaan.", percobaan);
//                 break;
//             }
//         }
//     }

//     // hanya penanda akhir (opsional)
//     if berhasil {
//         // sudah ditangani di atas
//     }
// }

// use std::io::{self, Write};

// fn soal10() {
//     let mut antrian: Vec<String> = vec!["Budi".to_string(), "Sari".to_string(), "Andi".to_string()];
//     let mut nasabah_dilayani = 0;
//     // Tulis kode do-while loop di sini untuk simulasi antrian bank

//     loop {
//         while !antrian.is_empty() {
//             let nasabah = antrian.remove(0);
//             nasabah_dilayani += 1;

//             println!("Melayani nasabah: {}", nasabah);
//             println!("Sisa antrian: {} orang", antrian.len());
//         }
//         println!("Antrian kosong.");

//         let mut ada_nasabah_baru = String::new();
//         print!("Ada nasabah baru yang datang? (y/n):");
//         io::stdout().flush().unwrap();
//         io::stdin().read_line(&mut ada_nasabah_baru).unwrap();

//         if ada_nasabah_baru.trim() == "y" {
//             let mut nama_baru = String::new();
//             print!("Nasabah baru:");
//             io::stdout().flush().unwrap();
//             io::stdin().read_line(&mut nama_baru).unwrap();

//             antrian.push(nama_baru.trim().to_string());
//         } else {
//             break;
//         }
//     }
//     println!("Bank tutup. Total nasabah dilayani:{} ", nasabah_dilayani);
// }

use std::io::{self, Write};

fn soal10() {
    let mut antrian: Vec<String> = vec!["Budi".to_string(), "Sari".to_string(), "Andi".to_string()];
    let mut nasabah_dilayani = 0;

    // Tulis kode do-while loop di sini untuk simulasi antrian bank
    loop {
        while !antrian.is_empty() {
            let nasabah = antrian.remove(0);
            nasabah_dilayani += 1;

            println!("Melayani nasabah: {}", nasabah);
            println!("Sisa antrian: {} orang", antrian.len());
        }
        println!("Antrian kosong.");

        let mut ada_nasabah_baru = String::new();
        print!("Ada nasabah baru yang datang? (y/n):");
        io::stdout().flush().unwrap();
        io::stdin().read_line(&mut ada_nasabah_baru).unwrap();

        if ada_nasabah_baru.trim() == "y" {
            let mut nama_baru = String::new();
            print!("Nasabah baru:");
            io::stdout().flush().unwrap();
            io::stdin().read_line(&mut nama_baru).unwrap();

            antrian.push(nama_baru.trim().to_string());
        } else {
            break;
        }
    }
    println!("Bank tutup. Total nasabah dilayani: {} ", nasabah_dilayani);
}
