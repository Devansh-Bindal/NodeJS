const express=require("express");
const router=express.Router();
const {ensureAuthenticated}=require('../config/auth');
const passport=require('passport');

//Welcome
router.get('/',(req,res)=>res.render("welcome"));

//Dashboard
router.get('/dashboard',ensureAuthenticated,(req,res)=>res.render("dashboard",{user:req.user}));



router.get('/auth/google',passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login']}));

router.get('/auth/google/callback', 
    passport.authenticate('google', { failureRedirect: '/users/login' }),
    (req, res)=> {res.render('dashboard',{user : req.user});
});

module.exports=router;