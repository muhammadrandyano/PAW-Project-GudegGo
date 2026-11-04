const produkModel = require('../models/produkModel');

// Untuk halaman Homepage (/)
exports.renderHome = (req, res) => {
    res.render('index', {
        title: "Gudeg Go - Beranda"
    });
};

// Untuk halaman Katalog (/katalog)
exports.renderKatalog = (req, res) => {
    const produk = produkModel.getAllProduk();
    res.render('katalog', {
        title: "Gudeg Go - Katalog Menu",
        produk: produk
    });
};