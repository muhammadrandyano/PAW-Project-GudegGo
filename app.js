const express = require('express');
const config = require('./config/config');
const logger = require('./middlewares/logger');
const apiRoutes = require('./routes/apiRoutes');
const viewRoutes = require('./routes/viewRoutes');

const app = express();

// 1. Setup View Engine (EJS)
app.set('view engine', 'ejs');
app.set('views', './views');

// 2. Pasang Middleware Logger (Wajib)
app.use(logger);

// 3. Middleware bawaan Express untuk parsing JSON (jika diperlukan nanti)
app.use(express.json());

// 4. Routing
app.use('/api', apiRoutes);      // Endpoint API (/api/status, /api/produk)
app.use('/', viewRoutes);        // Halaman Frontend (/)

// 5. Jalankan Server
app.listen(config.port, () => {
    console.log(`=========================================`);
    console.log(`🚀 ${config.appName}`);
    console.log(`🌐 Frontend: http://localhost:${config.port}`);
    console.log(`🔌 API     : http://localhost:${config.port}/api/status`);
    console.log(`=========================================`);
});