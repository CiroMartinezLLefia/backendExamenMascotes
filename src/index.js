import cors from "cors"
import express from "express"
import mascotaRouter from "./routes/mascotaRoutes.js"
// import connectDB (for Mongo)

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/mascotes", mascotaRouter)

app.get("/api", (req, res) => {
    res.json({
        mensaje: "Mascotes API",
        version: "1.0.0",
        endpoints: "/api/mascotes",
    })
})

const PORT = process.env.PORT || 4000

// connectDB().then(() => ) {
    app.listen(PORT, () => {
        console.log("LEVANTAO: Listening the port", PORT)
    })
//})