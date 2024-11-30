import http from 'http'
import { app } from './app.js'
import { configDotenv } from 'dotenv'
import { Connect } from './services/MongoDB.js'


configDotenv({
    path:'./.env',
})

// Connection With Mongo DB;
Connect()

const PORT = process.env.PORT || 3000;

const server = http.createServer(app)


server.listen(PORT,() => {
    console.log(`server is running ar http://localhost:${PORT}`)
})