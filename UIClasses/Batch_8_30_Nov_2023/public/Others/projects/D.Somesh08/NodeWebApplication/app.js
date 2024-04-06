var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var studentData = require('./routes/StudentDetails');
var ValidatateUserRouter = require('./routes/validateUser');
var registerUserIntoDb = require('./routes/newUserSignUpService');
var getProductDetails = require('./routes/getProductDetails');
var addToCartRouter = require('./routes/addToCart');
var isUserLoggedInROuter = require('./routes/checkIsUserLoggedin');
var logOutUserRouter = require('./routes/logOutUser');
var cartItemsCountRouter = require('./routes/cartItemsCount');
var cartItemsRouter = require('./routes/cartItemsOfUser');
var addproductrouter = require('./routes/SellarRelated/AddProductDetails');
var uploadResourcesRouter = require('./routes/SellarRelated/UploadResources');

var app = express();

//express-session
app.use(session({
  secret: 'my secret key',
  cookie: { maxAge: 600000 }
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
console.log('__dirname : ', __dirname)

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/get/studentdata', studentData);
app.use('/get/userData', ValidatateUserRouter);
app.use('/signup/newUser', registerUserIntoDb);
app.use('/get/productDetailsFromDb', getProductDetails);
app.use('/product/addToCart', addToCartRouter);
app.use('/check/userValid', isUserLoggedInROuter);
app.use('/user/logOut', logOutUserRouter);
app.use('/cartItems/count', cartItemsCountRouter);
app.use('/get/cartItems/', cartItemsRouter);
app.use('/upload/resource', uploadResourcesRouter);

// Seller related api's
app.use('/add/productDetails', addproductrouter);

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
