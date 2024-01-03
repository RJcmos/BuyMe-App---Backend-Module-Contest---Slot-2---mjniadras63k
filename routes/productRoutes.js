const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.post('/', productController.createProduct);

router.get('/product/', productController.getProducts);

router.post('/product/buy/:productId', productController.buyProduct);

module.exports = router;
