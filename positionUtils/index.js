const randomPosition = max => {
  const position = Math.floor(Math.random() * max)
  return position > 0 ? position : position + 1
}

module.exports = { randomPosition }
