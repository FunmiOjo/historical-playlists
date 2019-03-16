const { expect } = require('chai')
const request = require('supertest')
const server = require('../../server')
const db = require('../../db')
const { getUser } = require('../utils')

describe.only('User routes', () => {
  beforeEach(() => db.sync({ force: true }))

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
