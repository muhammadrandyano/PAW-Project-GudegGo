const express = require('express');
const router = express.Router();
const viewController = require('../controllers/viewController');

// Route Homepage
router.get('/', viewController.renderHome);

// Route Katalog
router.get('/katalog', viewController.renderKatalog);

// Route untuk Edit (Taruh di atas module.exports)
router.get('/katalog/edit/:id', viewController.renderEditKatalog);

// Route untuk aksi form (Tambah, Edit, Hapus)
router.post('/katalog/tambah', viewController.createProdukFrontend);
router.post('/katalog/edit/:id', viewController.updateProdukFrontend);
router.post('/katalog/hapus/:id', viewController.deleteProdukFrontend);

// Baru export di paling bawah
module.exports = router;