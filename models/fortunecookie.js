//=============Modules==============
var mongoose = require('mongoose');

//=============Schema===============

var FortunecookieSchema = mongoose.schema({
  description: {type: String}
});


//=============Exports==============
module.exports = mongoose.model('fortunecookie', FortunecookieSchema);
