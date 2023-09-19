const Product = require('../models/product');

exports.getAddProducts = (req, res, next) => {
    res.render('admin/edit-product', {
        title : 'edit-product',
        path : 'admin/edit-product',
        editing : false
        });
};

exports.postAddProduct = (req, res, next) => {

    const title = req.body.title;
    const price = req.body.price;
    const imageUrl = req.body.imageUrl;
    const author = req.body.author;
    const description = req.body.description;
    const product = new Product(title, price, imageUrl, author, description);
    product.save();
    res.redirect('/product-list');
};



exports.editProduct = (req, res, next) => {

    const productId = req.params.productId;

    const product = Product.findById(productId);

    // console.log(product);

    res.render('admin/edit-product', {
        title :  'updating' + product.title, 
        path : 'admin/edit-product',
        product: product,
        editing : true
    });
    
}

exports.adminProducts = (req, res, next) => {
    res.render('admin/products', {title : 'admin-products' , prod : Product.fetchAll(), path : 'admin/products' });
}