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
router.use('/admin', require('./admin'))
router.use('/auth', require('./auth'))

module.exports = router;