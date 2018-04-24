var mongoose = require("mongoose");

var screenshotSchema = new mongoose.Schema({
  site: String,
  created_at: { type: Date, default: Date.now },
  uploaded_at: { type: Date, default: Date.now },
  url: String,
  secure_url: String
});

module.exports = mongoose.model("screenshot", screenshotSchema);
