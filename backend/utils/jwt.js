import jwt from 'jsonwebtoken';


export const JwtSign = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET);
}

export const JwtVerify = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        return null; // Return null if verification fails
    }
}



