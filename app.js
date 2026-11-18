const express = require('express');
const path = require('path');
require('dotenv').config();

// Import konfigurasi dan routes
const config = require('./config/config');
const logger = require('./middlewares/logger');
const apiRoutes = require('./routes/apiRoutes');
const viewRoutes = require('./routes/viewRoutes');
const chatRoutes = require('./routes/chat.routes');

const app = express();

// ==========================================
// 1. SETUP VIEW ENGINE (EJS)
// ==========================================
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ==========================================
// 2. MIDDLEWARES
// ==========================================
// Middleware Logger (Wajib dari tugas sebelumnya)
app.use(logger);

// Middleware untuk parsing body request (JSON & Form)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware untuk mengizinkan akses folder public (Gambar, CSS, JS)
// INI SANGAT PENTING AGAR GAMBAR GUDEG MUNCUL
app.use(express.static(path.join(__dirname, 'public')));

// ==========================================
// 3. ROUTES
// ==========================================
// Route untuk API (CRUD & Status)
app.use('/api', apiRoutes);

// Route untuk AI Chat
app.use('/api', chatRoutes);

// Route untuk Tampilan Web (EJS)
app.use('/', viewRoutes);

// ==========================================
// 4. JALANKAN SERVER
// ==========================================
const PORT = config.port || 3000;
app.listen(PORT, () => {
    console.log(`=========================================`);
    console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
    console.log(`✅ Berhasil terhubung ke database PostgreSQL (gudeg_go)`);
    console.log(`=========================================`);
});