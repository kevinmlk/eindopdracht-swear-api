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

passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({_id: jwt_payload.id}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));