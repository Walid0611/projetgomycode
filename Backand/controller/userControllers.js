const userSchema = require('../model/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.register=async(req,res)=>{
try{
// data
const {name,email,password} =req.body

const found = await userSchema.findOne ({email})
if (found){return res.json ({msg:'sorry the user is done , please go to login page ' })}

const newUser = await new userSchema(req.body)

// bcrypt
const saltRounds = 10
const salt = bcrypt.genSaltSync(saltRounds);
const hash = bcrypt.hashSync(password, salt);

newUser.password = hash



newUser.save()
res.status(200).json({msg:'you did it , welcome to the party',newUser })

}catch(err){
console.log(err)
}
}

exports.login=async(req,res)=>{
try{

    const {password,email}=req.body
    const found = await userSchema.findOne({email})
    if (!found) {return res.json({msg:'email introuvable veuillez enregistrer' }) }

    const match = bcrypt.compare(password, found.password)
   if (!match)  {return res.json({msg:'password incorrect' }) }
const payload = {id:found._id }
var token = jwt.sign(payload , process.env.privateKey )

res.json({msg:'ur welcome', found,token })

}catch(err){
    console.log(err)
}
}