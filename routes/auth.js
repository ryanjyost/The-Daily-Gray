const express = require('express'),
      authRouter = express.Router(),
      passport = require('passport');

//sign up
authRouter.route('/super-secret-signup')
  .get((req, res) => {
    res.render('pages/signUp');
  })

authRouter.route('/sign-up-success')
  .get((req, res) => {
    res.render('pages/signUpSuccess');
  })

authRouter.route('/google/callback')
  .get(passport.authenticate('google', {
    successRedirect: '/auth/sign-up-success/',
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