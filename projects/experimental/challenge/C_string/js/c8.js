function cleanAndFormat(text, width) {
  // 1. Bersihkan whitespace berlebih
  let cleaned = text.trim().replace(/\s+/g, " ");

  // 2. Hitung sisa padding
  let totalPadding = width - cleaned.length;
  // Math.floor() berfungsi untuk membulatkan angka ke bawah 
  // ke bilangan bulat terdekat / tidak desimal misal 2,5.
  let leftPadding = Math.floor(totalPadding / 2);
  let rightPadding = totalPadding - leftPadding;

  // 3. Tambahkan padding kiri & kanan
  // 🔑 Inti Logika
  // Padding kiri → padStart() → menambahkan spasi sebelum teks
  // Padding kanan → padEnd() → menambahkan spasi setelah teks
  // Kombinasi → teks berada di tengah dengan panjang akhir sesuai width
  // membuat teks cleaned menjadi berada di tengah 
  // dengan cara menambahkan spasi di depan menggunakan padStart() 
  // hingga panjangnya bertambah sesuai cleaned.length + rightPadding, 
  // lalu menambahkan spasi di belakang menggunakan padEnd() 
  // sampai total panjang akhirnya sama dengan width.

  let padded = cleaned
    .padStart(cleaned.length + leftPadding, " ")
    .padEnd(width, " ");

  // 4. Return hasil
  return {
    cleaned,
    padded,
    length: width
  };
}

// driver code
console.log(cleanAndFormat("  Hello   World  ", 15));
console.log(cleanAndFormat("JavaScript", 12));
console.log(cleanAndFormat("  Code  ", 8));
