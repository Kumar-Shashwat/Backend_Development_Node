const express = require('express');
const router = express.Router();
const path = require('path');

const productsController = require('../controller/admin');



// /admin/add-phone => get request.
router.get('/add-product', productsController.getAddProducts);

// /admin/add-phone => get request.
router.post('/add-product',productsController.postAddProduct);

router.get('/edit-product/',  productsController.getAddProducts)
// /admin/edit-phone => get request.
router.get('/edit-product/:productId', productsController.editProduct );
router.post('/edit-product/:productId', productsController.postEditProduct);

// /admin/delete ==> post request
router.post('/delete/:productId', productsController.postDelete);

// /admin/add-phone => get request.
router.get('/products' , productsController.adminProducts);

module.exports.router = router; 