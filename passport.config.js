const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const initialize = (passport) => {
  const authenticateUser = async (email, password, done) => {
    const user = getUserByEmail(email);

    if (user == null) {
      return done(null, false, { message: 'No user found with that email' });
    }

    try {
      // authenticate user credentials... true, then valid credentials
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user);
      } else {
        return done(null, false, { message: 'Password incorrect' });
      }
    } catch (e) {
      return done(e);
    }
  };

  passport.use(new localStrategy({ usernameField: 'email' }), authenticateUser); // defaults to password, hence no need to explicitly declare
  passport.serializeUser((user, done) => {});
  passport.deserializeUser((id, done) => {});
};

module.exports = initialize;
