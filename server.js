const express=require('express')
const app =express();
const {connectMongoose,User}=require("./database.js")
const ejs =require('ejs');

connectMongoose(); 

app.get("/",(req,res)=>{
    res.render("index");
});
app.get('/register',(req,res)=>{
    res.render("register");
});
app.get('/login',(req,res)=>{
    res.render("Login");
});


app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.set('view engine','ejs');

app.post("/register",async()=>{
    const user = await User.findOne({username: req.body.usernmae});

if(user)return res.status(400).send('user already exixt');

const newUser= await User.create(req.body);

res.status(201).send(newUser)
});

app.listen(3000,()=>{
    console.log("server start")
});