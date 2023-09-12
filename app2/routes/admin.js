const express = require('express');
const router = express.Router();
const path = require('path');

const products = [];

// /admin/add-phone => get request.
router.get('/add-product', (req,res,next) => {
    // res.sendFile(path.join(__dirname, '../', 'view' , 'add-product.html'));
    res.render('add-product', {title: 'Add product', path : '/admin/add-product'});
});

// /admin/all => post request.
router.post('/add-product', (req, res , next) => {             // limiting  middleware for only post post request.
    console.log("New product is added sucessfully!");
    products.push({title : req.body.title});
    
    // res.sendFile(path.join(__dirname, '../', 'view', 'added.html'));

    res.redirect('/');
})

module.exports.router = router;
module.exports.products = products;