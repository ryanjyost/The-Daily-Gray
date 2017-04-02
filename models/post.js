var mongoose = require('mongoose');

let id = `p_${Date.now()}`;

var postSchema = new mongoose.Schema({
 // id: {type: String, default: id},
  xy: Array,
  url: String,
  source: String,
  title: String,
  description: String,
  tags: Array,
  imageURL: String,
  created_at:{ type: Date, default: Date.now }
});

// Export the Mongoose model
module.exports = mongoose.model('post', postSchema);