fn main() {
    soal10()
}

// fn soal1(){
//     let angka = 3;
//     // Tulis kode if statement di sini
//     if angka > 0 {
//         println! ("Angka Positif Di temukan!");
//         println! ("Program Selesai");
//     }
// }

// fn soal2(){

// let umur = 20;
// // Tulis kode if statement di sini
// if umur >= 18 {
//     println! ("sudah dewasa");
//     println! ("anda sudah memilih dalam pemilu");
// }
// println! ("Terima kasih");
// }

//  fn soal3(){
//   let angka = 7;

//      // Mengecek apakah angka genap atau ganjil
//  if angka % 2 == 0 {
//          println!("{} adalah bilangan genap", angka);
//      } else {
//          println!("{} adalah bilangan ganjil", angka);
//      }
//  }

//  fn soal4 (){
//      let password = "admin128";
//  // Tulis kode if-else statement di sini
//  if password == "admin123" {
//      println! ("Login berhasil! Selamat Datang.");
//  }
//  else {
//    println! ("password salah! Akses ditolak");
//  }
//  }

// fn soal5 (){
//     let suhu = 28;
// // Tulis kode if-else if statement di sini
// if suhu >= 35 {
//         println!("Suhu {}°C: sangat panas", suhu);
//     } else if suhu >= 25 {
//         println!("Suhu {}°C: panas", suhu);
//     } else if suhu >= 15 {
//         println!("Suhu {}°C: hangat", suhu);
//     } else {
//         println!("Suhu {}°C: dingin", suhu);
//     }
// }

// fn soal6() {
//     let totalBelanja = 350000;
//     let mut diskon = 0;
// // Tulis kode if-else if statement di sini
// if totalBelanja >= 500000 {
//     diskon = 20;
// }
// else if totalBelanja >= 200000 {
//     diskon = 10;
// }
// else if totalBelanja >= 100000 {
//     diskon = 5;
// }

// // hitung total bayar konfersi diskon
// let totalBayar = totalBelanja - (totalBelanja*diskon/100);

// //  Output Hasil
// println! ("Total Belanja : Rp.{}", totalBelanja);
// println! ("Diskon        : {}%", diskon);
// println! ("Total Bayar   : Rp.{}",totalBayar);
// }

// fn soal7() {
//     let skor = 85;
//     let grade;
// // Tulis kode if-else if-else statement di sini
// if skor >= 90 {
//     grade = "A";
// }
// else if skor >= 80 {
//     grade = "B";
// }
// else if skor >= 70 {
//     grade = "C";
// }
// else if skor >= 60 {
//     grade = "D";
// }
// else {
//     grade = "E"
// }
// // output
// println! ("Skor  : {}", skor);
// println! ("Grade : {}", grade);
// }

// fn soal8() {
//     let berat: f64 = 100.0; // kg
//     let tinggi: f64 = 1.75; // meter
//     let kategori;
//     // Hitung BMI terlebih dahulu
//     let bmi: f64 = berat / (tinggi * tinggi);
//     // Tulis kode if-else if-else statement di sini
//     if bmi < 18.5 {
//         kategori = "Underweight";
//     } else if bmi < 25.0 {
//         kategori = "Normal";
//     } else if bmi < 30.0 {
//         kategori = "Overweight";
//     } else {
//         kategori = "Obese";
//     }

//     // Output
//     println!("BMI      : {:.2}", bmi);
//     println!("Kategori : {}", kategori);
// }

// fn soal9() {
//     let jenisKendaraan = "mobil";
//     let durasi: u32 = 3; // jam
//     let tarif_perjam: u32;
//     let mut total_bayar: u32 = 0;
//     // Tulis kode if-else if-else statement di sini
//     if jenisKendaraan == "motor" {
//         tarif_perjam = 2000;
//     } else if jenisKendaraan == "mobil" {
//         tarif_perjam = 5000;
//     } else if jenisKendaraan == "truk" {
//         tarif_perjam = 10000;
//     } else {
//         tarif_perjam = 0;
//     }
//     // hitung tarif perjam
//     if tarif_perjam > 0 {
//         total_bayar = tarif_perjam * durasi;
//     }
//     // Output
//     println!("Jenis Kendaraan :{}", jenisKendaraan);
//     println!("Durasi Parkir   :{} Jam", durasi);
//     println!("Tarif Per Jam   :Rp.{}", tarif_perjam);
//     println!("Total Bayar     :Rp.{}", total_bayar);
// }

fn soal10() {
    let angka1 : f64 = 10.0;
    let angka2 : f64 = 3.0;
    let operator = "/";
    let hasil : f64 ;
    // Tulis kode if-else if-else statement di sini
    if operator == "+"{
        hasil = angka1+angka2;
        println! ("{} {} {} = {}",angka1,operator,angka2,hasil);
    }
    else if operator == "-"{
    hasil = angka1-angka2;
    println! ("{} {} {} = {}",angka1,operator,angka2,hasil);
    }
    else if operator == "*"{
    hasil = angka1*angka2;
    println! ("{} {} {} = {}",angka1,operator,angka2,hasil);
    }
    else if operator == "/"{
        if angka2 != 0.0 {
        hasil = angka1/angka2;
        println! ("{} {} {} = {:.2}", angka1,operator,angka2,hasil);
    }   else {
        println!("Error, tidak bisa di bagi 0");
    } 
    }
    else {
    println! ("operator tidak valid");
    }
    }
    