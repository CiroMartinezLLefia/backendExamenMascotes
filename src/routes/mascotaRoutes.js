import express from "express"
import {
    getAllMascotes,
    getMascotaById
} from "../controller/mascotaController.js"

const mascotaRouter = express.Router()

// controllers
mascotaRouter.get("/", getAllMascotes)
mascotaRouter.get("/:id", getMascotaById)

export default mascotaRouter