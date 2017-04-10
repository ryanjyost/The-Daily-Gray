const express = require('express'),
      router = express.Router();


//============================
//Main Routes
router.use('/api', require('./api'))
router.use('/admin', require('./admin'))
router.use('/auth', require('./auth'))
router.use('/users', require('./users'))

//=================================
//homepage
router.route('/')
  .get((req, res)=> {
      res.sendFile(__dirname + '/public/index.html')
  });

//=================================
//Privacy Policy
router.route('/privacy-policy')
  .get((req, res)=> {
     res.render('pages/privacyPolicy');
  });

//=================================
//Terms of Use
router.route('/terms-of-use')
  .get((req, res)=> {
     res.render('pages/termsOfUse');
  });

//=================================
//Contact Us
router.route('/contact-us')
  .get((req, res)=> {
     res.render('pages/contactUs');
  });

//=================================
//How It Works
router.route('/how-it-works')
  .get((req, res)=> {
     res.render('pages/howItWorks');
  });




module.exports = router;