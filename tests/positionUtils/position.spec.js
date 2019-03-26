const { expect } = require('chai')
const { randomPosition } = require('../../positionUtils')

describe('positionUtils', () => {
  describe('randomPosition', () => {
    it('returns a random position between 1 and the given max', () => {
      expect(randomPosition(50)).to.be.greaterThan(0)
      expect(randomPosition(50)).to.be.lessThan(51)
    })
  })
})
