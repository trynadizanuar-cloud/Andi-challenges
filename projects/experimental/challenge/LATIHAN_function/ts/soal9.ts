// Tulis function processOrder di sini
type pesanan = (item: string, jumlah: number) => number;
const processOrder: pesanan = (item: string, jumlah: number) => {
    const harga_per_item: number = 15000;
    const subtotal: number = harga_per_item * jumlah;
    console.log(`
=== Detail Pesanan ===
Item           : ${item}
Jumlah         : ${jumlah} 
harga per item : Rp.${harga_per_item}
subtotal       : Rp.${subtotal}
`)
    return subtotal;
}
// Panggil function dan gunakan return value
let totalBayar1: number = processOrder("Nasi Goreng", 2);
let totalBayar2: number = processOrder("Mie Ayam", 3);
console.log("Total yang harus dibayar: Rp " + (totalBayar1 + totalBayar2));

export { }