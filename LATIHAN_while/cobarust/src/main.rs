fn main() {
    soal9()
}

// trust dengan loop
// fn soal1() {

//     use std::io;
//     let mut input = String::new();

//     // Loop until we successfully parse an integer between 1 and 10.
//     let angka: i32 = loop {
//         input.clear(); // important: clear previous contents
//         println!("Masukkan angka 1 - 10:");
//         io::stdin()
//             .read_line(&mut input)
//             .expect("Failed to read line");

//         match input.trim().parse::<i32>() {
//             Ok(n) if (1..=10).contains(&n) => break n,
//             Ok(n) => {
//                 println!("Input tidak valid ({}), masukkan angka 1-10", n);
//                 continue;
//             }
//             Err(_) => {
//                 println!("Masukan angka! (harus berupa bilangan bulat)");
//                 continue;
//             }
//         }
//     };
//     println!("Angka valid yang dimasukkan: {}", angka);
// }

// // by karkhi
// use std::cmp::Ordering;
// use std::io;

// fn main() {
// let angka_rahasia = 7;
// let mut percobaan = 0;

// loop {
// println!("Masukkan tebakan :");

// let mut tebakan = String::new(); // reset setiap loop

// io::stdin()
// .read_line(&mut tebakan)
// .expect("Failed to read line");

// let input: i32 = match tebakan.trim().parse() {
// Ok(num) => num,
// Err(_) => {
// println!("Masukkan bilangan bulat");
// continue; // kembali ke awal loop
// }
// };

// percobaan += 1;

// match input.cmp(&angka_rahasia) {
// Ordering::Less => println!("Terlalu kecil!"),
// Ordering::Greater => println!("Terlalu besar!"),
// Ordering::Equal => {
// println!(
// "Selamat! Anda berhasil menebak dalam {} percobaan",
// percobaan
// );
// break;
// }
// }
// }
// }

// use std::io;
// fn soal2() {
//     let mut input = String::new();
//     let mut valid = false;
//     let mut pilihan: i32 = 0;

//     while !valid {
//         input.clear();

//         println!("=== MENU KALKULATOR ===");
//         println!("1. Tambah");
//         println!("2. Kurang");
//         println!("3. Kali");
//         println!("4. Keluar");
//         println!("Pilih menu (1-4):");

//         if let Err(_) = io::stdin().read_line(&mut input) {
//             println!("Gagal membaca input, coba lagi.");
//             continue;
//         }

//         match input.trim().parse::<i32>() {
//             Ok(n) if (1..=4).contains(&n) => {
//                 pilihan = n;

//                 match pilihan {
//                     1 => println!("Anda memilih Tambah"),
//                     2 => println!("Anda memilih Kurang"),
//                     3 => println!("Anda memilih Kali"),
//                     4 => {
//                         println!("Terima kasih telah menggunakan program!");
//                         valid = true;
//                     }
//                     _ => {}
//                 }
//             }
//             Ok(_) => {
//                 println!("Pilihan tidak valid, masukkan angka 1-4");
//                 continue;
//             }
//             Err(_) => {
//                 println!("Masukan angka! (harus berupa bilangan bulat)");
//                 continue;
//             }
//         }
//     }
// }

// fn soal4() {
//     let kata = "programming";
//     let mut ditemukan = false;
//     let mut posisi = 0;

//     for (i, c) in kata.chars().enumerate() {
//         if c == 'a' {
//             ditemukan = true;
//             posisi = i;
//             break;
//         }
//     }

//     if ditemukan {
//         println!("Huruf 'a' ditemukan di posisi: {}", posisi);
//     } else {
//         println!("Huruf 'a' tidak ditemukan");
//     }
// }

// fn soal5() {
//     let mut angka: f64 = 100.0;
//     let mut langkah: u32 = 0;

//     while angka >= 1.0 {
//         langkah += 1;
//         let hasil = angka / 2.0;
//         println!("Langkah {}: {} / 2 = {}", langkah, angka, hasil);
//         angka = hasil;
//     }

