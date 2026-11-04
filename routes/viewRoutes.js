const express = require('express');
const router = express.Router();
const viewController = require('../controllers/viewController');

// Route Homepage
router.get('/', viewController.renderHome);

// Route Katalog Produk
router.get('/katalog', viewController.renderKatalog);

module.exports = router;