var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
const employeeRouter = require('./routes/employeeRoute');
const repairmentsRouter = require('./routes/repairmentsRoute');
const carRouter = require('./routes/carRoute');

const empApiRouter = require('./routes/api/employeeApiRoute');
const carApiRouter = require('./routes/api/carApiRoute');
const repairmentApiRouter = require('./routes/api/repairmentApiRoute');

const sequelizeInit = require('./config/sequelize/init');

sequelizeInit().catch(err => {console.error(err)});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/employee', employeeRouter);
app.use('/repairments', repairmentsRouter);
app.use('/cars', carRouter);

app.use('/api/employee', empApiRouter);
app.use('/api/employee/:empId', empApiRouter);
app.use('/api/employee/add', empApiRouter);
app.use('/api/employee/:empId', empApiRouter);
app.use('api/employee/:empId', empApiRouter);

app.use('/api/car', carApiRouter);
app.use('/api/car/:carId', carApiRouter);
app.use('/api/car/add', carApiRouter);
app.use('/api/car/:carId', carApiRouter);
app.use('/api/car/:carId', carApiRouter);

app.use('/api/repairment', repairmentApiRouter);
app.use('/api/repairment/:repairmentId', repairmentApiRouter);
app.use('/api/repairment/add', repairmentApiRouter);
app.use('/api/repairment/:repairmentId', repairmentApiRouter);
app.use('/api/repairment/:repairmentId', repairmentApiRouter);

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

