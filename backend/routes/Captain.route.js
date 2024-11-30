import { Router } from 'express'
import { LoginCaptain, RegisterCaptaion, GetCaptainProfile, LogoutCaptain } from '../controllers/Captain.controller.js';
import { body } from 'express-validator';
import { IsCaptainAuthenticated } from '../middlewares/Auth.js';

const router = Router()

const validators = [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:5}).withMessage("Password Must Be Longer than 5 or Equal to 5"),
]
router.post('/register',validators,RegisterCaptaion)
router.post('/login',validators,LoginCaptain)
router.post('/logout',IsCaptainAuthenticated,LogoutCaptain)
router.post('/profile',IsCaptainAuthenticated,GetCaptainProfile)


export {router as CaptainRouter};