const express = require('express'),
      adminRouter = express.Router();

//models
const Source = require('../models/source');

//add source
adminRouter.route('/addSource')
	.get((req, res) => {
	  res.render('pages/addSource');
	})
	.post((req, res) => {
		console.log(req.body);

		let data = req.body;

		var source = new Source();
			source.name = data.name;
			source.url = data.url;
			source.desc = data.desc;
			source.descSource = data.descSource;
			source.wikiURL = data.wikiURL;
			source.imageURL = data.imageURL;

		// save source
	    source.save(function(err){
	      if (err)
	        res.send(err);
	    });

	    //go back to home page
	    res.render('pages/addSource');

	});


module.exports = adminRouter;