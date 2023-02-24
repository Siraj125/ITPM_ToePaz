const express = require("express")
const userModel = require('../models/userModel')
const cors = require('cors');
const router = express.Router();

router.use(express.json());
router.use(cors());

router.get("/getUserData",async (req,res)=>{
    const user = await userModel.findOne({
        email :req.body.email,
        password :req.body.password,

    })
    if (user){
        return res.json({status: 'ok', user : true})

    }
    else{
        return res.json({ status:'error', user :false})
    }
})


router.get("/getUserData",async (req,res)=>{
    const user = await userModel.findOne({
        email :req.body.email,
        password :req.body.password,

    })
    if (user){
        return res.json({status: 'ok', user : true})

    }
    else{
        return res.json({ status:'error', user :false})
    }
})