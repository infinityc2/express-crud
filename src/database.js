import mongoose from 'mongoose'

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true })

mongoose.connection.on('connected', () => {
    console.log("database on connected")
})

mongoose.connection.on('error', () => {
    console.log("database on error")
})