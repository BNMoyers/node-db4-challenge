//dependencies and imports
require('dotenv').config()
const server = require('./server')

//test connection

server.get('/', (req, res) => {
    res.send("testing")
})

//port

const Port = process.env.Port || 8000
server.listen(PORT, () => {
    console.log(`***server is running on port ${PORT}***`)
})