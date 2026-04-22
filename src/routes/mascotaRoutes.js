import express from "express"
import {
    getAllMascotes,
    getMascotaById,
    createMascota,
    editMascota,
    deleteMascota
} from "../controller/mascotaController.js"

const mascotaRouter = express.Router()

// controllers
mascotaRouter.get("/", getAllMascotes)
mascotaRouter.get("/:id", getMascotaById)
mascotaRouter.post("/", createMascota)
mascotaRouter.put("/:id", editMascota)
mascotaRouter.delete("/:id", deleteMascota)

export default mascotaRouter