var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var User = require('../../models/user')

module.exports = function(app) {
  passport.use(new GoogleStrategy({
  clientID: '52253389001-8ur1dufn11hd3n0gef5qlfqmb8ibrag2.apps.googleusercontent.com',
  clientSecret: 'IjPhH_gva44wiPtUKdsMB2Zg',
  callbackURL: 'http://localhost:3000/auth/google/callback'},
  function(req, accessToken, refreshToken, profile, done){
    var user = {};
    // var query = {'google.id': profile.id}

    User.findById(profile.id, (error, user) => {
      if(user){
        console.log('found')
        done(null, user)
      } else {
        console.log('not found');
        var user = new User;
        user.email = profile.emails[0].value;
        user.image = profile._json.image.url;
        user.displayName = profile.displayName;

        user.google = {};
        user.google.id = profile.id;
        user.google.token = accessToken;

        user.save();
        done(null, user)
      }
    })
  }
))}