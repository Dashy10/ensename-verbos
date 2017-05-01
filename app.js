require('dotenv').config();
//DEFINE PACKAGES THAT ARE SHIPPED BY AUTOGENERATOR TEMPLATE
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
// MORGAN IS A MIDDLEWARE THAT LOGS DATA INTO OUR CONSOLE
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// DEFINE WHERE WE WILL BE CREATING OUR ROUTES
var index = require('./routes/index');
var users = require('./routes/users');
// ALLOWS US TO USE EXPRESS METHODS
var app = express();

// view engine setup
// DEFINE TEMPLATING AND WHERE OUR VIEW FILES LIVE
app.set('views', path.join(__dirname, 'views'));
// DEFINE WHICH VIEW ENGINE WE ARE USING
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// THIS IS ALL MIDDLEWARE
// MIDDLEWARE ARE ANY NUMBER OF FUNCTIONS INVOKED BY EXPRESS JS ROUTING LAYER BEFORE FINAL REQUEST
// HANDLERS ARE MADE
// MOUNTING IN THE BEGINNING OF HTTP REQUEST AND AT THE END OF HTTP RESPONSE
app.use(logger('dev'));
// USE TO RETRIEVE DATA FROM FRONT-END
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// GIVES US ACCESS TO THE PUBLIC FOLDER (CSS/JS/IMAGES/ETC)
app.use(express.static(path.join(__dirname, 'public')));

// LOOKS FOR THE DEFINITION OF OUR ROUTES
app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
// THIS IS A MIDDLEWARE FUNCTION WITH NO MOUNTPATH
// THE FUNCTION IS EXECUTED EVERY TIME THE APP RECEIVES A REQUEST
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
