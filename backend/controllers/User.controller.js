import { validationResult } from "express-validator";
import { UserModel } from "../models/User.model.js";
import {BlackTokensModel} from '../models/BlackList.Token.model.js'
import { BcryptHash, BcryptCompare, JwtSign } from "../utils/index.js";

export const RegisterUser = async (req, res) => {
  try {
    const Errors = validationResult(req).errors;
    if (Errors.length > 0) {
      return res.status(400).json({
        message: Errors.map((err) => err.msg),
        success: false,
      });
    }
    const { fullname, email, password } = req.body;

    if (!fullname.first || !email || !password) {
      return res.status(401).json({
        message: "All Information Must Be Provided",
        success: false,
      });
    }

    const PresentUser = await UserModel.findOne({ email });

    if (PresentUser) {
      return res.status(301).json({
        message: "You Have Already Registered, Please Login",
        success: false,
      });
    }

    const HashedPass = await BcryptHash(password);

    const User = await UserModel.create({
      fullname,
      email,
      password: HashedPass,
    });

    if (!User) {
      return res.status(401).json({
        message: "Some Error Occured",
        success: false,
      });
    }

    const Payload = {
      email,
      id: User._id,
    };

    const JWT_TOKEN = JwtSign(Payload);

    res.cookie("token", JWT_TOKEN).status(201).json({
      message: "Registration Successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(409).json({
      message: "Some Error Occured",
      success: false,
    });
  }
};

export const LoginUser = async (req, res) => {
  try {
    const Errors = validationResult(req).errors;
    if (Errors.length > 0) {
      return res.status(400).json({
        message: Errors.map((err) => err.msg),
        success: false,
      });
    }

    const { email, password } = req.body;

    const User = await UserModel.findOne({ email });

    if (!User) {
      return res.status(401).json({
        message: "Invalid Email Or Password",
        success: false,
      });
    }

    const IsMatch = await BcryptCompare(password, User.password);

    if (!IsMatch) {
      return res.status(401).json({
        message: "Invalid Email Or Password",
        success: false,
      });
    }

    const Payload = {
      email,
      id: User._id,
    };

    const JWT_TOKEN = JwtSign(Payload);

    res.cookie("token", JWT_TOKEN).status(200).json({
      message: "Login Successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(409).json({
      message: "Some Error Occured",
      success: false,
    });
  }
};

export const GetUserProfile = async (req, res) => {
  const user = req.user;
  if (!user) {
    return res.status(400).json({
      message: "Unauthorized",
      success: false,
    });
  }

  return res.status(200).json({
    user,
    success: true,
  });
};

export const LogoutUser = async (req, res) => {
    const token = req.token;
    await BlackTokensModel.create({token})
    res.cookie("token", "").status(200).json({
        message: "Logged Out Successfully",
        success: true,
    });
};
