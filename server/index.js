const express = require('express')
const app = express()
const morgan = require('morgan')
const path = require('path')
const passport = require('passport')
const db = require('../db')
const addMiddleware = () => {
  // auth middleware

  passport.serializeUser((user, done) => done(null, user.id))

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await db.models.user.findById(id)
      done(null, user)
    } catch (err) {
      done(err)
    }
  })
  app.use(passport.initialize())

  // parsing
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  // routes
  app.use('/api', require('./api'))
  app.use('/auth', require('./auth'))

  // static files
  app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/login.html'))
  })
  app.use(express.static(path.join(__dirname, '..', 'public')))
  app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'))
  })

  // error handling
  app.use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
  })
}

addMiddleware()
module.exports = app
