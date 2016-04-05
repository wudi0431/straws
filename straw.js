var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var strawFont = require('./routes/strawFont');
var loadFontlist = require('./routes/loadFontList');
var downFiels = require('./routes/downFiels');
var uploadFiels = require('./routes/uploadFiels.js');
 var multer = require('multer');

var app = express();
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// var  destPath = path.join('./public/fonts/');
// app.use(multer({ dest: destPath}));

app.use(multer({
  dest:'./public/fonts/',
   rename: function (fieldname, filename) { 
    return filename;
  },
  onFileUploadStart: function (file, data) {
    console.log(file.originalname);
  },
  onFileUploadComplete: function (file) {
    console.log(file.fieldname + ' uploaded to  ' + file.path);
  }
}));


var ejs = require('ejs');

// view engine setup
app.set('views', __dirname + '/views');
app.engine('.html', ejs.__express);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));

 

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));    
app.use(cookieParser());
var oneYear = 31557600000;
app.use(express.static(path.join(__dirname, 'public'),{ maxAge: oneYear }));

app.use(express.static(__dirname + "/public/temp"));

app.use('/', routes);

app.use('/strawFont', strawFont);

app.use('/loadFontlist', loadFontlist);

app.use('/downFiels', downFiels);

app.use('/uploadFiels', uploadFiels);





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  // res.render('error', {
  //   message: err.message,
  //   error: {}
  // });
});


module.exports = app;