var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var assert=require('assert');
var mongoose = require('mongoose'),
assert = require('assert');

var index = require('./routes/index');
var users = require('./routes/users');
var Customers=require('./routes/customerRouter');
var Staff=require('./routes/staffRouter');
var Items=require('./routes/itemRouter');
var app = express();
var url = 'mongodb://localhost:27017/enzo';
mongoose.connect(url);
var db=mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('Connected Successfully');
});
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use('/bower_components',  express.static( path.join(__dirname, '/bower_components')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));
app.use('/', index);
app.use('/users', users);
app.use('/customers', Customers);
app.use('/items', Items);
app.use('/staff', Staff);

app.listen(3000, function () {
    console.log('Server listening on port 3000!');
});