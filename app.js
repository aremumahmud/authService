var express = require("express")
var mongoose =require("mongoose")
var signIn = require("./signin")
var signUp = require("./signup")
var router = require("./router")

var app = express()
app.use("/api",router)
app.listen(process.env.PORT || 2000)
var uri = `mongodb://FileuploadService:aremu2003@cluster0-shard-00-00.brdt8.mongodb.net:27017,cluster0-shard-00-01.brdt8.mongodb.net:27017,cluster0-shard-00-02.brdt8.mongodb.net:27017/totalcare?ssl=true&replicaSet=atlas-cbfjj2-shard-0&authSource=admin&retryWrites=true&w=majority`
mongoose.connect(uri)
    .then(res=>{
      console.log(res ,"connected")
   })
   .catch(err=>{console.log(err)})
   
 app.get("/", (req , res)=>{
   res.send("hello")
 })  

//http://localhost:2000/api/signUp/?username=brad&password=userd