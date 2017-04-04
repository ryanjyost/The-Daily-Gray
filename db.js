var mongoose = require('mongoose');
var URL = 'mongodb://skoosh:skoosh2016@ds157499.mlab.com:57499/media-bias-map';

mongoose.Promise = global.Promise;
mongoose.connect(URL);
