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

function getAllMascotes (req, res) {
    res.json ({
        dades: mascotes,
        total: mascotes.length
    })
}

function getMascotaById (req, res) {
    const { id } = req.params
    const mascota = mascotes.findIndex((c) => c.id === id)
    if (mascota === -1){
        return res.status(404).json({error: "Mascota not found", id})
    }
    res.json(mascotes[mascota])
}

function createMascota (req, res) {
    const { nombre, tipo, raza, foto } = req.body
    const id = String(mascotes.length + 1)
    const nova = { id, nombre, tipo, raza, foto }
    mascotes.push(nova)
    res.status(201).json(nova)
}

function editMascota (req, res) {
    const { id } = req.params
    const index = mascotes.findIndex((c) => c.id === id)
    if (index === -1){
        return res.status(404).json({error: "Mascota not found", index})
    }
    mascotes[index] = {...mascotes[index], ...req.body, id}
    res.json.(mascotes[index])
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
    deleteMascota
}