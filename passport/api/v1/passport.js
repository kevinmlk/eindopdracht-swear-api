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