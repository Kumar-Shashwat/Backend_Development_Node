const Product = require('../models/product');

exports.index = (req, res, next) => {
    Product.fetchAll().then(([rows, fieldData]) => {
        res.render('shop/index', {
            title : 'shop',
            prod : rows, 
            path : 'shop/index'
         });
    }).catch(err => {
        console.log(err);
    });
}

exports.shopGallery = (req, res , next) => {
    // console.log("In the last middleware!");
    // res.sendFile(path.join(__dirname, '../', 'view', 'shop.html'));

    Product.fetchAll().then(([rows, fieldData]) => {
        res.render('shop/product-list', {
            prod : rows,
            title : 'product-list',
            path : '/shop/product-list'
        });
    }).catch(err => console.log(err) );


    
    // console.log(Product.fetchAll());
};

exports.getCart = (req, res, next) => {


    Product.fetchCart().then( ([rows, fieldData]) => {
        res.render('shop/cart', {
            title : 'cart',
            prod : rows,
            path : 'shop/cart'});
    }).catch(err => console.log(err));
    
};

exports.postCart = (req, res, next) =>{
    const prodId = req.body.prodId;
    // console.log(prodId);

    Product.addToCart(prodId);

    res.redirect('/product-list');

    // console.log(product.id, product.title, product.price, product.author);
    
};

exports.removeItem = (req, res, next ) => {
    const prodId = req.params.prodId;

    Product.removeItem(prodId).then(() => {
        res.redirect('/cart');
    }).catch(err => console.log(err));
};

exports.decreaseCount = (req, res , next) => {

    const prodId = req.params.prodId;

    Product.decreaseCount(prodId).then(res.redirect('/cart')).catch(err => console.log(err));

}

exports.increaseCount = (req, res , next) => {

    const prodId = req.params.prodId;

    Product.increaseCount(prodId).then(res.redirect('/cart')).catch(err => console.log(err));

}



exports.cheakout = (req, res, next) => {
    res.render('shop/cheakout', {title : 'cheakout', path : 'shop/cheakout'});
};

exports.productDetials = (req, res, next) => {
    const prodId = req.params.prodId;
    // console.log(prodId);

    Product.findById(prodId).then( ([rows, fieldData]) => {
        res.render('shop/product-details', {
            title :'Details of '+ rows[0].title ,
            product : rows[0], 
            path : 'shop/product-details'
        });
    }).catch(err => console.log(err));

    // let products = Product.fetchAll() ;

    // let product;
    // for(let x of products){
    //     if(x.id === prodId)
    //     {
    //         product = x;
    //         break;
    //     }
    // }

    // console.log(product);
    
};