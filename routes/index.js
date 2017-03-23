const express = require('express'),
      router = express.Router();

//models
const Post = require('../models/post');

//=================================
//homepage
router.route('/')
  .get((req, res)=> {
      res.sendFile(_dirname + '/public/index.html')
  });

//============================
//Other Routes

router.use('/api', require('./api'))
router.use('/source', require('./sourceRoutes'))
router.use('/admin', require('./adminRoutes'))
router.use('/auth', require('./authRoutes'))

module.exports = router;