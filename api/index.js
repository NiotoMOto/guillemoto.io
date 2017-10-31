const express = require('express')
const axios = require('axios')
const config = require('../config/server')
// Create express router
const router = express.Router()
var morgan = require('morgan')
const passport = require('passport')
require('./auth/facebook')
require('./auth/google')
require('./auth/local')

// Transform req & res to have the same API as express
// So we can use res.status() & res.json()
var app = express()

router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})

router.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }))
router.use(require('cookie-parser')())
router.use(require('body-parser').urlencoded({ extended: true }))

router.use(passport.initialize())
app.use(passport.session())
router.use(morgan('combined'))

router.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }))

router.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => res.redirect('/'))

router.get('/auth/facebook',
  passport.authenticate('facebook', { scope: ['email'] }))

router.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  (req, res) => res.redirect('/'))

router.post('/login',
  passport.authenticate('local', { failWithError: true }),
  (req, res, next) => {
    return res.json(req.user)
  },
  (err, req, res, next) => {
    return res.json(err)
  }
)

router.post('/register',
  passport.authenticate('local-signup', { failWithError: true }),
  (req, res, next) => {
    return res.json(req.user)
  },
  (err, req, res, next) => {
    return res.json(err)
  }
)

router.post('/logout', (req, res) => {
  req.logout()
  res.json({ ok: true })
})

// Export the server middleware
module.exports = {
  path: '/api',
  handler: router
}
