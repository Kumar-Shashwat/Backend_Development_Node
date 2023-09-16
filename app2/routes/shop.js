const express = require('express');
const router = express.Router();
const path = require('path');

const shopController = require('../controller/shop');

router.get('/product-list', shopController.shopGallery);
router.get('/cart', shopController.cart);
router.get('/cheakout', shopController.cheakout );
router.get('/product-details', shopController.productDetials);


module.exports = router;