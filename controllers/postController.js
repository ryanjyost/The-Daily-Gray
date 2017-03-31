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
		var xy = params.xy;
		var url = params.url;

		og(url, function(err, meta){
	        // if(err){
	        // 	res.send('Sorry, there was an error adding this to Media Bias Map!')
	        // }

	        console.log("---------START META---------------");
	        console.log(meta);
	        console.log("-----------END META---------------");

	        let postInfo = {
	        	xy: [Number(xy[1]), Number(xy[3])],
	        	url: url,
	        	source: meta.site_name,
	        	title: meta.title,
	        	description: meta.description,
	        	imageURL: meta.image.url
	        }

	        console.log(postInfo)

	    Post.save(postInfo, function(err, post){
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