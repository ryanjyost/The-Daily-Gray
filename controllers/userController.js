var User = require('../models/user.js');

module.exports = {

	find: function(params, callback){
		User.find(params, function(err, users){
			if(err){
				callback(err, null)
				return
			}

			callback(null, users);
		})
	},

	findById: function(id, callback){
		User.findById(id, function(err, user){
			if(err){
				callback(err, null)
				return
			}

			callback(null, user);
		})
	},

	update: function(id, params, callback){
		User.findByIdAndUpdate(id, params, {new:true}, function(err, topic){
			if(err){
				callback(err, null)
				return
			}

			callback(null, user);
		})
	},

	delete: function(id, callback){
		User.findByIdAndRemove(id, function(err, user){
			if(err){
				callback(err, null)
				return
			}

			callback(null, null);
		})
	},
}