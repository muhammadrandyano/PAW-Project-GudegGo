const pool = require('../config/database');

// READ (Semua data)
exports.getAllProduk = async () => {
    const query = 'SELECT * FROM produk ORDER BY id ASC';
    const result = await pool.query(query);
    return result.rows;
};

// READ (Satu data berdasarkan ID)
exports.getProdukById = async (id) => {
    const query = 'SELECT * FROM produk WHERE id = $1';
    const result = await pool.query(query, [id]);
    return result.rows[0];
};

// CREATE
exports.createProduk = async (nama, harga, stok) => {
    const query = 'INSERT INTO produk (nama, harga, stok) VALUES ($1, $2, $3) RETURNING *';
    const result = await pool.query(query, [nama, harga, stok]);
    return result.rows[0];
};

// UPDATE
exports.updateProduk = async (id, nama, harga, stok) => {
    const query = 'UPDATE produk SET nama = $1, harga = $2, stok = $3 WHERE id = $4 RETURNING *';
    const result = await pool.query(query, [nama, harga, stok, id]);
    return result.rows[0];
};

// DELETE
exports.deleteProduk = async (id) => {
    const query = 'DELETE FROM produk WHERE id = $1 RETURNING *';
    const result = await pool.query(query, [id]);
    return result.rows[0];
};