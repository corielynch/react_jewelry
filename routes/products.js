var express = require('express');
var router  = express.Router();
var products_controller = require('../controllers/products_controller');

router.get('/search-products', products_controller.productsAll);

router.post('/search-products', products_controller.createProduct)

router.put('/search-products/:id', products_controller.updateProduct)

router.delete('/search-products/:id', products_controller.deleteProduct)

module.exports = router;

//need to do now:...db create routes, make request, checkout list, delete, change fn in app, local to request to backend, add store and get. checkout controller & checkout routes 