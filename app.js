var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var apiLogin = require('./routes/api/login');
var apiRegister = require('./routes/api/register');
var characterGenerator = require('./routes/api/characterGenerator');
var character = require('./routes/api/character');
var saveCharacter = require('./routes/api/saveCharacter');
var makePublic = require('./routes/api/makepublic');
var logout = require('./routes/api/logout');
var recoverPassword = require('./routes/api/recoverPassword');
var deleteUser = require('./routes/api/deleteUser');
require('./lib/connectDatabase');

const cors = require('cors');
var app = express();
//CORS:
app.use(cors({
  credentials: true,
  origin: 'http://localhost:3001',
}));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/login', apiLogin);
app.use('/api/register', apiRegister);
app.use('/api/charactergenerator', characterGenerator);
app.use('/api/character', character);
app.use('/api/savecharacter', saveCharacter);
app.use('/api/makepublic', makePublic);
app.use('/api/logout', logout);
app.use('/api/recover', recoverPassword);
app.use('/api/deleteuser', deleteUser)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
