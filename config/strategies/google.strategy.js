var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

module.exports = function(app) {
  passport.use(new GoogleStrategy({
  clientID: '52253389001-8ur1dufn11hd3n0gef5qlfqmb8ibrag2.apps.googleusercontent.com',
  clientSecret: 'IjPhH_gva44wiPtUKdsMB2Zg',
  callbackURL: 'http://localhost:3000/auth/google/callback'},
  function(req, accessToken, refreshToken, profile, done){
    var user = {};

    user.email = profile.emails[0].value;
    user.image = profile._json.image.url;
    user.displayName = profile.displayName;

    user.google = {};
    user.google.id = profile.id;
    user.google.token = accessToken;

    done(null, user)
  }
));
}