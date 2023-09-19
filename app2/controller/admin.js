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


exports.postEditProduct = (req, res, next) =>{
    console.log("your are in the post edit-product");
    
    const productId = req.params.productId;
    // find product by id.

    const products = Product.fetchAll();
    for(let x of products){
        if(x.id === productId)
        {
            x.title = req.body.title;
            x.price = req.body.price;
            x.imageUrl = req.body.imageUrl;
            x.author = req.body.author;
            x.description = req.body.description;
        }
    }

    res.redirect('/product-list');

}



exports.editProduct = (req, res, next) => {

    const productId = req.params.productId;
    const editMode = req.query.edit;

    if(editMode === false)
        res.redirect('/');

    const product = Product.findById(productId);

    // console.log(product);

    res.render('admin/edit-product', {
        title :  'updating ' + product.title, 
        path : 'admin/edit-product',
        product: product, 
        editing : editMode
    });
    
}

exports.postDelete = (req, res, next) => {

    
    const productId = req.params.productId;
    const product = Product.findById(productId);

    Product.deleteById(productId);

    res.redirect('/admin/products'); // redirected to produts page of admin.
}

exports.adminProducts = (req, res, next) => {
    res.render('admin/products', {title : 'admin-products' , prod : Product.fetchAll(), path : 'admin/products' });
}