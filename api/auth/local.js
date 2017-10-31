const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const config = require('../../config/server')
const axios = require('axios')

passport.use(new LocalStrategy(
  function (username, password, done) {
    axios.post(`${config.apiUrl}/custom/login/`, { username, password }).then(apiRes => {
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
  function (username, password, done) {
    axios.post(`${config.apiUrl}/custom/register/`, { username, password }).then(apiRes => {
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
