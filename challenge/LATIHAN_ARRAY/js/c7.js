// // Array map, forEach, array transformation, functional programming
// function transformArray(arr, operations) {
//   let transformed = [];
//   let sum = 0;

//   // Setiap elemen array diproses oleh map, 
//   // disalin ke variabel result, 
//   // ditransformasikan dengan operasi perkalian dan penjumlahan, 
//   // lalu dikembalikan sebagai elemen baru pada array transformed.

//   // Transformasi array (map versi dasar)
//   transformed = arr.map(function (item) {
//     let result = item;

//     if (operations.multiply !== undefined) {
//       result *= operations.multiply;
//     }

//     if (operations.add !== undefined) {
//       result += operations.add;
//     }

//     return result;
//   });

//   // Bagian ini menggunakan forEach untuk menghitung total nilai array hasil transformasi 
//   // dan menampilkan log proses setiap elemen jika opsi logEach diaktifkan, 
//   // kemudian mengembalikan sebuah objek yang berisi 
//   // array asli, array hasil transformasi, dan statistik 
//   // seperti jumlah elemen, total nilai, dan rata-rata. 
//   // Method forEach digunakan untuk efek samping (side effects) 
//   // sedangkan map sebelumnya digunakan untuk transformasi murni (functional programming).

//   // forEach untuk efek samping & statistik
//   transformed.forEach(function (item, index) {
//     sum += item;

//     if (operations.logEach) {
//       console.log(`Processing: ${index + 1} -> ${item}`);
//     }
//   });

//   return {
//     original: arr,
//     transformed: transformed,
//     stats: {
//       processed: transformed.length,
//       sum: sum,
//       average: sum / transformed.length
//     }
//   };
// }

// let numbers = [1, 2, 3, 4, 5];
// console.log(transformArray(numbers, {
//   multiply: 2,
//   add: 1,
//   logEach: true
// }));

// Statistik yang dihasilkan seharusnya berdasarkan array hasil transformasi [3,5,7,9,11] 
// sehingga sum = 35 dan average = 7. 
// Nilai 30 dan 6 tidak sesuai dengan hasil transformasi yang ditampilkan.

// Tulis function transformArray di sini
function transformArray(arr, operations) {
  let transformed = [];
  let sum = 0;

  transformed = arr.map(function (item, index) {
    let result = item;

    if (operations.multiply !== undefined) {
      result *= operations.multiply;
    }
    if (operations.add !== undefined) {
      result += operations.add;
    }
    sum += result;
    if (operations.logEach) {
      console.log(`Processing ke - ${index + 1} : ${item} -> ${result}`);
    }
    return result
  });
  return {
    original: arr,
    transformed: transformed,
    stats: {
      proccesed: transformed.length,
      sum: sum,
      average: sum / transformed.length

    }
  }
}
let numbers = [6, 7, 9, 8, 10];
console.log(transformArray(numbers, {
  multiply: 2,
  add: 1,
  logEach: true
}));