import express from 'express'
import Books from '../models/schema'

const router = express.Router()

router.get('/books', async (req, res) => {
    const books = await Books.find()
    res.json(books)
})

router.get('/books/:id', async (req, res) => {
    const { id } = req.params
    const book = await Books.findById(id)
    res.json(book)
})

router.post('/books', async (req, res) => {
    const payload = req.body
    const book = new Books(payload)
    await book.save()
    res.status(201).end()
})

router.put('/books/:id', async (req, res) => {
    const { id } = req.params
    const payload = req.body
    const book = await Books.findByIdAndUpdate(id, { $set: payload })
    res.json(book)
})

router.delete('/books/:id', async (req, res) => {
    const { id } = req.params
    await Books.findByIdAndDelete(id)
    res.status(204).end()
})

module.exports = router