import mongoose from "mongoose";
import "dotenv/config"

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("Conectado a MONGOOOOOO")
    } catch (err) {
        console.log("Error: ", err)
    }
}

export default connectDB