const Cart = require('../models/cart');   

exports.getCart = (req, res, next) => {

    const user_id = req.session.user.id; // some how we get the id of user. may be by sql command.

    Cart.fetchCart(user_id).then( ([rows, fieldData]) => {
        res.render('shop/cart', {
            title : 'cart',
            prod : rows,
            path : 'shop/cart',
            // autharized : req.session.isLoggedIn,
            // csrfToken: req.csrfToken(),
        });
    }).catch(err => console.log(err));
};

exports.postCart = (req, res, next) =>{
    const prodId = req.body.prodId;
    // console.log(prodId);

    const user_id = req.session.user.id; // some how we get the id of user. may be by sql command.

    Cart.addToCart(prodId, user_id);

    res.redirect('/product-list');

    // console.log(product.id, product.title, product.price, product.author);
    
};

exports.removeItem = (req, res, next ) => {
    const prodId = req.params.prodId;

    const user_id = req.session.user.id; // some how we get the id of user. may be by sql command.

    Cart.removeItem(prodId, user_id).then(() => {
        res.redirect('/cart');
    }).catch(err => console.log(err));
};

exports.decreaseCount = (req, res , next) => {

    const prodId = req.params.prodId;

    const user_id = req.session.user.id; // some how we get the id of user. may be by sql command.

    Cart.decreaseCount(prodId, user_id).then(res.redirect('/cart')).catch(err => console.log(err));

}

exports.increaseCount = (req, res , next) => {

    const prodId = req.params.prodId;

    const user_id = req.session.user.id; // some how we get the id of user. may be by sql command.

    Cart.increaseCount(prodId, user_id).then(res.redirect('/cart')).catch(err => console.log(err));
}