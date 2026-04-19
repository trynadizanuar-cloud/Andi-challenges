fn main() {
    soal7()
}

// fn soal1(){
//     for i in 1..5 {
//         println! ("{}",i);
//     }
// }

// fn soal2 (){
//     for i in 1..= 20{
//         if i % 2 == 0 {
//             println!("{}",i);
//         }
//     }
// }

// fn soal3(){
//     for i in 1..= 15 {
// if i % 2 != 0 {
//     println! ("{}",i);
// }
//     }

// }

// fn soal4() {

//     // Tulis kode for loop di sini untuk menampilkan angka 10 sampai 1 secara mundur
//     for i in (1..=10).rev() {
//         println!("{}", i);
//     }
// }

// fn soal5() {
//     // Tulis kode for loop di sini untuk menghitung jumlah 1+2+3+...+10
//     let sum : i32 = (1..=10).sum();
//     // kode for loop di sini

//     println! ("Jumlah total: {}", sum);
// }

// fn soal6 () {
//     for i in 1..=10 {
//         println!("5 x {} = {}", i, 5 * i);
//     }
// }

fn soal7() {
    let kata = "programming";
    let mut jumlah_vokal = 0;

    for huruf in kata.chars() {
        if "aiueoAIUEO".contains(huruf) {
            jumlah_vokal += 1;
        }
    }

    println!("Jumlah vokal: {}", jumlah_vokal);
}

// fn soal8 () {
//     let baris = 5;

//     // looping baris
//     for i in 1..=baris {
//         let mut pola = String::new();

//         // looping bintang
//         for _j in 1..=i {
//             pola.push('*');
//         }

//         println!("{}", pola);
//     }
// }

// fn soal9() {
//         let angka = 5;
//     let mut faktorial = 1;

//     for i in 1..=angka {
//         faktorial *= i;
//     }

//     println!("Faktorial dari {} adalah: {}", angka, faktorial);
// }

// fn soal9() {
//     let angka = 5;
//     let mut faktorial = 1;
//     // Tulis kode for loop di sini untuk menghitung faktorial
//     for i in 1..=angka {
//         faktorial *= i;
//     }
//     println!("Faktorial dari {} adalah: {}", angka, faktorial);
// }
