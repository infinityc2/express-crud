import express from 'express'
import { bookModel, authorModel } from '../models/schema'

const router = express.Router()

router.get('/books', async (req, res) => {
    const books = await bookModel.find()
    res.json(books)
})

router.get('/books/:id', async (req, res) => {
    const { id } = req.params
    const book = await bookModel.findById(id)
    res.json(book)
})

router.post('/books', async (req, res) => {
    const payload = req.body
    const author = new authorModel({ name: payload.author.name, phone: payload.author.phone})
    await author.save()
    const book = new bookModel({ name: payload.name, describe: payload.describe, author: author })
    await book.save()
    res.status(201).end()
})

router.put('/books/:id', async (req, res) => {
    const { id } = req.params
    const payload = req.body
    const book = await bookModel.findByIdAndUpdate(id, { $set: payload })
    res.json(book)
})

router.delete('/books/:id', async (req, res) => {
    const { id } = req.params
    await bookModel.findByIdAndDelete(id)
    res.status(204).end()
})

router.get('/authors', async (req, res) => {
    const authors = await authorModel.find()
    res.json(authors)
})

router.get('/authors/:id', async (req, res) => {
    const { id } = req.params
    const author = await authorModel.findById(id)
    res.json(author)
})

router.post('/authors', async (req, res) => {
    const payload = req.body
    const author = new authorModel(payload)
    await author.save()
    res.status(201).end()
})

router.put('/authors/:id', async (req, res) => {
    const { id } = req.params
    const payload = req.body
    const author = await authorModel.findByIdAndUpdate(id, { $set: payload })
    res.json(author)
})

router.delete('/authors', async (req, res) => {
    const { id } = req.params
    await authorModel.findByIdAndDelete(id)
    res.status(204).end()
})

module.exports = router