import { CaptainModel } from "../models/Captain.model.js";
import { UserModel } from "../models/User.model.js";
import { JwtVerify } from "../utils/index.js";
import {BlackTokensModel} from '../models/BlackList.Token.model.js'

export const IsUserAuthenticated = async (req, res, next) => {
  try {
    const token =
      req.cookies.token || req.headers["authorization"]?.split(" ")[1];
    if (!token) {
      return res.status(400).json({
        message: "Unauthorized",
        success: false,
      });
    }

    const IsBlackListed = await BlackTokensModel.findOne({token})
    if (IsBlackListed) {
      return res.status(403).json({
          message:"Unaurthorized",
          success: false
      })
    }

    const decoded = JwtVerify(token);

    if (!decoded) {
      return res.status(400).json({
        message: "Unauthorized",
        success: false,
      });
    }

    const User = await UserModel.findById(decoded.id).select("-password");

    if (!User) {
      return res.status(400).json({
        message: "Unauthorized",
        success: false,
      });
    }

    req.user = User;
    req.token = token;

    return next();
  } catch (error) {
    return res.status(400).json({
      message: "Some Error Occured",
      success: false,
    });
  }
};

export const IsCaptainAuthenticated = async (req, res, next) => {
  try {
    const token =
      req.cookies.token || req.headers["authorization"]?.split(" ")[1];

      if (!token) {
        return res.status(400).json({
          message: "Unauthorized",
          success: false,
        });
      }

    const IsBlackListed = await BlackTokensModel.findOne({ token });
    if (IsBlackListed) {
      return res.status(403).json({
        message: "Unaurthorized",
        success: false,
      });
    }

    

    const decoded = JwtVerify(token);

    if (!decoded) {
      return res.status(400).json({
        message: "Unauthorized",
        success: false,
      });
    }

    const captain = await CaptainModel.findById(decoded.id).select("-password");

    if (!captain) {
      return res.status(400).json({
        message: "Unauthorized",
        success: false,
      });
    }

    req.captain = captain;
    req.token = token;
    return next();
  } catch (error) {
    console.log(error)
    return res.status(400).json({
      message: "Some Error Occured",
      success: false,
    });
  }
};
