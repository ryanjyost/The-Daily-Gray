"use strict"

var express = require('express');
var path = require('path');
var db = require('./db');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', (process.env.PORT || 3000));

//======================================
//middleware
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));

//======================================
//routing
app.use('/', require('./routes'));

//=================================
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.get((req, res)=> {
    res.sendFile(__dirname + '/public/index.html')
});

//=================================
// catch 404 and forward to error handler
app.get('*', function(req, res, next) {
  res.render('pages/index')
});


//=================================
//Listen on port
app.listen(app.get('port'), (error) => {
    if(error)
      console.error(error)
    console.log('app is listening on 3000')
})


module.exports = app;
