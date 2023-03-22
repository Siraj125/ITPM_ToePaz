const express = require("express")
const adminAccModel = require('../models/adminAccModel')
const cors = require('cors');
const router = express.Router();

router.use(express.json());
router.use(cors());

router.get("/getAdminData",async (req,res)=>{
    const user = await adminAccModel.findOne({
        username :req.body.username,
        password :req.body.password,
    })
    if (user){
        return res.json({status: 'ok', user : true})

    }
    else{
        return res.json({ status:'error', user :false})
    }
})
router.post("/addNewAdmin",async (req, res ) => {
    const nadmin = req.body;
    const newAdmin = new articleModel(nadmin);
    await newAdmin.save();

    res.json(nadmin);
});

router.post("/updateAdminDetails",async(req,res)=>{
    const newName = req.body.newName;
    const newProfilepic = req.body.newProfilepic;
    const newPassword = req.body.newPassword;
    const id= req.body._id;
    console.log(newName,newImage,newPassword,id);

    try{
        let filter ={'_id ': id}
        let update ={
            $set :{'name':newName,'profilepic': newProfilepic, 'password':newPassword,},
        }
        await adminAccModel.findOneAndUpdate(filter,update);
    }
    catch(err){
        console.log(err);
    }
    res.send('updated')
})


