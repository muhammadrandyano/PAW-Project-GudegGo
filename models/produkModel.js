const produk = [
    { id: 1, nama: "Gudeg Kaleng Biasa", harga: 45000, stok: 20, status: "Tersedia" },
    { id: 2, nama: "Gudeg Kaleng Spesial (Telur)", harga: 60000, stok: 15, status: "Tersedia" },
    { id: 3, nama: "Gudeg Kaleng Komplit (Ayam)", harga: 85000, stok: 0, status: "Stok Habis" },
    { id: 4, nama: "Paket Oleh-Oleh Hemat", harga: 120000, stok: 8, status: "Tersedia" }
];

exports.getAllProduk = () => {
    return produk;
};