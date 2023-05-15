const express = require("express");
const cors = require("cors");
const mongoose = require ("mongoose");
const articleModel = require('./models/articleModel')
const userModel = require('./models/userModel')


const articles = require('./routes/articlesBE');
const calculator = require('./routes/calcBE');



const app = express();

app.use("/articles",articles);
app.use("/calculator",calculator);

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://group117:1234567abc@itpmcluster.lo7aecr.mongodb.net/test");

app.listen(3001, ()=>{
    console.log("Server runs!")
})