var AuthModel = require("./Auth.Model")
var bcrypt = require('bcryptjs');

function signIn(req , res){
  var { username , password } = req.query

  var Auth = new AuthModel()
 //-------test----
  ///var Auth = Auth
  //------end-------
  Auth.username = username
  bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(password, salt, function(err, hash) {
        Auth.password = hash
        Auth.save((err, login)=>{
           if (err){
             console.log(err)
               res.status(404)
               res.json({
                   "error" : true,
                   "msg" : "network filesave err"
               })
           }else {
              res.status(200)
              res.send(JSON.stringify({
                  error : false,
                  login
              }))
           }
        })

     });
  });
}

module.exports = signIn