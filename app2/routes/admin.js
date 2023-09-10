const express = require('express');
const router = express.Router();
const path = require('path');

// /admin/add-phone => get request.
router.get('/add-phone', (req,res,next) => {
    res.sendFile(path.join(__dirname, '../', 'view' , 'add-phone.html'));
});

// /admin/all => post request.
router.post('/all',(req, res , next) => {             // limiting  middleware for only post post request.
    console.log("New phone is added sucessfully!");
    console.log(req.body);
    res.write("<p>New phone is added sucessfully!</p>");
    res.write('<h1> all mobile phones are here for you.</h1>'); 
    res.end();

})

module.exports = router;