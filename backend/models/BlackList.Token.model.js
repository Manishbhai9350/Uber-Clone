import { model, Schema } from "mongoose";



const schema = new Schema({
    token:{
        type:String,
    },
    expiry:{
        type:Date,
        default:Date.now,
        expiry:'24h'
    }
})



const BlackTokensModel = model('BlackTokens',schema)

export {BlackTokensModel}

