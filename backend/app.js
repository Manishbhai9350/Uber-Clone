import cookieParser from 'cookie-parser';
import express from 'express'
import cors from 'cors';
import { UserRouter } from './routes/User.route.js';
import { CaptainRouter } from './routes/Captain.route.js';

const app = express();

// Middle Wares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

// Routes
app.use('/user',UserRouter)
app.use('/captain',CaptainRouter)


export {app}