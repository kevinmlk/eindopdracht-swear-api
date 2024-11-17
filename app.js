const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// Define routes
const apiOrderRouter = require('./routes/api/v1/orders');

// Import mongoose
const mongoose = require('mongoose');

// Import config
const config = require('config');

// Import cors
const cors = require('cors');

// Connect to MongoDB
const connection = config.get('mongodb');
console.log(`Connecting to MongoDB: ${connection}`);
mongoose.connect(connection);


const app = express();

// Enable cors
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Place routes on URL
app.use('/api/v1/orders', apiOrderRouter);

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
