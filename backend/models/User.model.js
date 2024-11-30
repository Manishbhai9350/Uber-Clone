import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    fullname:{
        first:{
            type:String,
            required:[true,'first name must be provided']
        },
        last:{
            type:String
        }
    },
    email:{
        type:String,
        min:[5,'Email Must be atleast 5 character or longer']
    },
    password:{
        type:String,
        min:[6,'Password Must be atleast 6 character or longer']
    },
    
})


const model = mongoose.model('User',schema)

export {model as UserModel}