import mongoose from 'mongoose'

const Schema = mongoose.Schema

const authorSchema = new Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true}
}, { timestamps: true, versionKey: false })
const authorModel = mongoose.model("Authors", authorSchema)

const bookSchema = new Schema({
    name: { type: String, required: true },
    describe: { type: String, required: true },
    author: { type: authorSchema },
}, { timestamps: true, versionKey: false })
const bookModel = mongoose.model("Books", bookSchema)

module.exports = { bookModel, authorModel }