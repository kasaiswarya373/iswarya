var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var signup = require('./routes/signuproutes');
var login = require('./routes/loginroute');
var WesternWear = require('./routes/Western');
var Groceries = require('./routes/groceries');
var welcomepage = require('./routes/welcomepageroute');
var sarees = require("./routes/sareeroute");
var beauty = require('./routes/beautyroute');
var mobiles = require('./routes/mobileroute');
var appliances = require('./routes/appliancesroute');
var homedecoratives = require('./routes/home_decorativeroute')
var app = express();

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
app.use('/signup/get', signup);
app.use('/Westernwear/products', WesternWear);
app.use('/groceries/products', Groceries)
app.use('/womensworld/offers', welcomepage);
app.use("/saree/products", sarees);
app.use('/beauty/products', beauty);
app.use('/login/details', login);
app.use('/home/decortive/products', homedecoratives);
app.use('/mobile/products', mobiles);
app.use('/appliances', appliances)
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});


var port = 4000;
app.listen(port, () => {
  console.log("server listening at" + port)
})


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
