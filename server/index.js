const express = require("express");
const cors = require("cors");
const mongoose = require ("mongoose");

const app = express();

mongoose.connect("mongodb+srv://group117:1234567abc@itpmcluster.lo7aecr.mongodb.net/test");

app.listen(3001, ()=>{
    console.log("Server runs!")
})