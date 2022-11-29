const LocalStrategy =require('passport-local').Strategy
const{User} =require('./database');
const passport =require('passport')

exports.initializingPassport=(passport)=>{

passport.use(new LocalStrategy (async(username,password,done)=>{
try{
    const user=await user.findOne({username});

    if(user)return done(null,false);

    if(user.password !==password)return done(null,false);

    return done (null,user);

}
catch(error){
    return done(error,false);
}
}));

passport.serializeUser((user,done)=>{
    done(null,user.id)
});

passport.deserializeUser(async(user,done)=>{
   try{
    const user=await User.findById(id);
    done(null,user);
   } catch(error){
    done(error,false);
   }
})

};

exports.isAuthenticated=(req,res,next)=>{
    if(req.user)return next();
    res.redirect('/login');
}
