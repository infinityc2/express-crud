import mongoose from 'mongoose'

mongoose.connect(`mongodb://localhost:27017/server-api`, { useNewUrlParser: true })

mongoose.connection.on('connected', () => {
    console.log("database on connected")
})

mongoose.connection.on('error', () => {
    console.log("database on error")
})