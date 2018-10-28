var express = require('express');
var router = express.Router();
var bookingService = require('../services/bookingService');
router.post('/bookpackage', function (req, res) {
    bookingService.bookPackage(req,res);
})



module.exports = router;