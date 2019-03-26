const { expect } = require('chai')
const {
  currentDayOfMonth,
  currentMonth,
  randomYear,
  formattedDate,
} = require('../../dateUtils')

describe('Year utils', () => {
  describe('randomYear', () => {
    it('returns a random year between the current year and the given year', () => {
      const date = new Date('March 25, 2019')
      const currentYear = date.getFullYear()
      const year = randomYear(1958)
      expect(year).to.be.greaterThan(1957)
      expect(year).to.be.lessThan(currentYear + 1)
    })
  })

  describe('currentMonth', () => {
    it('returns the current month as a zero-padded number', () => {
      expect(currentMonth(new Date('March 25, 2019'))).to.equal('03')
    })
  })

  describe('currentDayOfMonth', () => {
    it('returns the day of the month as a zero-padded number', () => {
      expect(currentDayOfMonth(new Date('March 2, 2019'))).to.equal('02')
    })
  })

  describe('formattedDate', () => {
    xit('returns date in YYYY-MM-DD format', () => {
      expect(formattedDate(new Date('March 25, 2019'))).to.equal('2019-03-25')
    })
  })
})
