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
        res.status(404).json({error: "Mascota not found", id})
    }
    res.json(mascotes[mascota])
}

export {
    getAllMascotes,
    getMascotaById
}