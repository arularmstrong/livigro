var express = require('express');
var router = express.Router();
var userService = require('../services/userService');
router.post('/register', function (req, res) {
  userService.register(req,res);
})

router.post('/verifyotp', function (req, res) {
  userService.verifyOtp(req,res);
})

router.post('/registeruser', function (req, res) {
  userService.registerVerifiedUser(req,res);
})

router.get('/resendotp', function (req, res) {
  userService.resendOtp(req,res);
})

module.exports = router;