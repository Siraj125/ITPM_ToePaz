const express = require("express")
const calcModel =require('../models/calcModel')
const cors = require('cors');
const router = express.Router();

router.use(express.json());
router.use(cors());

router.get("/getCalc", async (req, res)=>{ 
    calcModel.find({}, (err, result) =>{
        if (err){
            res.json(err);
        }else{
            res.json(result);
        }
    })

});

router.post("/addCalc",async (req, res ) => {
    const calc = req.body;
    const newCalc = new calcModel(calc);
    await newCalc.save();

    res.json(calc);
});

// router.put("/updateCalc",async(req,res)=>{
//     const newRes = req.body.newRes;
//     const newSurf = req.body.newSurf;
//     const newMeth = req.body.newMeth;
//     const id= req.body._id;
//     console.log(newRes,newSurf,newMeth,id);

//     try{
//         let filter ={'_id ': id}
//         let update ={
//             $set :{'resname':newRes,'surfarea': newSurf, 'methaneprod':newMeth,},
//         }
//         await calcModel.findOneAndUpdate(filter,update);
//     }
//     catch(err){
//         console.log(err);
//     }
//     res.send('updated')
// })
router.put("/update",async(req,res)=>{
    const newResName = req.body.newResName;
    const id = req.body.id;

    try{
        await calcModel.findById(id, (error, calcToUpdate) => {
            calcToUpdate.resname=newResName;
            calcToUpdate.save();
        });
    }catch(err){
        console.log(err);
    }

});

router.delete("/delete/:id", async(req,res) => {
    const id = req.params.id;
    await calcModel.findByIdAndRemove(id).exec();
    res.send("itemdeleted");
});

module.exports = router;