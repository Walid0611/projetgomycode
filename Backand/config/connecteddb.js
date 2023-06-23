const mongoose = require('mongoose');

const connectdb =async()=>{
   try{
    await mongoose.connect('mongodb+srv://walid:5od9YznyKwarTzy9@cluster0.9jk2ljc.mongodb.net/?retryWrites=true&w=majority')
console.log('your connected to db')
   }catch(err){
    console.log(err)
   }
}


module.exports = connectdb