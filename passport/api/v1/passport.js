// Include user model
const User = require('../../../models/api/v1/User');

// Include passport
const passport = require('passport');

// Use passport local strategy
passport.use(User.createStrategy());

// Serialize user
passport.serializeUser(User.serializeUser());

// Deserialize user
passport.deserializeUser(User.deserializeUser());

// Include passport jwt - webtoken strategy
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';

passport.use(new JwtStrategy(opts, async function(jwt_payload, done) {
  try {
      const user = await User.findOne({ _id: jwt_payload.id }); // Use promise-based approach
      if (user) {
          return done(null, user);
      } else {
          return done(null, false);
      }
  } catch (err) {
      return done(err, false);
  }
}));


// Export passport
module.exports = passport;