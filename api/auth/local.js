const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const config = require('../../config/server')
const axios = require('axios')

passport.use(new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password'
  },
  function (email, password, done) {
    axios.post(`${config.apiUrl}/custom/login/`, { email, password }).then(apiRes => {
      const { user, token } = apiRes.data
      done(null, { ...user, token })
    }).catch((err) => {
      if (err) {
        console.log(err.stack)
      }
      done(null, null)
    })
  }
))

passport.use('local-signup', new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  },
  function (req, email, password, done) {
    console.log(req)
    axios.post(`${config.apiUrl}/custom/register/`, req.body).then(apiRes => {
      const { user, token } = apiRes.data
      done(null, { ...user, token })
    }).catch((err) => {
      if (err) {
        console.log(err.stack)
      }
      done(null, null)
    })
  }
))
