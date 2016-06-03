//=============Modules===============

var express = require('express');
var router = express.Router();
var Fortunecookie = require('../models/fortunecookie');

//=============Routing===============
router.get('/', function(req, res){
  Fortunecookie.find({}, function(err, databaseFortunecookies){
    console.log(err);
    res.json(databaseFortunecookies);
  });
});

router.post('/', function(req, res){
  var fortunecookieData = req.body;
  var newCookie = new Fortunecookie(fortunecookieData);
  console.log('new?');
  newCookie.save(function(err, databaseFortunecookies){
    console.log('saving');
    console.log(err);
    console.log(databaseFortunecookies);
    res.json( databaseFortunecookies );
  });
});



//=============Exports===============
module.exports = router;
