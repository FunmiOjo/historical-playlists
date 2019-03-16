const express = require('express')
const app = express()
const morgan = require('morgan')
const path = require('path')

const addMiddleware = () => {
  // logging
  app.use(morgan('dev'))

  // parsing
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  // static files
  app.use(express.static(path.join(__dirname, '..', 'public')))
  app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'))
  })

  // routes
  app.use('/users', require('./api/users'))
  // error handling
  app.use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
  })
}

addMiddleware()
module.exports = app
