var Source = require('../models/source.js');

module.exports = {

	find: function(params, callback){
		Source.find(params, function(err, sources){
			if(err){
				callback(err, null)
				return
			}

			callback(null, sources);
		})
	},

	findById: function(id, callback){
		Source.findById(id, function(err, source){
			if(err){
				callback(err, null)
				return
			}

			callback(null, source);
		})
	},

	create: function(params, callback){
        Source.create(params, function(err, source){
			if(err){
				callback(err, null)
				return
			}
			callback(null, source);
		})
	},

	update: function(id, params, callback){
		Source.findByIdAndUpdate(id, params, {new:true}, function(err, source){
			if(err){
				callback(err, null)
				return
			}

			callback(null, source);
		})
	},

	delete: function(id, callback){
		Source.findByIdAndRemove(id, function(err, source){
			if(err){
				callback(err, null)
				return
			}

			callback(null, null);
		})
	},
}