const express=require('express');
const app=express();

const path=require("path");
const mongoose=require("mongoose");

mongoose.connect('mongodb://localhost:27017/donations', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

const User = require('./models/user');
const Compaign = require('./models/compaign');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.send("Hello world");
    //res.render('home.ejs');
})

app.get('/events',(req,res)=>{
    res.render('events.ejs');
})

app.get('/users',(req,res)=>{
    res.send('users.ejs');
})

app.post('/addevent',async(req,res)=>{
    const {title,description,category}=req.body;
    res.send('${title}  ${description}  ${category}')
    // const newEvent = new Product(req.body);
    // await newEvent.save();
    // res.redirect('/events')
})

app.post('/adduser', async (req, res) => {
    const newUser = new Product(req.body);
    await newUser.save();
    res.redirect('home.ejs');
})

app.listen(3000,()=>{
    console.log("listening on port 3000")
})