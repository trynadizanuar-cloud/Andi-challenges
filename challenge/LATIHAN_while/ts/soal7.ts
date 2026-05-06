let waktu: number = 10;
let tombolDitekan: boolean = false;
let waktuditekan: number = 0;

// Tulis kode while loop di sini untuk countdown timer
while (waktu > 0 && !tombolDitekan) {
    console.log("Countdown : ", waktu);
    // Simulasi: tombol akan ditekan pada detik ke-7
    if (waktu === 7) {
        tombolDitekan = true;
        waktuditekan = waktu;
        break;
    }
    waktu--;
}

if (tombolDitekan) {
    console.log(`Timer dihentikan oleh user pada detik ke- ${waktuditekan}`);
} else {
    console.log("Countdown selesai!");
}

export { }

// dengan kondisi dinamis 
// let waktu = 10;
// let tombolDitekan = false;
// let berhenti = 4

// // Tulis kode while loop di sini untuk countdown timer
// while (waktu >= 0) {
//     console.log("Countdown :", waktu);
//     if (tombolDitekan && waktu === berhenti) {
//         break;
//     }
//     waktu--;
// }
// if (tombolDitekan) {
//     console.log("Timer dihentikan oleh user pada detik ke-" + waktu);
// } else {
//     console.log("Countdown selesai!");
// }

