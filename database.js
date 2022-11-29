const mongoose =require('mongoose');
exports.connectMongoose=()=>{
    mongoose.connect("mongodb://localhost:27017/passport")
    .then(e=>console.log(
        'connected to mongodb: '
    ))};
    const userSchema =new mongoose.Schema({
        name:String,
        username:{
            type:String,
            required:true,
            unique:true
        },
        password:String,

    });
    exports.userSchema=mongoose.model('User',userSchema)