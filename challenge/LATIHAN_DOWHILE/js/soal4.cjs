import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });
let dadu;
let mainLagi;
let totalSkor = 0;
// Tulis kode do-while loop di sini untuk game dadu
do {
    mainLagi = true;
    // const angkaDadu = [1,2,3,4,5,6];
    const randomNumber = () => Math.floor(Math.random() * (6)) + 1;
    console.log("Melempar Dadu...");
    dadu = randomNumber();
    console.log(`Hasil : ${dadu}`);
    if (dadu == 6) {
        console.log("JACKPOT! Bonus Lemparan!");
        dadu = randomNumber();
        totalSkor += dadu;
    }
    totalSkor += dadu;
    console.log(`Total Skor : ${totalSkor}`);
    let lanjut = prompt("Main lagi? (y/n) ");
    switch (lanjut) {
        case "y":
            continue;
        case "n":
            mainLagi = false;
            break;
        default:
            console.log("masukan y/n !");
            break;
    }
} while (mainLagi)
console.log(`Game selesai! Total skor: ${totalSkor}`);