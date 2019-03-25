const { expect } = require('chai')
const request = require('supertest')
const server = require('../../server')
const db = require('../../db')
const { User } = require('../../db/models')
const { getUser } = require('../utils')

describe('User routes', () => {
  beforeEach(async () => await db.sync({ force: true }))

  describe('GET api/users/:spotifyId', () => {
    it('returns the with the matching spotifyId', async () => {
      const user1 = await User.create(getUser())
      const user2 = await User.create(getUser())
      const response = await request(server).get(
        `/api/users/${user1.spotifyId}`
      )
      expect(response.statusCode).to.equal(200)
      expect(response.body.spotifyId).to.equal(user1.spotifyId)
    })
  })

  describe('GET api/users', () => {
    it('returns all users', async () => {
      const user1 = await User.create(getUser())
      const user2 = await User.create(getUser())
      const response = await request(server).get('/api/users')
      expect(response.statusCode).to.equal(200)
      expect(response.body.length).to.equal(2)
      expect(
        response.body.filter(
          user =>
            user.spotifyId === user1.spotifyId ||
            user.spotifyId === user2.spotifyId
        ).length
      ).to.equal(2)
    })
  })

  describe('POST api/users', () => {
    it('creates a new user', async () => {
      const user = getUser()
      const response = await request(server)
        .post('/api/users')
        .send(user)
      expect(response.statusCode).to.equal(200)
      expect(response.body.spotifyId).to.equal(user.spotifyId)
    })
  })
})
