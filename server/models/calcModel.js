const mongoose = require('mongoose');

const calcSchema = new mongoose.Schema(
    {
        resname:{
            type:String,
            require:true,
        },
        surfarea:{
            type:String,
            require:true,
        },
        methaneprod:{
            type:String,
            require:true,
        },
        
    },
    {
        collection:"calc_data"
    }
)

const calcModel = mongoose.model('calcDara', calcSchema)
module.exports= calcModel;