//     println!("Proses selesai setelah {} langkah", langkah);
// }

// use std::io;

// fn soal6() {
//     let mut percobaan = 0;
//     let max_percobaan = 3;
//     let mut berhasil = false;

//     while percobaan < max_percobaan && !berhasil {
//         let mut password = String::new();
//         println!("Masukkan password:");
//         io::stdin().read_line(&mut password).expect("Gagal membaca input");
//         let password = password.trim(); // hilangkan spasi/enter
//         percobaan += 1;

//         if password == "admin123" {
//             berhasil = true;
//         } else {
//             println!("Password salah. Sisa percobaan: {}", max_percobaan - percobaan);
//         }
//     }

//     if berhasil {
//         println!("Login berhasil!");
//     } else {
//         println!("Akses ditolak. Terlalu banyak percobaan gagal.");
//     }
// }

// dengan while
// fn soal4(){

//     let kata = "programming";
//     let mut i = 0;
//     let mut ditemukan = false;

//     while i < kata.len() && !ditemukan {
//         // ambil karakter di indeks i
//         let c = kata.chars().nth(i).unwrap();

//         if c == 'a' {
//             ditemukan = true;
//             break;
//         }

//         i += 1;
//     }

//     if ditemukan {
//         println!("Huruf 'a' ditemukan di posisi: {}", i);
//     } else {
//         println!("Huruf 'a' tidak ditemukan");
//     }
// }

// fn soal4() {
//     let kata = "programming";
//     let mut i = 0;
//     let mut ditemukan = false;
//     // Tulis kode while loop di sini untuk mencari huruf 'a'
//     while i <= kata.len() && !ditemukan {
//         let c = kata.chars().nth(i).unwrap();

//         if c == 'a' {
//             ditemukan = true;
//             break;
//         }
//         i += 1;
//     }
//     if ditemukan {
//         println!("Huruf 'a' ditemukan di posisi: {} ", i);
//     } else {
//         println!("Huruf 'a' tidak ditemukan");
//     }
// }

// dengan loop
// fn soal4(){
//     fn main() {
//     let kata = "programming";
//     let mut i = 0;
//     let mut ditemukan = false;

//     loop {
//         if i >= kata.len() || ditemukan {
//             break;
//         }

//         let c = kata.chars().nth(i).unwrap();

//         match c {
//             'a' => {
//                 ditemukan = true;
//                 break;
//             },
//             _ => {} // karakter lain, lakukan apa-apa
//         }

//         i += 1;
//     }

//     if ditemukan {
//         println!("Huruf 'a' ditemukan di posisi: {}", i);
//     } else {
//         println!("Huruf 'a' tidak ditemukan");
//     }
// }
// }

// fn soal4() {
//     let kata = "programming";
//     let mut i = 0;
//     let mut ditemukan = false;
//     // Tulis kode while loop di sini untuk mencari huruf 'a'
//     loop {
//         if i >= kata.len() || ditemukan {
//             break;
//         }
//         let c = kata.chars().nth(i).unwrap();

//         match c {
//             'a' => {
//                 ditemukan = true;
//                 break;
//             }
//             _ => {}
//         }
//         i += 1;
//     }
//     if ditemukan {
//         println!("Huruf 'a' ditemukan di posisi: {} ", i);
//     } else {
//         println!("Huruf 'a' tidak ditemukan");
//     }
// }

// latihan dengan while
// fn soal5() {
//     let mut angka: f64 = 100.0;
//     let mut langkah = 0;

//     while angka >= 1.0 {
//         langkah += 1;
//         let hasil = angka / 2.0;
//         println!("Langkah  {} : {} / 2 = {}", langkah, angka, hasil);
//         angka = hasil;
//     }

//     println!("Proses selesai setelah {}", langkah);
// }

