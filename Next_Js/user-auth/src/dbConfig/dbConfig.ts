import mongoose from "mongoose";

export async function Connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection;
        connection.on('connection', () => {
            console.log("🚀 ~ Connect ~ connection:")
        })
        connection.on('error', (err) => {
            console.log("🚀 ~ Connect ~ connection error detected:", +err)
            process.exit();
        })
    } catch (error) {
        console.log("🚀 ~ Connect ~ error:", error)

    }
}