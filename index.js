const express = require("express")
const app = express()

app.listen(3002, ()=>{
    console.log("linstening");
})


app.get("/",(req,res)=>{
    res.status(200).send("welcome to port 3002")
})