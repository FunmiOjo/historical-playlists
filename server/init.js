const server = require('./index')
const db = require('../db')
const PORT = process.env.PORT || 8080

const init = async () => {
  await db.sync()
  server.listen(PORT, () => console.log(`Server listening at port ${PORT}`))
}

init()
