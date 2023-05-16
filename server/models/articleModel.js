const mongoose = require('mongoose');

const artileSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            require:true,
        },
        image:{
            type:String,
            require:true,
        },
        paragraph:{
            type:String,
            require:true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
          },
        
    },
    {
        collection:"article_data"
    }
)

const articleModel = mongoose.model('articleData', artileSchema)
module.exports= articleModel;