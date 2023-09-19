const Product = require('../models/product');
const Cart = require('../models/cart');

exports.index = (req, res, next) => {
    res.render('shop/index', {title : 'shop', prod : Product.fetchAll(), path : 'shop/index' });
}

exports.shopGallery = (req, res , next) => {
    // console.log("In the last middleware!");
    // res.sendFile(path.join(__dirname, '../', 'view', 'shop.html'));
    res.render('shop/product-list', {prod : Product.fetchAll(), title : 'product-list', path : '/shop/product-list'});
    // console.log(Product.fetchAll());
};

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {title : 'cart', path : 'shop/cart'});
};

exports.postCart = (req, res, next) =>{
    const prodId = req.body.prodId;
    // console.log(prodId);

    let products = Product.fetchAll() ;

    let product;
    for(let x of products){
        if(x.id === prodId)
        {
            product = x;
            
            break;
        }
    }

    console.log(product.id, product.title, product.price, product.author);

    Cart.addProduct(product.id, product.price);
    res.redirect('/cart' );
};

exports.cheakout = (req, res, next) => {
    res.render('shop/cheakout', {title : 'cheakout', path : 'shop/cheakout'});
};

exports.productDetials = (req, res, next) => {
    const prodId = req.params.prodId;
    // console.log(prodId);
    let products = Product.fetchAll() ;

    let product;
    for(let x of products){
        if(x.id === prodId)
        {
            product = x;
            break;
        }
    }

    // console.log(product);
    res.render('shop/product-details', {title :'Details of '+ product.title ,product : product, path : 'shop/product-details'});
};

exports.index = (req, res, next) => {
    res.render('shop/product-list', {prod : Product.fetchAll(), title : 'Index Page', path : 'shop/index'});
}