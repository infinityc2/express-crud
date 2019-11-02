import express from 'express';
import bodyParser from 'body-parser';
import './database';
import router from './router/router';
import dotenv from 'dotenv';

const app = express()
dotenv.config()
const port = process.env.SERVER_PORT || 8080

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(router)
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", ["http://localhost:4200"])
    res.header("Access-Control-Allow-Headers", "Content-Type")
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
    res.header("Access-Control-Allow-Credentials", true)
    next()
})

app.listen(port, () => {
    if (process.env.NODE_ENV === "development") {
        console.log(`Listen port ${port} for ${process.env.NODE_ENV}`)
    }
})