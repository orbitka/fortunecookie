//=============Modules==============
var mongoose = require('mongoose');

//=============Schema===============

var FortunecookieSchema = mongoose.Schema({
  description: {type: String}
});


//=============Exports==============
module.exports = mongoose.model('Fortunecookie', FortunecookieSchema);
