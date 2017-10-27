const express = require('express')
const axios = require('axios')
const config = require('../config/server')
// Create express router
const router = express.Router()

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

// Add POST - /api/login
router.post('/login', (req, res) => {
  const params = {
    userName: req.body.userName,
    password: req.body.password
  }
  return axios.post(`${config.apiUrl}/custom/login`, params).then(apiRes => {
    const { data } = apiRes
    if (data.user) {
      req.session.authUser = data.user
      req.session.token = data.token
      return res.json(data)
    }
  }).catch((err) => {
    if (err.response.status === 401) {
      return res.status(401).json({ message: 'Bad credentials' })
    } else {
      return res.status(500).json({ message: err })
    }
  })
})
router.post('/register', (req, res) => {
  axios.post(`${config.apiUrl}/custom/register`, req.body.user).then(apiRes => {
    const { data } = apiRes
    console.log(apiRes)
    if (data.user) {
      req.session.authUser = data.user
      req.session.token = data.token
      return res.json(data)
    }
  }).catch((err) => {
    if (err.response.status === 401) {
      return res.status(401).json({ message: 'Bad credentials' })
    } else {
      return res.status(500).json({ message: err })
    }
  })
})

// Add POST - /api/logout
router.post('/logout', (req, res) => {
  delete req.session.authUser
  delete req.session.token
  res.json({ ok: true })
})

// Export the server middleware
module.exports = {
  path: '/api',
  handler: router
}
