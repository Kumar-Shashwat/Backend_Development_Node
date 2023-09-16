const express = require('express');
const router = express.Router();
const path = require('path');

const productsController = require('../controller/products');



// /admin/add-phone => get request.
router.get('/add-product', productsController.getAddProducts);

router.post('/add-product',productsController.postAddProduct);

module.exports.router = router;