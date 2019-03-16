const { expect } = require('chai')
const User = require('../../db/models/user')
const db = require('../../db')
const { getUser } = require('../utils')

describe('User model', () => {
  beforeEach(() => {
    return User.sync({ force: true })
  })

  describe('Methods', () => {
    describe('findBySpotifyId', async () => {
      it('returns the user with the matching spotifyId', async () => {
        const [user1, user2, user3] = await Promise.all([
          User.create(getUser()),
          User.create(getUser()),
          User.create(getUser()),
        ])

        const user1Result = await User.findBySpotifyId(user1.spotifyId)
        expect(user1Result.spotifyId).to.equal(user1.spotifyId)
        expect(user1Result.email).to.equal(user1.email)
      })
    })
  })
})
