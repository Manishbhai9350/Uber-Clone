import {Router} from 'express'
import { GetUserProfile, LoginUser, LogoutUser, RegisterUser } from '../controllers/User.controller.js'
import { body } from 'express-validator'
import { IsUserAuthenticated } from '../middlewares/Auth.js'

const router = Router()

const validators = [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:5}).withMessage("Password Must Be Longer than 5 or Equal to 5"),
]

router.post('/register',validators , RegisterUser)
router.post('/login',validators,LoginUser)
router.post('/profile',IsUserAuthenticated,GetUserProfile)
router.post('/logout',IsUserAuthenticated,LogoutUser)


export {router as UserRouter}