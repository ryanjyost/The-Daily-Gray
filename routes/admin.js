const express = require('express'),
      adminRouter = express.Router();

//models
const Source = require('../models/source');
const Topic = require('../models/topic');

//add source
adminRouter.route('/addSource')
	.get((req, res) => {
	  res.render('pages/addSource');
	})

//add topic
adminRouter.route('/addTopic')
	.get((req, res) => {
	  res.render('pages/addTopic');
	})


module.exports = adminRouter;