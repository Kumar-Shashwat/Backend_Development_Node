const express = require('express');
const router = express.Router();
const path = require('path');



router.get( '/phone',(req, res , next) => {
    // console.log('In the middleware section of phones');
    res.send('In the middleware section of phones');
    // next();
});


router.get('/',(req, res , next) => {
    // console.log("In the last middleware!");
    res.sendFile(path.join(__dirname, '../', 'view', 'shop.html'));

});

module.exports = router;