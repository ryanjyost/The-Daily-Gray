var mongoose = require('mongoose');

let id = `p_${Date.now()}`;

var postSchema = new mongoose.Schema({
 // id: {type: String, default: id},
  x: String,
  y: String,
  url: String,
  source: String,
  title: String,
  description: String,
  imageURL: String,
  created_at:{ type: Date, default: Date.now }
});

// Export the Mongoose model
module.exports = mongoose.model('post', postSchema);