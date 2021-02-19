
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const users = require('../model/userschema')


function initialize(passport, getUserByEmail, getUserById) {
  console.log('test');
  const authenticateUser = async (name, password, done) => {
    const user = users.findOne({name : name})
    if (user == null) {
      return done(null, false, { message: 'No user with that email' })
    }

    try {
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user)
      } else {
        return done(null, false, { message: 'Password incorrect' })
      }
    } catch (e) {
      return done(e)
    }
  }

  passport.use(new LocalStrategy({ usernameField: 'name' }, authenticateUser))
  passport.serializeUser((user, done) => done(null, user.id))
  passport.deserializeUser((id, done) => {
    return done(null, getUserById(id))
  })
}

module.exports =  initialize