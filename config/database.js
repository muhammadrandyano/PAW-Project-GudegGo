const { Pool } = require('pg');
const config = require('./config');

const pool = new Pool(config.db);

// Uji koneksi saat aplikasi berjalan
pool.connect((err) => {
    if (err) {
        console.error('❌ Gagal terhubung ke database:', err.message);
    } else {
        console.log('✅ Berhasil terhubung ke database PostgreSQL (gudeg_go)');
    }
});

module.exports = pool;