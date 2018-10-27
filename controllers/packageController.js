var express = require('express');
var router = express.Router();
var packageService = require('../services/packageService');
router.post('/addpackage', function (req, res) {
  packageService.addPackage(req,res);
})

router.get('/listpackages', function (req, res) {
    packageService.listPackages(req,res);
  })

  router.get('/searchpackage', function (req, res) {
    packageService.searchPackage(req,res);
  })
module.exports = router;