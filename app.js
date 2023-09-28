const express = require('express')
const TodoRoutes = require("./routes/todo.route")

const app = express()

app.use(express.json())

app.get("/", (req, res)=>{
    res.status(200).json({alive: "True"})
})

app.use("/api", TodoRoutes)

module.exports = app