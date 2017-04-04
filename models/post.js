var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
  xy: Array,
  url: String,
  source: String,
  title: String,
  description: String,
  topic: String,
  imageURL: String,
  created_at:{ type: Date, default: Date.now }
});

module.exports = mongoose.model('post', postSchema);