const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const config = require('../../config/server')
const axios = require('axios')

function extractProfile (profile) {
  let imageUrl = ''
  let email = ''
  if (profile.photos && profile.photos.length) {
    imageUrl = profile.photos[0].value
  }
  if (profile.emails && profile.emails.length) {
    email = profile.emails[0].value
  }
  return {
    googleId: profile.id,
    username: profile.displayName,
    image: imageUrl,
    email
  }
}

passport.use(new GoogleStrategy({
  clientID: '880345811505-sjcsjnh76rri2k2hb2uo7826ebk55cg1.apps.googleusercontent.com',
  clientSecret: 'ySwcBbC7l0D4P_sgu1WVI8Gh',
  callbackURL: 'http://localhost:3000/api/auth/google/callback',
  accessType: 'offline'
}, function (accessToken, refreshToken, profile, done) {
  const user = extractProfile(profile)
  axios.post(`${config.apiUrl}/custom/login/google`, { user }).then(apiRes => {
    const { user, token } = apiRes.data
    done(null, { ...user, token })
  }).catch((err) => {
    if (err) {
      console.log(err.stack)
    }
    done(null, null)
  })
}))

passport.serializeUser((user, cb) => {
  cb(null, user)
})
passport.deserializeUser((obj, cb) => {
  cb(null, obj)
})
