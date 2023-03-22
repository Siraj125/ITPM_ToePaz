const mongoose = require('mongoose');

const adminAccSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            require:true,
        },
        profilepic:{
            type:String,
            require:true,
        },
        password:{
            type:String,
            require:true,
        },
        
    },
    {
        collection:"admin_data"
    }
)

const adminAccModel = mongoose.model('adminData', adminAccSchema)
module.exports= adminAccModel;