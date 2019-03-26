const axios = require('axios')
const { formattedDate } = require('../dateUtils')
const { randomPosition } = require('../positionUtils')

const getSongData = async date => {
  try {
    const { data } = await axios.get(
      `http://localhost:5000/rb?date=${formattedDate(
        date
      )}&position=${randomPosition(30)}`
    )
    return data.song
  } catch (error) {
    return error
  }
}

const createSet = quantity => {
  const set = []
  while (set.length < quantity) {
    set.push(getSongData(new Date()))
  }
  return set
}

module.exports = { createSet, getSongData }
