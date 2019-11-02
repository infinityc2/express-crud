import mongoose from 'mongoose'

const Schema = mongoose.Schema

const bookSchema = new Schema({
    name: { type: String, required: true },
    describe: { type: String, required: true },
    author: { type: String, required: true, },
}, { timestamps: true, versionKey: false })

const bookModel = mongoose.model("Books", bookSchema)

module.exports = bookModel