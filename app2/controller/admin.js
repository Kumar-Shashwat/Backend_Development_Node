const Product = require('../models/product');

exports.getAddProducts = (req, res, next) => {

    res.render('admin/add-product', {title : 'add-product' , path : 'admin/add-product'});
};

exports.postAddProduct = (req, res, next) => {

    const product = new Product(req.body.title);
    product.save();
    res.redirect('/product-list');
};