var Post = require('../models/post.js');
var og = require('open-graph');

module.exports = {

	find: function(params, callback){
		Post.find(params, function(err, posts){
			if(err){
				callback(err, null)
				return
			}

			callback(null, posts);
		})
	},

	findById: function(id, callback){
		Post.findById(id, function(err, post){
			if(err){
				callback(err, null)
				return
			}

			callback(null, post);
		})
	},

	create: function(params, callback){
		var xy = params.xy,
				url = params.url,
				topic = params.topic

		Post.findOne({url: url}, (err, post) => {
			if(err) {
				console.log(err)
				return false
			}

			//if the post already exists
			if(post){
				console.log('ALREADY EXISTS!!!')
			}
		})

		og(url, function(err, meta){
	        // if(err){
	        // 	res.send('Sorry, there was an error adding this to Media Bias Map!')
	        // }

	        console.log("---------START META---------------");
	        console.log(meta);
	        console.log("-----------END META---------------");

	        let postInfo = {
	        	xy: [Number(xy[1]), Number(xy[3])] || [5,5],
	        	url: url || '',
	        	source: meta.site_name || '',
	        	title: meta.title || '',
	        	description: meta.description || '',
	        	topic: topic || '',
	        	imageURL: meta.image.url || ''
	        }

	        console.log(postInfo)

	    Post.create(postInfo, function(err, post){
				if(err){
					callback(err, null)
					return
				}
				callback(null, post);
			})
        });
	},

	update: function(id, params, callback){
		Post.findByIdAndUpdate(id, params, {new:true}, function(err, post){
			if(err){
				callback(err, null)
				return
			}

			callback(null, post);
		})
	},

	delete: function(id, callback){
		Post.findByIdAndRemove(id, function(err, post){
			if(err){
				callback(err, null)
				return
			}

			callback(null, null);
		})
	},
}