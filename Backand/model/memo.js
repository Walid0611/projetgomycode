const mongoose = require('mongoose');

const MemoSchema = mongoose.Schema({
    titre:String,
    description:String,
    
    image:{
        type:String,
        
        
    }
})

module.exports = mongoose.model('MemoSchema',MemoSchema)