var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  displayName: String,
  image: String,
  email: String,
  google: Object

});


module.exports = mongoose.model('user', userSchema);