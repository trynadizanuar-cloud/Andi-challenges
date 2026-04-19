// Tulis function processOrder di sini
pub fn process_order(item: &str, jumlah: i32) -> i32 {
    const HARGA_PER_ITEM: i32 = 15000;
    let subtotal: i32 = HARGA_PER_ITEM * jumlah;
    println!(
        "
=== Detail Pesanan ===
Item           : {}
Jumlah         : {}
harga per item : Rp.{}
subtotal       : Rp.{}
",
        item, jumlah, HARGA_PER_ITEM, subtotal
    );
    subtotal
}
