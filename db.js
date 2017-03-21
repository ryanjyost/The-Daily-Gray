

//var URL = 'mongodb://skoosh:skoosh2016@ds157499.mlab.com:57499/media-bias-map';
var URL = 'mongodb://localhost/test'

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(URL);
