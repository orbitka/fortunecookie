//=============Modules===============

var express = require('express');
var router = express.Router();
var fortunecookie = require('../models/fortunecookie');

//=============Routing===============
router.get('/', function(req, res){
  fortunecookie.find({}, function(err, databaseFortunecookies){
    console.log(err);
    res.json(databaseFortunecookies);
  });
});

router.post('/', function(req, res){
  var fortunecookieData = req.body.fortunecookie;
  var fortunecookie = new fortunecookie(fortunecookieData);
  fortunecookie.save(function(err, databaseFortunecookies){
    res.json( databaseFortunecookies );
  });
});



//=============Exports===============
module.exports = router;
