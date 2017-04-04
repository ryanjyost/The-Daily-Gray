"use strict"

const express = require('express');
const path = require('path');
const db = require('./db');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');

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

//session
app.use(session({secret: 'skoosh'}));
require('./config/passport')(app);

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
