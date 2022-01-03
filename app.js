var express = require("express")
var mongoose =require("mongoose")
var signIn = require("./signin")
var signUp = require("./signup")
var router = require("./router")

var app = express()
app.use("/api",router)
app.listen(process.env.PORT || 2000)
var uri = process.env.URI
mongoose.connect(uri)
    .then(res=>{
      console.log(res ,"connected")
   })
   .catch(err=>{console.log(err)})
   
 app.get("/", (req , res)=>{
   res.send("hello")
 })  

//http://localhost:2000/api/signUp/?username=brad&password=userd
