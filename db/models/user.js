const Sequelize = require('sequelize')
const db = require('../index')

const User = db.define('user', {
  email: {
    type: Sequelize.STRING,
    unique: true,
  },
  spotifyId: {
    type: Sequelize.STRING,
  },
  spotifyAccessToken: {
    type: Sequelize.STRING,
  },
  spotifyRefreshToken: {
    type: Sequelize.STRING,
  },
})

User.findBySpotifyId = function(spotifyId) {
  return User.findOne({
    where: {
      spotifyId,
    },
  })
}

User.getAllUsers = function() {
  return User.findAll()
}

module.exports = User
