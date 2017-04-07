const express = require('express'),
      router = express.Router();

//=================================
//homepage
router.route('/')
  .get((req, res)=> {
      res.sendFile(__dirname + '/public/index.html')
  });

//============================
//Other Routes
router.use('/api', require('./api'))
router.use('/admin', require('./admin'))
router.use('/auth', require('./auth'))
router.use('/users', require('./users'))

module.exports = router;