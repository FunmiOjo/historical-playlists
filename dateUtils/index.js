const randomYear = minYear => {
  const date = new Date()
  const currentYear = date.getFullYear()
  const yearsFromMin = Math.floor((currentYear - minYear) * Math.random())
  return minYear + yearsFromMin
}

// date should be instance of Date
const currentMonth = date => {
  const month = date.getMonth() + 1
  return month > 9 ? month : `0${month}`
}

const currentDayOfMonth = date => {
  const dayOfMonth = date.getDate()
  return dayOfMonth > 9 ? dayOfMonth : `0${dayOfMonth}`
}

const formattedDate = date => {
  return `${randomYear(1958)}-${currentMonth(date)}-${currentDayOfMonth(date)}`
}

module.exports = { formattedDate, randomYear, currentMonth, currentDayOfMonth }
