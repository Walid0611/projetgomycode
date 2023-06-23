const express = require('express')

const userRoute = express.Router()

const {register,login} = require('../controller/userControllers')
const {isAuth}= require('../middelwares/isAuth')
const {registerValidation,loginValidation,validation }= require('../middelwares/registerValidation')


// http://localhost:3006/auth/register
userRoute.post('/register', registerValidation,validation,register)

// http://localhost:3006/auth/login
userRoute.post('/login',loginValidation,validation,login)

// http://localhost:3006/auth/moncompte 
userRoute.get('/moncompte',isAuth,(req,res)=>{
    res.send(req.user)
    console.log(req,user)
})


module.exports = userRoute