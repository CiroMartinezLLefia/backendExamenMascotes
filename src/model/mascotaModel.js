import { MongoTopologyClosedError } from "mongodb";
import mongoose from "mongoose";

const mascotaSchema = new mongoose.Schema(
    {
        nombre:{
            type: String,
            required: [true, "nombre requerido"]
        },
        tipo:{
            type: String,
            required: [true, "tipo requerido"]
        },
        raza:{
            type: String,
            required: [true, "raza requerida"]
        },
        foto:{
            type: String,
            required: [true, "foto requerida"]
        },
    },
    { timestamp: true }
)

export default mongoose.model("Mascota", mascotaSchema)