var mongoose = require('mongoose');

var sourceSchema = new mongoose.Schema({
  name: String,
  url: String,
  desc: String,
  descSource: String,
  wikiURL: String,
  imageURL: String,
});


module.exports = mongoose.model('source', sourceSchema);