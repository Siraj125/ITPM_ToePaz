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

module.exports = router;