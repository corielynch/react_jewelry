var express = require('express');
var router  = express.Router();
var checkout_controller = require('../controllers/checkout_controller');

router.get('/api/checkout', checkout_controller.getCheckout)
router.post('/api/checkout', checkout_controller.createCheckout)
router.delete('/api/checkout', checkout_controller.deleteCheckout)

module.exports = router;

