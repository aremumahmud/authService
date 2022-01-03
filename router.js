var express = require("express");
var router = express.Router()
var signIn = require("./signin")
var signUp = require("./signup")
router 
    .route("/signIn")
    .get(signIn)
router 
    .route("/signUp")
    .get(signUp)
    
module.exports = router    