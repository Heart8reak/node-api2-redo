const express = require('express')
const postsRouter = require('../router/postsRouter')
const commentsRouter = require('../router/commentsRouter')

const server = express()

server.use(express.json())

server.get('/', (req, res) => {
    res.json({ message: 'The API is running.....' })
})

server.use('/api/posts', postsRouter)

module.exports = server