const Product = require('../models/product');

exports.shopGallery = (req, res , next) => {
    // console.log("In the last middleware!");
    // res.sendFile(path.join(__dirname, '../', 'view', 'shop.html'));
    res.render('shop/product-list', {prod : Product.fetchAll(), title : 'product-list', path : '/shop/product-list'});
    console.log(Product.fetchAll());
};