// latihan pakai loop
// fn soal5() {
//     let mut angka: f64 = 100.0;
//     let mut langkah = 0;
//     loop {
//         match angka >= 1.0 {
//             true => {
//                 langkah += 1;
//                 let hasil = angka / 2.0;
//                 println!("Langkah {}: {} /2 = {}", langkah, angka, hasil);
//                 angka = hasil;
//             }
//             false => break,
//         }
//     }
//     println!("Proses selesai setelah {} langkah", langkah);
// }

// use std::io;

// fn soal_login_while() {
//     let mut percobaan = 0;
//     let max_percobaan = 3;
//     let mut berhasil = false;

//     while percobaan < max_percobaan && !berhasil {
//         let mut password = String::new();

//         println!("Masukkan password:");
//         io::stdin().read_line(&mut password).unwrap();

//         let password = password.trim(); // hapus enter

//         if password == "admin123" {
//             berhasil = true;
//             break;
//         }

//         percobaan += 1;
//         println!(
//             "Password salah. Sisa percobaan: {}",
//             max_percobaan - percobaan
//         );
//     }

//     if berhasil {
//         println!("Login berhasil!");
//     } else {
//         println!("Akses ditolak. Terlalu banyak percobaan gagal.");
//     }
// }

// latihan while
// fn soal6() {
//     use std::io;

//     let mut percobaan = 0;
//     let max_percobaan = 3;
//     let mut berhasil = false;

//     while percobaan < max_percobaan && !berhasil {
//         let mut password = String::new();

//         println!("Masukkan password:");
//         io::stdin().read_line(&mut password).unwrap();
//         let password = password.trim(); // hapus enter

//         if password == "admin123" {
//             berhasil = true;
//             break;
//         }
//         percobaan += 1;
//         println!(
//             "Password salah. Sisa percobaan: {}",
//             max_percobaan - percobaan
//         );
//     }

//     if berhasil {
//         println!("Login berhasil!");
//     } else {
//         println!("Akses ditolak. Terlalu banyak percobaan gagal.");
//     }
// }

// latihan loop
// use std::io;

// fn soal_login_loop_match() {
//     let mut percobaan = 0;
//     let max_percobaan = 3;
//     let mut berhasil = false;

//     loop {
//         if percobaan >= max_percobaan {
//             break;
//         }

//         let mut password = String::new();

//         println!("Masukkan password:");
//         io::stdin().read_line(&mut password).unwrap();

//         match password.trim() {
//             "admin123" => {
//                 berhasil = true;
//                 break;
//             }
//             _ => {
//                 percobaan += 1;
//                 println!(
//                     "Password salah. Sisa percobaan: {}",
//                     max_percobaan - percobaan
//                 );
//             }
//         }
//     }

//     if berhasil {
//         println!("Login berhasil!");
//     } else {
//         println!("Akses ditolak. Terlalu banyak percobaan gagal.");
//     }
// }

// latihan dengan while
// fn soal7() {
//     let mut waktu = 10;
//     let mut tombol_ditekan = false;
//     let mut waktu_ditekan = 0;

//     while waktu > 0 {
//         println!("Countdown: {}", waktu);

//         // Simulasi: tombol ditekan di detik ke-7
//         if waktu == 7 {
//             tombol_ditekan = true;
//             waktu_ditekan = waktu;
//             break;
//         }

//         waktu -= 1;
//     }

//     if tombol_ditekan {
//         println!(
//             "Timer dihentikan oleh user pada detik ke- {}",
//             waktu_ditekan
//         );
//     } else {
//         println!("Countdown selesai!");
//     }
// }

// latihan dengan loop
// fn soal7() {
//     let mut waktu = 10;
//     let mut waktu_ditekan: Option<i32> = None; // Option adalah tipe data di Rust yang punya dua kemungkinan

//     loop {
//         if waktu == 0 {
//             // “Kalau waktu sudah 0, hentikan loop”
//             break;
//         }
//         // ceta countdown
//         println!("Countdown: {}", waktu);

