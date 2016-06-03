//===================Modules=============
var express = require('express');
var app = express();

var morgan = require('morgan');
app.use(morgan('dev'));

app.set('view engine', 'ejs');

app.use(express.static('./public'));

var bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: false }));

var mongoPath = process.env.MONGODB_URI || 'mongodb://localhost/fortunecookies';
var mongoose = require('mongoose');
mongoose.connect(mongoPath);
// here we have to change for HEROKU: mongoPath


//===================Routing=============
app.get('/', function(req, res){
  res.render('index');
});

var fortunecookiesRouter = require('./routes/fortunecookies');
app.use('/api/fortunecookies', fortunecookiesRouter);



//===================Listen==============
var port = 8080;
app.listen(port, function() {
  console.log('... waiting on port ' + port);
});
