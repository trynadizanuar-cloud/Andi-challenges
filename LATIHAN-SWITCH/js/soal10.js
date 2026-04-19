// driver code
let bahasa = "ID";

// normalisasi ke huruf kecil
    switch (bahasa.toLowerCase()) {
  case "id":
    console.log("Language: Bahasa Indonesia");
    console.log("Selamat datang! Ada yang bisa kami bantu?");
    break;

  case "en":
    console.log("Language: English");
    console.log("Welcome! How can we help you today?");
    break;

  case "jp":
    console.log("Language: Japanese");
    console.log("ようこそ！どのようにお手伝いできますか？");
    break;

  case "kr":
    console.log("Language: Korean");
    console.log("환영합니다! 무엇을 도와드릴까요?");
    break;

  default:
    console.log("Language not supported");
}