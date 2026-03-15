const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

let tasks = []

// CREATE
app.post("/tasks",(req,res)=>{
 const task = {
   id: Date.now(),
   text: req.body.text
 }
 tasks.push(task)
 res.json(task)
})

// READ
app.get("/tasks",(req,res)=>{
 res.json(tasks)
})

// UPDATE
app.put("/tasks/:id",(req,res)=>{
 const id = parseInt(req.params.id)

 tasks = tasks.map(task=>{
   if(task.id === id){
     task.text = req.body.text
   }
   return task
 })

 res.json({message:"updated"})
})

// DELETE
app.delete("/tasks/:id",(req,res)=>{
 const id = parseInt(req.params.id)

 tasks = tasks.filter(task=>task.id !== id)

 res.json({message:"deleted"})
})

app.get("/",(req,res)=>{
 res.send("Backend running")
})

const PORT = process.env.PORT || 5000
app.listen(PORT,()=>console.log("Server running"))