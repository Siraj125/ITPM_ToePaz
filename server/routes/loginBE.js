const express = require("express")
const userModel = require('../models/userModel')
const cors = require('cors');
const router = express.Router();

router.use(express.json());
router.use(cors());

router.get("/getUserData",async (req,res)=>{
    userModel.find({},(err , result) =>{
        if (err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    })
})