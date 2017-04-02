var mongoose = require('mongoose');

let id = `s_${Date.now()}`;

var topicSchema = new mongoose.Schema({
  name: String,
});

// Export the Mongoose model
module.exports = mongoose.model('topic', topicSchema);