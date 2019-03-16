const router = require('express').Router()
const { User } = require('../../db/models')

router.get('/', async (req, res, next) => {
  try {
    res.send(await User.getAllUsers())
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const { spotifyId, email } = req.body
    res.send(await User.create({ spotifyId, email }))
  } catch (error) {
    next(error)
  }
})
module.exports = router
