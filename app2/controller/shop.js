const Product = require('../models/product');

exports.shopGallery = (req, res , next) => {
    // console.log("In the last middleware!");
    // res.sendFile(path.join(__dirname, '../', 'view', 'shop.html'));
    res.render('shop/product-list', {prod : Product.fetchAll(), title : 'product-list', path : '/shop/product-list'});
    console.log(Product.fetchAll());
};

exports.cart = (req, res, next) => {
    res.render('shop/cart', {title : 'cart', path : 'shop/cart'});
};

exports.cheakout = (req, res, next) => {
    res.render('shop/cheakout', {title : 'cheakout', path : 'shop/cheakout'});
};

exports.productDetials = (req, res, next) => {
    res.render('shop/product-details', {title : 'product-detials', path : 'shop/product-detials'});
};