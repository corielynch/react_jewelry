var express = require('express');
var router  = express.Router();
var checkout_controller = require('../controllers/checkout_controller');

router.post('/api/checkout', checkout_controller.createCheckout)

module.exports = router;

