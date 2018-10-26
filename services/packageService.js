var express = require('express');
var Package = require('../models/package');
var uuidv1 = require('uuid/v1');

exports.addPackage = (req,res)=>{
    var id = uuidv1(); 
    var package = new Package({
        _id: id,
        packageId:id,
        packageName:req.body.name,
        tests: req.body.tests,
        labId: req.body.labId,
        fasting:req.body.fasting,
        price: req.body.price,
        discount: req.body.discount
    });
    package.save((err)=>{
        if(err){
            res.send({
                status: 'fail',
                data: {}
              });
        }
        else{
            res.send(
                {
                    status: 'success',
                    code: 200,
                    data: {}
                  }
            );
        }
    });
}

exports.listPackages = (req,res)=>{
    Package.find().sort({'sold': -1}).exec((err,data)=>{
        if(err){
            console.log(err)
            res.send({
                status: 'fail',
                data: {}
              });
        }
        else{
            
                res.send({
                    status: 'success',
                    code:200,
                    data: data
                  });
                }
    });
}

exports.searchPackage = (req,res)=>{
Package
}

