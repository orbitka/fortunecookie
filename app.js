//===================Modules=============
var express = require('express');
var morgan = require('morgan');

var app = express();

app.use(morgan('dev'));

app.set('view engine', 'ejs');

app.use(express.static('./public'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());

var mongoPath = 'mongodb://localhost/fortunecookies';
var mongoose = require('mongoose');
mongoose.connect(mongoPath);


//===================Routing=============
app.get('/', function(req, res){
  res.render('index');
});

var fortunecookiesRouter = require('./routes/fortunecookies');
app.use('/api/fortunecookies', fortunecookiesRouter);



//===================Listen==============
var port = 3000;
app.listen(port, function(){
  console.log('... waiting on port ' + port);
});
