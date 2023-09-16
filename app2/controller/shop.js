const Product = require('../models/product');

exports.shopGallery = (req, res , next) => {
    // console.log("In the last middleware!");
    // res.sendFile(path.join(__dirname, '../', 'view', 'shop.html'));
    res.render('shop/shop', {prod : Product.fetchAll(), title : 'Index', path : '/shop/shop'});
    console.log(Product.fetchAll());
};