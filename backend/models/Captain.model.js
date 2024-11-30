import mongoose from 'mongoose';



const schema = new mongoose.Schema({
    fullname:{
        first:{
            type:String,
            required:true,
        },
        last:{
            type:String
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    vehicle:{
        name:{
            type:String,
            enum:['car','bike','auto','van']
        },
        capacity:{
            type:Number,
            required:true,
            min:1
        },
        registration_number:{
            type:String,
            required:true,
            unique:true,
        },
        color:{
            type:String,
        }
    }
})


const model = mongoose.model("Captain",schema)

export {model as CaptainModel}