var mongoose = require("mongoose")
var schema = mongoose.Schema
var Auth = new schema({
  password : String,
  username :{
    type : String,
    unique : true
  }
})

module.exports = mongoose.model("Auth",Auth)