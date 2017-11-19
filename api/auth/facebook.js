const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy
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
    facebookId: profile.id,
    username: profile.displayName,
    image: imageUrl,
    email
  }
}
const { clientID, clientSecret } = config.social.facebook
passport.use(new FacebookStrategy({
  clientID,
  clientSecret,
  callbackURL: `${config.appUrl}/api/auth/facebook/callback`,
  profileFields: ['id', 'emails', 'name', 'displayName']
}, function (accessToken, refreshToken, profile, done) {
  // Extract the minimal profile information we need from the profile object
  // provided by Google
  const user = extractProfile(profile)
  axios.post(`${config.apiUrl}/custom/login/facebook`, { user }).then(apiRes => {
    const { user, token } = apiRes.data
    done(null, { ...user, token })
  }).catch((res) => (
    done(null, null)
  ))
}))
