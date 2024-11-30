import {validationResult} from 'express-validator';
import {CaptainModel} from '../models/Captain.model.js';
import {JwtSign,BcryptHash,BcryptCompare} from '../utils/index.js';
import {BlackTokensModel} from '../models/BlackList.Token.model.js'

export const RegisterCaptaion = async (req,res) => {
    try {
        
        const ReqErrors = validationResult(req).errors
        

        if (ReqErrors.length > 0) {
            return res.status(401).json({
                message: 'Validation Failed',
                success: false,
                errors: ReqErrors,
            })
        }
        const {fullname,email,password,vehicle} = req.body;

        if (!fullname.first || !email || !password || !vehicle) {
            return res.status(401).json({
                message: 'Please provide all required fields',
                success:false,
            })
        }

        const IsPresent = await CaptainModel.findOne({email})

        if (IsPresent) {
            return res.status(401).json({
                message: 'Wrong Email Or Password',
                success:false,
            })
        }

        const HashedPassword = await BcryptHash(password);

        const captain = await CaptainModel.create({
            fullname,
            email,
            password:HashedPassword,
            vehicle
        })

        const Payload = {
            id:captain._id,
            email,
        }

        const JWT_TOKEN = JwtSign(Payload);
        res.cookie('token',JWT_TOKEN);

        return res.status(201).json({
            message:'Captain Registered Successfully',
            success:true,
            captain
        })

    } catch (error) {
        return res.status(401).json({
            message:'Some Error Occured',
            success:false,
        })
    }
}


export const LoginCaptain = async (req,res) => {
    try {
        const ReqErrors = validationResult(req).errors

        if (ReqErrors.length > 0) {
            return res.status(401).json({
                message: 'Validation Failed',
                success: false,
                errors: ReqErrors,
            })
        }

        const {email, password} = req.body;
        
        if (!email || !password) {
            return res.status(401).json({
                message: 'Provide All Fields',
                success:false,
            })
        }

        const Captain = await CaptainModel.findOne({email})

        if (!Captain) {
            return res.status(401).json({
                message: 'Invalid Email Or Password',
                success:false,
            })
        }

        const IsMatch = await BcryptCompare(password, Captain.password);

        if (!IsMatch) {
            return res.status(401).json({
                message: 'Invalid Email Or Password',
                success:false,
            })
        }

        const Payload = {
            id:Captain._id,
            email,
        }

        const JWT_TOKEN = JwtSign(Payload);
        res.cookie('token',JWT_TOKEN);

        return res.status(201).json({
            message:'Captain Login Successfully',
            success:true,
        })

    } catch (error) {
        return res.status(401).json({
            message: 'Some Error Occured',
            success:false,
        })
    }
}

export const GetCaptainProfile = async (req, res) => {
    const captain = req.captain;
    const token = req.token;

    
    if (!captain) {
      return res.status(400).json({
        message: "Unauthorized",
        success: false,
      });
    }
  
    return res.status(200).json({
      captain,
      success: true,
    });
  };
  
export const LogoutCaptain = async (req, res) => {
    const token = req.token;
    await BlackTokensModel.create({token})
    res.cookie("token", "").status(200).json({
        message: "Logged Out Successfully",
        success: true,
    });
};
  