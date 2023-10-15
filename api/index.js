const express = require("express");
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const passport = require("passport")
const localStrategy = require('passport-local').Strategy

const   app = express();
const port = 8000;
const cors = require("cors")
app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
app.use(passport.initialize());
const jwt = require("jsonwebtoken");

mongoose.connect("mongodb+srv://sattinenivineethkumar:vineeth6181@cluster0.z0hn61f.mongodb.net/",
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log("mongoose db got connected");
}).catch((err) => {
    console.log("Error connecting to mongoose" , err);
})

app.listen(port, () => console.log("Server running on port 8000"));


