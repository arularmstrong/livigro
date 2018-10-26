var express = require('express');
var User = require('../models/user');

var uuidv1 = require('uuid/v1');
exports.login = (req,res)=>{
    User.findOne({mobile:req.body.mobile,password:req.body.password},(err,data)=>{
        if(err){
            res.send({
                status: 'fail',
                data: {}
              });
        }
        else
        {
            
            res.send({
                status: 'success',
                data: data
              });
        }
    });
}

exports.verifyOtp = (req,res)=>{

    User.findOne({userId:req.body.id,otp:req.body.otp},(err,data)=>{
        if(err){
            res.send({
                status: 'fail',
                data: {}
              });
        }
        else{
            if(data){
                res.send({
                    status: 'success',
                    code:200,
                    data: data
                  });
            }
            else{
                res.send({
                    status: 'success',
                    code:200,
                    data: {}
                  });
            }
        }
    });

}

exports.register = (req,res)=>{
    var id = uuidv1();
    var otp = Math.random()*10000;
    otp = otp.toString();
    otp = otp.slice(0,otp.indexOf('.'));
    User.findOne({mobile: req.body.mobile},(err,data)=>{
        if(err){
            res.send({
                status: 'fail',
                data: {}
              });
        }
        else{
            if(data){
                res.send({
                    status: 'success',
                    code: 200,
                    data: data
                  });
            }
            else{
                var user = new User({
                    _id: id,
                    userId: id,
                    mobile: req.body.mobile,
                    otp: otp
                });
                user.save((err)=>{
                    if(err){
                        res.send({
                            status: 'fail',
                            data: {}
                          });
                    }
                    else{
                        //call otp service
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
        }
    });
    
}

exports.registerVerifiedUser = (req,res)=>{
User.updateOne({userId: req.body.id},{$set:{status:101,password:req.body.password}}).then((data,err)=>{
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
            code: 200,
            data: {}
          });
    }
});
}

exports.resendOtp = ()=>{
    User.findOne({userId:req.body.id},(err,data)=>{
        if(err){
            res.send({
                status: 'fail',
                data: {}
              });
        }
        else
        {
            //call otp service
            res.send({
                status: 'success',
                data: data
              });
        }
    });
}

