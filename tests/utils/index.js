const faker = require('faker')

const getUserName = () => {
  return faker.internet.userName()
}

const getEmail = () => {
  return faker.internet.email()
}

const getUser = () => {
  return { spotifyId: getUserName(), email: getEmail() }
}

module.exports = { getUser }
