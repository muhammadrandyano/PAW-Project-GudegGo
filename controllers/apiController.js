const produkModel = require('../models/produkModel');

// GET /api/status (Tetap dipertahankan)
exports.getStatus = (req, res) => {
    res.status(200).json({
        status: "success",
        message: "Gudeg Go API berjalan normal",
        timestamp: new Date().toISOString()
    });
};

// GET /api/produk
exports.getProduk = async (req, res) => {
    try {
        const dataProduk = await produkModel.getAllProduk();
        res.status(200).json({ status: "success", data: dataProduk });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};

// GET /api/produk/:id
exports.getProdukById = async (req, res) => {
    try {
        const produk = await produkModel.getProdukById(req.params.id);
        if (!produk) return res.status(404).json({ message: "Produk tidak ditemukan" });
        res.status(200).json({ status: "success", data: produk });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};

// POST /api/produk
exports.createProduk = async (req, res) => {
    try {
        const { nama, harga, stok } = req.body;
        const produkBaru = await produkModel.createProduk(nama, harga, stok);
        res.status(201).json({ status: "success", message: "Produk ditambahkan", data: produkBaru });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};

// PUT /api/produk/:id
exports.updateProduk = async (req, res) => {
    try {
        const { nama, harga, stok } = req.body;
        const produkUpdate = await produkModel.updateProduk(req.params.id, nama, harga, stok);
        if (!produkUpdate) return res.status(404).json({ message: "Produk tidak ditemukan" });
        res.status(200).json({ status: "success", message: "Produk diperbarui", data: produkUpdate });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};

// DELETE /api/produk/:id
exports.deleteProduk = async (req, res) => {
    try {
        const produkHapus = await produkModel.deleteProduk(req.params.id);
        if (!produkHapus) return res.status(404).json({ message: "Produk tidak ditemukan" });
        res.status(200).json({ status: "success", message: "Produk dihapus", data: produkHapus });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};