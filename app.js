var createError = require('http-errors');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var db = require('./server/db/mongoose');
var elastic = require('./server/db/elastic');
var user = require('./server/controllers/userController');
var booking = require('./server/controllers/bookingController');
var lab = require('./server/controllers/labController');
var package = require('./server/controllers/packageController');



var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist/livigro')));
app.use('/', express.static(path.join(__dirname, 'dist/livigro')));

app.use('/api/user',user);
app.use('/api/booking',booking);
app.use('/api/lab',lab);
app.use('/api/package',package);


app.use((req, res, next)=> {
  next(createError(404));
});



module.exports = app;