const express = require('express')

const db = require('../data/db')

const router = express.Router()

router.post('/:id/comments', async (req, res) => {
    const comment = {
        post_id: req.params.id,
        text: req.body.text
    }
    try {
        if (!req.body.text) {
            return res.status(400).send('Comments needs a text prop')
        }
        const commentId = await db.insertComment(comment)
        res.status(201).send(commentId)
    } catch (e) {
        res.status(500).send('We have a problem HOUSTON!' + e)
    }
})

router.get('/:id/comments', (req, res) => {
    const { id } = req.params
    console.log(id)
    db.findPostComments(id)
        .then(post => {
            console.log(post)
            if (post.length === 0) {
                res.status(404).json({ message: 'The post with the specified ID does not exist.' })
            } else {
                return res.status(200).json(post)
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ err: 'The comments could not be retrieved' })
        })
})

router.get('/comments/:id', async (req, res) => {
    const id = req.params.id
    try {
        const comment = await db.findCommentById(id)
        cooment ? res.status(200).send(comment) :
            res.status(404).send('Comment not found')
    } catch (e) {
        res.status(500).send('Somthing BAD happened!' + e)
    }
})

module.exports = router