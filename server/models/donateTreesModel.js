const mongoose = require('mongoose');

const donateSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            require:true,
        },
        trees:{
            type:Number,
            require:true,
        },
        comment:{
            type:String,
            require:false,
        },
        
    },
    {
        collection:"donation_data"
    }
)

const donateTreesModel = mongoose.model('donationData', donateSchema)
module.exports= donateTreesModel;