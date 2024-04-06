var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/validateUserLogin');
var productdetailsRouter = require('./routes/productDetails');
var newuserSignupRouter = require('./routes/newUserSignup');
//var addItemToCardRouter = require("./routes/addToCart");
var isUserLoggedin = require("./routes/checkIsUserLoggedin");
var logoutRouter = require("./routes/signoutUser");
var cartCountRouter = require("./routes/getCartCount");
var filteredProdutDetailsRouter = require("./routes/getFilteredProductList");
//var addProductDetailsRouter = require("./routes/addProductDetails");
//var uploadResourcesRouter = require("./routes/uploadResource");
//var deleteCartItemRouter = require("./routes/deleteCartItem");

var app = express();
app.use(session({
  secret: 'My Secret',
  cookie: { maxAge: 100000 }
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/validate/login/credentials',loginRouter);
app.use('/get/product/details',productdetailsRouter);
app.use('/get/signup/details',newuserSignupRouter);
//app.use("/products/addToCart", addItemToCardRouter);
app.use("/check/UserSession", isUserLoggedin);
app.use("/userSession/logout", logoutRouter);
app.use("/cartCount", cartCountRouter);
app.use("/get/filteredProductList", filteredProdutDetailsRouter);
//app.use("/add/productDetails", addProductDetailsRouter);
//app.use("/upload/fileResource", uploadResourcesRouter);
//app.use("/deleteCart", deleteCartItemRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
