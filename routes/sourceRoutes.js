const express = require('express'),
      sourceRouter = express.Router(),
	  	Source = require('../models/source'),
	  	Post = require('../models/post');


sourceRouter.route('/:s_id')
	.get((req, res) => {
	 	var id = String(req.params.s_id);

	 	//find the source and render
	 	Source.findOne({id: id}, (err, source) => {
	 		if(err)
              return console.log(err);

          	//===================================
          	// get posts from source and render data to source page
          	const postList = Post.find({source: source.name});
		    const resources = {
		      postResources: postList.exec.bind(postList)
		    };

			async.parallel(resources, (error, results)=> {
			    if(error){
			      res.status(500).send(error);
			      return;
			    }
			    const info = results;
			    const postArray = [...info.postResources];

			    //put most recent posts first
			    postArray.reverse();

			    res.render('pages/source',
			 		{
			 			name: source.name,
			 			url: source.url,
			 			desc: source.desc,
			 			descSource: source.descSource,
			 			wikiURL: source.wikiURL,
			 			imageURL: source.imageURL,
			 			postArray: postArray
			 		})
			}); // end async

	 	}) // end find Source

	}); // end GET


module.exports = sourceRouter;