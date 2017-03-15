var express = require('express');
var apiRouter = express.Router();
var controllers = require('../controllers');
var og = require('open-graph');
var Post = require('../models/post');
var Source = require('../models/source');

apiRouter.get('/:resource', function(req, res, next){

	var resource = req.params.resource;
	var controller = controllers[resource];

	if(controller == null){
		res.json({
			confirmation: 'fail',
			message: 'Invalid Resource Request: ' + resource
		})
	}

	controller.find(req.query, function(err, results){
		if(err){
			res.json({
				confirmation: 'fail',
				message: err
			})

			return
		}

		res.json({
			confirmation: 'resource',
			results: results
		})
	})
})

apiRouter.get('/:resource/:id', function(req, res, next){

	var resource = req.params.resource,
		id = req.params.id;

	var controller = controllers[resource];

	if(controller == null){
		res.json({
			confirmation: 'fail',
			message: 'Invalid Resource Request: ' + resource + id
		})
	}

	controller.findById(id, function(err, result){
		if(err){
			res.json({
				confirmation: 'fail',
				message: err
			})
			return
		}

		res.json({
			confirmation: 'resource',
			result: result
		})
	})
})

//=================================
// Adding Post via Chrome Extension
apiRouter.post('/:resource', (req, res, next) => {

 	var resource = req.params.resource;
 	var controller = controllers[resource];

 	if(controller == null){
		res.json({
			confirmation: 'fail',
			message: 'Invalid Resource Post: ' + resource
		})
	}

	controller.create(req.body, function(err, result){
		if(err){
			res.json({
				confirmation: 'fail',
				message: err
			})
			return
		}

		res.json({
			confirmation: 'success',
			result: result
		})
	})
});


module.exports = apiRouter;