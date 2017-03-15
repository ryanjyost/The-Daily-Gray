const express = require('express'),
      router = express.Router(),
      async = require('async'),
      og = require('open-graph');
      //should = require('should');

//models
const Post = require('../models/post');

//=================================
//homepage
router.route('/')
  .get((req, res)=> {
      const postList = Post.find({});
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

        res.render('pages/index', {postArray});
        // res.send('hey')
      });
  });

//============================
//Other Routes

router.use('/api', require('./api'))
router.use('/source', require('./sourceRoutes'))
router.use('/admin', require('./adminRoutes'))
router.use('/auth', require('./authRoutes'))

module.exports = router;