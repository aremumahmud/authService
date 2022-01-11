var AuthModel = require("./Auth.Model")
var bcrypt = require('bcryptjs');
module.exports=function (req ,res){
  var {
    username ,
    password
    } = req.query
    console.log(req.query)
    AuthModel
       .findOne({ username })
       .exec((err , login)=>{
         console.log(login)
        if (err){
          res
            .status(404)
            .send(JSON.stringify({
            error : true,
            msg : "error finding record"
          }))
        }else if(bcrypt.compareSync(password, login.password)){
          res
            .status(200)
            .send(JSON.stringify({
              error : false,
              login
            }))
        }else {
          res.status(404)
          res.send("wrong password")
          
        }
      })
}
