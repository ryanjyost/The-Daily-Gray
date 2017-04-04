var mongoose = require('mongoose');

var topicSchema = new mongoose.Schema({
  name: String,
});


module.exports = mongoose.model('topic', topicSchema);