const express = require('express');
const router = express.Router();
const path = require('path');

router.use((req, res, next) => {
    res.status(404);
    res.sendFile(path.join(__dirname, '../', 'view', 'error.html'));
} );

module.exports = router;