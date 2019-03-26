const { expect } = require('chai')
const { createSet, getSongData } = require('../../billboardSongs')

describe.only('billboardSongs', () => {
  describe('getSongData', () => {
    it('returns data from a song on the Billboard R&B charts from the given date in a random year', async function() {
      const songData = await getSongData(new Date())
      expect(songData).to.haveOwnProperty('artist')
      expect(songData).to.haveOwnProperty('rank')
      expect(songData).to.haveOwnProperty('title')
    })
  })

  describe('createSet', function() {
    it('returns data for a given amount of songs', async function() {
      const set = await Promise.all(createSet(10))
      expect(set.length).to.equal(10)
      expect(set[7]).to.haveOwnProperty('artist')
    })
  })
})
