const express = require('express'),
      authRouter = express.Router(),
      passport = require('passport');

//sign up
authRouter.route('/signUp')
  .get((req, res) => {
    res.render('pages/signUp');
  })

  .post((req, res) => {
    console.log(req.body)
  })

authRouter.route('/google/callback')
  .get(passport.authenticate('google', {
    successRedirect: '/users/',
    failure: '/error/'
  }));

authRouter.route('/google')
  .get(passport.authenticate('google', {
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email'
    ]
  }));



module.exports = authRouter;