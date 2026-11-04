const produkModel = require('../models/produkModel');

exports.getStatus = (req, res) => {
    res.status(200).json({
        status: "success",
        message: "Gudeg Go API berjalan normal",
        timestamp: new Date().toISOString()
    });
};

exports.getProduk = (req, res) => {
    const dataProduk = produkModel.getAllProduk();
    res.status(200).json({
        status: "success",
        data: dataProduk
    });
};