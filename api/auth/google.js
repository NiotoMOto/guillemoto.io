const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const config = require('../../config/')
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

const { clientID, clientSecret } = config.social.google
passport.use(new GoogleStrategy({
  clientID,
  clientSecret,
  callbackURL: `${config.appUrl}/api/auth/google/callback`,
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
