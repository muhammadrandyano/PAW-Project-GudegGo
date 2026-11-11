const express = require('express');
const config = require('./config/config');
const logger = require('./middlewares/logger');
const apiRoutes = require('./routes/apiRoutes');
const viewRoutes = require('./routes/viewRoutes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(logger);
app.use(express.json());
// TAMBAHKAN BARIS INI UNTUK MEMBACA DATA DARI FORM HTML
app.use(express.urlencoded({ extended: true })); 

app.use('/api', apiRoutes);
app.use('/', viewRoutes);

app.listen(config.port, () => {
    console.log(`🚀 Server berjalan di http://localhost:${config.port}`);
});