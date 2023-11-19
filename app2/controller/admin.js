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

    Product.updateAll(productId, req.body.title, req.body.price, req.body.imageUrl, req.body.author, req.body.description)
    .then(
        res.redirect('/admin/products') // redirected to produts page of admin.
    ).catch(err => console.log(err));


    // const products = Product.fetchAll();
    // for(let x of products){
    //     if(x.id === productId)
    //     {
    //         x.title = req.body.title;
    //         x.price = req.body.price;
    //         x.imageUrl = req.body.imageUrl;
    //         x.author = req.body.author;
    //         x.description = req.body.description;
    //     }
    // }

    

}



exports.editProduct = (req, res, next) => {

    const productId = req.params.productId;
    const editMode = req.query.edit;

    if(editMode === false)
        res.redirect('/');

    Product.findById(productId).then(([rows, dataField]) => {
        res.render('admin/edit-product', {
            title :  'updating ' + rows[0].title,
            path : 'admin/edit-product',
            product: rows[0], 
            editing : editMode
        });
    }).catch(err => console.log(err));

    // console.log(product);

       
}

exports.postDelete = (req, res, next) => {

    
    const productId = req.params.productId;

    Product.deleteById(productId).then(
        res.redirect('/admin/products') // redirected to produts page of admin.
    ).catch(err => console.log(err));

    
}

exports.adminProducts = (req, res, next) => {

    Product.fetchAll().then( ([rows, fieldData]) => {
        res.render('admin/products', {
            title : 'admin-products' , 
            prod : rows, 
            path : 'admin/products'
        });
    }).catch(err => console.log(err));
    
}