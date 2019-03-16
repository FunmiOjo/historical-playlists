const router = require('express').Router()
const { User } = require('../../db/models')

router.post('/', async (req, res, next) => {
  try {
    const { spotifyId, email } = req.body
    res.send(await User.create({ spotifyId, email }))
  } catch (error) {
    next(error)
  }
})
module.exports = router
