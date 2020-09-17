var express = require('express');
var router  = express.Router();
var products_controller = require('../controllers/products_controller');

router.get('/api/search-products', products_controller.productsAll);

router.post('/api/search-products', products_controller.createProduct)

router.put('/api/search-products/:id', products_controller.updateProduct)

router.delete('/api/search-products/:id', products_controller.deleteProduct)

module.exports = router;

