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
    
    res.sendFile(path.join(__dirname, '../', 'view', 'added.html'));

})

module.exports = router;