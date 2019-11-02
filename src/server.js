import express from 'express';
import bodyParser from 'body-parser';
import './database';
import router from './router/router';

const app = express()
const port = 8080

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(router)

app.listen(port, () => {
    console.log(`Listen port ${port}`)
})