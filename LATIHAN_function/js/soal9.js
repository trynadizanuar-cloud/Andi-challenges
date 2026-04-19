// Tulis function processOrder di sini
function processOrder(item, jumlah) {
    const harga_per_item = 15000;
    const Subtotal = jumlah * harga_per_item;
    console.log(`
=== Detail Pesanan ===
Item           : ${item}
Jumlah         : ${jumlah} 
harga per item : Rp.${harga_per_item}
subtotal       : Rp.${Subtotal}
`)
    return Subtotal;
}
// Panggil function dan gunakan return value
let totalBayar1 = processOrder("Nasi Goreng", 2);
let totalBayar2 = processOrder("Mie Ayam", 3);
console.log("Total yang harus dibayar: Rp " + (totalBayar1 + totalBayar2));


// === Detail Pesanan ===
// Item: Nasi Goreng
// Jumlah: 2
// Harga per item: Rp 15000
// Subtotal: Rp 30000

// === Detail Pesanan ===
// Item: Mie Ayam
// Jumlah: 3
// Harga per item: Rp 15000
// Subtotal: Rp 45000

// Total yang harus dibayar: Rp 75000