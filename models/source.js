var mongoose = require('mongoose');

let id = `s_${Date.now()}`;

var sourceSchema = new mongoose.Schema({
  id: {type: String, default: id},
  name: String,
  url: String,
  desc: String,
  descSource: String,
  wikiURL: String,
  imageURL: String,
});

// Export the Mongoose model
module.exports = mongoose.model('source', sourceSchema);