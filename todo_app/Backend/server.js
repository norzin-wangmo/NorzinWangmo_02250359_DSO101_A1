const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

let tasks = []

app.get("/tasks", (req,res)=>{
  res.json(tasks)
})

app.post("/tasks",(req,res)=>{
  const task = {id: Date.now(), text: req.body.text}
  tasks.push(task)
  res.json(task)
})

app.delete("/tasks/:id",(req,res)=>{
  tasks = tasks.filter(t=>t.id != req.params.id)
  res.json({message:"deleted"})
})

app.get("/",(req,res)=>{
  res.send("Backend running")
})

const PORT = process.env.PORT || 5000
app.listen(PORT,()=>console.log("Server running on",PORT))

const path = require("path")
app.use(express.static(path.join(__dirname, "public")))

app.get("*", (req,res)=>{
  res.sendFile(path.join(__dirname,"public","index.html"))
})