const produkModel = require('../models/produkModel');

exports.renderHome = (req, res) => {
    res.render('index', { title: "Gudeg Go - Beranda" });
};

exports.renderKatalog = async (req, res) => {
    try {
        const produk = await produkModel.getAllProduk();
        res.render('katalog', { title: "Gudeg Go - Katalog Menu", produk });
    } catch (error) {
        res.status(500).send("Terjadi kesalahan pada server");
    }
};

// Fungsi untuk Form Tambah (Frontend)
exports.createProdukFrontend = async (req, res) => {
    try {
        const { nama, harga, stok } = req.body;
        await produkModel.createProduk(nama, parseInt(harga), parseInt(stok));
        res.redirect('/katalog');
    } catch (error) {
        res.status(500).send("Gagal menambah produk");
    }
};

// Fungsi untuk Form Edit (Frontend)
exports.updateProdukFrontend = async (req, res) => {
    try {
        const { nama, harga, stok } = req.body;
        await produkModel.updateProduk(req.params.id, nama, parseInt(harga), parseInt(stok));
        res.redirect('/katalog');
    } catch (error) {
        res.status(500).send("Gagal mengupdate produk");
    }
};

// Fungsi untuk Hapus (Frontend)
exports.deleteProdukFrontend = async (req, res) => {
    try {
        await produkModel.deleteProduk(req.params.id);
        res.redirect('/katalog');
    } catch (error) {
        res.status(500).send("Gagal menghapus produk");
    }
};

exports.renderEditKatalog = async (req, res) => {
    try {
        const produk = await produkModel.getAllProduk();
        const editData = await produkModel.getProdukById(req.params.id); // Ambil data yang mau diedit
        res.render('katalog', { title: "Gudeg Go - Edit Menu", produk, editData });
    } catch (error) {
        res.status(500).send("Gagal memuat halaman edit");
    }
};