//         // Kalau waktu = 7 → simpan & stop
//         match waktu {
//             7 => {
//                 waktu_ditekan = Some(waktu);
//                 // Some(detik) → ada nilai (tidak ambigu)
//                 break;
//             }
//             _ => {
//                 waktu -= 1;
//             }
//         }
//     }

//     // Setelah loop:
//     // Kalau pernah ditekan → tampilkan detiknya
//     // Kalau tidak → tampilkan selesai

//     match waktu_ditekan {
//         Some(detik) => {
//             println!("Timer dihentikan oleh user pada detik ke-{}", detik);
//         }
//         None => {
//             println!("Countdown selesai!");
//         }
//     }
// }

// fn soal7() {
//     let mut waktu: i32 = 10;
//     let mut tombol_ditekan = false;
//     let mut waktu_ditekan: i32 = 0;

//     loop {
//         match waktu {
//             0 => break,
//             7 => {
//                 println!("Countdown : {}", waktu);
//                 tombol_ditekan = true;
//                 waktu_ditekan = (waktu);
//                 break;
//             }
//             _ => {
//                 println!("Countdown : {}", waktu);
//             }
//         }
//         waktu -= 1;
//     }
//     match tombol_ditekan {
//         true => {
//             println!("Timer dihentikan oleh user pada detik ke- {}", waktu);
//         }
//         false => {
//             println!("Countdown selesai!");
//         }
//     }
// }

// latihan dengan while
// fn soal8() {
//     let mut teks = String::from("   hello world   ");
//     let mut langkah = 0;
//     // Tulis kode while loop di sini untuk menghapus spasi awal

//     while teks.starts_with(' ') {
//         // → cek apakah karakter pertama spasi
//         let temp = teks.chars().skip(1).collect::<String>();
//         // chars() → mengubah String menjadi iterator karakter
//         // Setiap karakter bisa diambil satu per satu
//         // skip(1) → melewatkan satu elemen pertama dari iterator
//         //   Jadi karakter pertama tidak ikut diproses
//         // collect() → mengubah iterator menjadi koleksi
//         //             ::<String> → beri tahu Rust bahwa kita ingin String baru
//         //             Hasilnya → string baru tanpa karakter pertama

//         teks = temp;
//         langkah += 1;

//         println!("Langkah {}: '{}'", langkah, teks);
//     }
//     println!("Hasil akhir: {}", teks);
//     println!("Total spasi yang dihapus: {}", langkah);
// }

// latihan dengan loop
// fn soal8() {
//     let mut teks = String::from("   hello world   ");
//     let mut langkah = 0;

//     // loop → loop tanpa kondisi
//     // match teks.chars().next() → ambil karakter pertama, cocok untuk Rust karena string bisa multi-byte
//     // Some(' ') → kalau karakter pertama spasi → hapus
//     // _ → selain spasi → break loop

//     loop {
//         match teks.chars().next() {
//             Some(' ') => {
//                 // Hapus karakter pertama
//                 let temp = teks.chars().skip(1).collect::<String>();
//                 teks = temp;
//                 langkah += 1;
//                 println!("Langkah {}: '{}'", langkah, teks);
//             }
//             _ => break, // kalau bukan spasi atau string kosong, berhenti
//         }
//     }

//     println!("Hasil akhir: '{}'", teks);
//     println!("Total spasi yang dihapus: {}", langkah);
// }

// dengan while
// fn soal9() {
//     let angka = 2;
//     let mut iterasi = 0;
//     let mut hasil = angka;
//     // Tulis kode while loop di sini untuk pengkuadratan berulang
//     while hasil <= 1000 {
//         iterasi += 1;
//         let sebelum = hasil;
//         hasil = hasil * hasil;
//         println!("Iterasi {}: {}^2 = {}", iterasi, sebelum, hasil);
//     }

//     println!(
//         "Angka {} harus dikuadratkan {} kali untuk melebihi 1000",
//         angka, iterasi
//     );
//     println!("Hasil akhir: {}", hasil);
// }

