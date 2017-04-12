var mongoose = require('mongoose');

var topicSchema = new mongoose.Schema({
  name: String,
  tags: Array,
});


module.exports = mongoose.model('topic', topicSchema);