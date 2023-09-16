const express = require('express');
const router = express.Router();
const path = require('path');

const { shopGallery } = require('../controller/shop');

router.get('/shop',shopGallery);

module.exports = router;