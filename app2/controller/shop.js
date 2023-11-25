const Product = require('../models/product');

exports.index = (req, res, next) => {
    Product.fetchAll().then(([rows, fieldData]) => {
        res.render('shop/index', {
            title : 'shop',
            prod : rows, 
            path : 'shop/index',
            // autharized : req.session.isLoggedIn, 
            // csrfToken: req.csrfToken(),
         });
        //  console.log("idx shop controller :" , req.session.isLoggedIn);
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
            path : '/shop/product-list',
            // autharized : req.session.isLoggedIn,
            // csrfToken: req.csrfToken(),
        });
    }).catch(err => console.log(err) );


    
    // console.log(Product.fetchAll());
};



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
            path : 'shop/product-details',
            // autharized: req.session.isLoggedIn,
            // csrfToken: req.csrfToken(),
        });
    }).catch(err => console.log(err));
};