import bcrypt from 'bcryptjs';

const salt = 10;

export const BcryptHash = (plane) => {
    return bcrypt.hash(plane,salt)
}

export const BcryptCompare = (plane,hashed) => {
    return bcrypt.compare(plane,hashed)
}