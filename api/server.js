const express = require('express')
const postsRouter = require('../router/postsRouter')
const cors = require('cors')

const server = express()

server.use(express.json())
server.use(cors())

server.get('/', (req, res) => {
    res.json({ message: 'The API is running.....' })
})

server.use('/api/posts', postsRouter)

module.exports = server