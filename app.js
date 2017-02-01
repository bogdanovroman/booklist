var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var engine = require('ejs-locals');

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://admin:admin@ds035776.mlab.com:35776/rbogdanov_users');
// mongoose.connect('mongodb://admin:admin@ds059375.mongolab.com:59375/buy_list');
mongoose.connect('mongodb://admin:admin@ds129179.mlab.com:29179/rbogdanov');
mongoose.connection.on('connected', function () {
    console.log('connected to db');
});

var render = require('./tools/render');
var ajax = require('./tools/ajax');
var db = require('./tools/db');
var users = require('./tools/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views/pages'));
app.set('view engine', 'ejs');
app.engine('ejs', engine);

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/')));

app.get('/', render.cleanLayout);
app.use('/users', users);
app.get('/all_lists', ajax.getAllLists);
app.post('/new_list', ajax.postNewList);
app.post('/new_user', ajax.postNewUIser);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
module.exports = app;
