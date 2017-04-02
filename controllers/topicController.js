var Topic = require('../models/topic.js');

module.exports = {

	find: function(params, callback){
		Topic.find(params, function(err, topics){
			if(err){
				callback(err, null)
				return
			}

			callback(null, topics);
		})
	},

	findById: function(id, callback){
		Topic.findById(id, function(err, topic){
			if(err){
				callback(err, null)
				return
			}

			callback(null, topic);
		})
	},

	create: function(params, callback){
     let topicInfo = {
     	name: params.name
     }


     Topic.create(topicInfo, function(err, topic){
			if(err){
				callback(err, null)
				return
			}
			callback(null, topic);
		})
	},

	update: function(id, params, callback){
		Topic.findByIdAndUpdate(id, params, {new:true}, function(err, topic){
			if(err){
				callback(err, null)
				return
			}

			callback(null, topic);
		})
	},

	delete: function(id, callback){
		Topic.findByIdAndRemove(id, function(err, topic){
			if(err){
				callback(err, null)
				return
			}

			callback(null, null);
		})
	},
}