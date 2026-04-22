import mongoose from "mongoose"
import Mascota from "../model/mascotaModel.js"

const readNombre = (mascota) => mascota.nombre
const readTipo = (mascota) => mascota.tipo
const readRaza = (mascota) => mascota.raza
const readFoto = (mascota) => mascota.foto

const mapMascota = (mascota) => ({
    id: mascota.id,
    nombre: readNombre(mascota),
    tipo: readTipo(mascota),
    raza: readRaza(mascota),
    foto: readFoto(mascota),
})

const getAllMascotes = async (req, res) => {
    try {
        const data = await Mascota.find().sort({createdAt: -1})
        res.json({
            total: data.length,
            data,
        })
    } catch (err) {
        res.status(500).json({error: err.message})
    }
}

/*function getAllMascotes (req, res) {
    res.json ({
        dades: mascotes,
        total: mascotes.length
    })
}*/

const getMascotaById = async (req, res) => {
    try {
        const idToFind = req.params.id
        const data = await Mascota.findById(idToFind)
        res.json(data)
    } catch (err) {
        res.status(404).json({error: err.message})
    }
}
/*function getMascotaById (req, res) {
    const { id } = req.params
    const mascota = mascotes.findIndex((c) => c.id === id)
    if (mascota === -1){
        return res.status(404).json({error: "Mascota not found", id})
    }
    res.json(mascotes[mascota])
}*/

const createMascota = async (req, res) => {
    const nombre = readNombre(req.body)
    const tipo = readTipo(req.body)
    const raza = readRaza(req.body)
    const foto = readFoto(req.body)
    try {
        const mascota = await Mascota.create({nombre, tipo, raza, foto})
        return res.status(201).json({mascota: mapMascota(mascota)})
    } catch (err) {
        return res.status(400).json({error: err.message})
    }
}

const mascotes = [
    {
        id: "1",
        nombre: "Chucho",
        tipo: "Animal",
        raza: "Perro",
        foto: "url//url",
    },
    {
        id: "2",
        nombre: "Chucho2",
        tipo: "Animal2",
        raza: "Perro2",
        foto: "url//url2",
    },
]

/*function createMascota (req, res) {
    const { nombre, tipo, raza, foto } = req.body
    const id = String(mascotes.length + 1)
    const nova = { id, nombre, tipo, raza, foto }
    mascotes.push(nova)
    res.status(201).json(nova)
}*/

function editMascota (req, res) {
    const { id } = req.params
    const index = mascotes.findIndex((c) => c.id === id)
    if (index === -1){
        return res.status(404).json({error: "Mascota not found", index})
    }
    mascotes[index] = {...mascotes[index], ...req.body, id}
    res.json (mascotes[index])
}

function deleteMascota (req, res) {
    const { id } = req.params
    const index = mascotes.findIndex((c) => c.id === id)
    if (index === -1){
        return res.status(404).json({error: "Mascota not found", id})
    }
    mascotes.splice(index, 1)
    res.status(204).send()
}

export {
    getAllMascotes,
    getMascotaById,
    createMascota,
    editMascota,
    deleteMascota,
}