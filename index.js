const express = require('express');
const app = express();
//to hide our databse connection password using .env
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require ('mongoose');

app.use("/static", express.static("public"));

app.use(express.urlencoded({ extended: true}));

//connection to db using mongoose?


mongoose.connect(process.env.DB_CONNECT, { useNewURLParser: true}, () => {
    console.log('connected')});//I would use an environment variable instead of a string for security. 

app.listen(3000, () => console.log(`Server connected`));
module.exports = exports = mongoose;





//mongoose.set("useFindAndModify", false);
//mongoose.connect(process.env.DB_CONNECT, { useNewURLParser: true}, () => {
   // console.log('connected');




//View engine confguration
app.set("view engine", "ejs");

// Using the get method
app.get('/',(req, res) => {
    res.render('todo.ejs');
});

//post method
app.post('/',(req, res) => {
    console.log(req.body);
});

