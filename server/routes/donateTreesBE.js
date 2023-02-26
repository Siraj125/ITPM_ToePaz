const express = require("express")
// const articleModel =require('../models/articleModel')
const donateTreesModel = require('../models/donateTreesModel')
const cors = require('cors');
const router = express.Router();

router.use(express.json());
router.use(cors());

// router.get("/getArticles", async (req, res)=>{ 
//     articleModel.find({}, (err, result) =>{
//         if (err){
//             res.json(err);
//         }else{
//             res.json(result);
//         }
//     })

// });

router.post("/addDonateTrees",async (req, res ) => {
    const donate = req.body;
    const newDonation = new donateTreesModel(donation);
    await newDonation.save();

    res.json(donation);
});

module.exports = router;