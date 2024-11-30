import mongoose from "mongoose"

export async function Connect(){
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URI)
        console.log('Connection SuccessFull With DB')
        return connection;
    } catch (error) {
        console.log('Error While Connecting To DB')
    }
}