// // dengan LOOP
// fn soal9() {
//     let angka = 2;
//     let mut hasil = angka;
//     let mut iterasi = 0;
//     loop {
//         match hasil <= 1000 {
//             true => {
//                 iterasi += 1;
//                 let sebelum = hasil;
//                 hasil = hasil * hasil;
//                 println!(" Iterasi {} : {} ^ 2 = {}", iterasi, sebelum, hasil);
//             }
//             false => break,
//         }
//     }
//     println!(
//         "Angka {} harus dikuadratkan {} kali untuk melebihi 1000",
//         angka, iterasi
//     );
//     println!("Hasil akhir: {}", hasil);
// }

// tebak angka
// use std::io;

// fn soal2() {
//     let angka_rahasia = 7;
//     let mut percobaan = 0;

//     loop {
//         println!("Tebak Angka:");

//         let mut input = String::new();
//         io::stdin().read_line(&mut input).expect("Gagal membaca input");

//         let tebakan: i32 = match input.trim().parse() {
//             Ok(num) => num,
//             Err(_) => {
//                 println!("Masukkan angka yang valid!");
//                 continue;
//             }
//         };

//         percobaan += 1;

//         if tebakan < angka_rahasia {
//             println!("Angka terlalu kecil, coba lagi");
//         } else if tebakan > angka_rahasia {
//             println!("Angka terlalu besar, coba lagi");
//         } else {
//             println!("Selamat! Anda berhasil menebak dalam {} percobaan", percobaan);
//             break;
//         }
//     }
// }

// kalkulator sederhana
// use std::io;

// fn soal3() {
//     loop {
//         println!("=== MENU KALKULATOR ===");
//         println!("1. Tambah");
//         println!("2. Kurang");
//         println!("3. Kali");
//         println!("4. Keluar");

//         let mut input = String::new();
//         io::stdin().read_line(&mut input).expect("Gagal membaca input");

//         let pilihan: i32 = match input.trim().parse() {
//             Ok(num) => num,
//             Err(_) => {
//                 println!("Masukkan angka 1-4!");
//                 continue;
//             }
//         };

//         match pilihan {
//             1 => println!("Anda memilih Tambah"),
//             2 => println!("Anda memilih Kurang"),
//             3 => println!("Anda memilih Kali"),
//             4 => {
//                 println!("Terima kasih telah menggunakan program!");
//                 break;
//             }
//             _ => println!("Pilihan tidak valid, masukkan angka 1-4"),
//         }
//     }
// }


// dengan while
// fn soal10() {
//     let angka = [5, 3, 8, 2, -1, 7, 4];
//     let mut i = 0;
//     let mut jumlah_positif = 0;
//     let mut total_positif = 0;

//     while i < angka.len() && angka[i] >= 0 {
//         println!("Memproses:  {}(positif)", angka[i]);
//         jumlah_positif += 1;
//         total_positif += angka[i];
//         i += 1;
//     }

//     println!("Jumlah angka positif: {} ", jumlah_positif);
//     println!("Total nilai positif: {} ", total_positif);

//     if i < angka.len() {
//         println!("Dihentikan karena menemukan angka negatif: {} ", angka[i]);
//     } else {
//         println!("Semua elemen array telah diproses");
//     }
// }

// dengan loop
fn soal10() {
    let angka = [5, 3, 8, 2, -1, 7, 4];
    let mut i = 0;
    let mut jumlah_positif = 0;
    let mut total_positif = 0;

    loop {
        // kondisi berhenti (seperti while)
        if i >= angka.len() || angka[i] < 0 {
            break;
        }

        println!("Memproses: {} (positif)", angka[i]);
        jumlah_positif += 1;
        total_positif += angka[i];
        i += 1;
    }

    println!("Jumlah angka positif: {}", jumlah_positif);
    println!("Total nilai positif: {}", total_positif);

    if i < angka.len() {
        println!("Dihentikan karena menemukan angka negatif: {}", angka[i]);
    } else {
        println!("Semua elemen array telah diproses");
    }
}
