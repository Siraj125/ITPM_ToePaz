const express = require("express")
const articleModel =require('../models/articleModel')
const cors = require('cors');
const router = express.Router();

router.use(express.json());
router.use(cors());

router.get("/getArticles", async (req, res)=>{ 
    articleModel.find({}, (err, result) =>{
        if (err){
            res.json(err);
        }else{
            res.json(result);
        }
    })

});

router.post("/addArticles",async (req, res ) => {
    const articles = req.body;
    const newArticles = new articleModel(articles);
    await newArticles.save();

    res.json(articles);
});

router.post("/updateArticle",async(req,res)=>{
    const newTitle = req.body.newTitle;
    const newImage = req.body.newImage;
    const newPara = req.body.newPara;
    const id= req.body._id;
    console.log(newTitle,newImage,newPara,id);

    try{
        let filter ={'_id ': id}
        let update ={
            $set :{'title':newTitle,'image': newImage, 'paragraph':newPara,},
        }
        await articleModel.findOneAndUpdate(filter,update);
    }
    catch(err){
        console.log(err);
    }
    res.send('updated')
})

module.exports = router;