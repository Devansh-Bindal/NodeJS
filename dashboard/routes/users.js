const express = require("express");
const router = express.Router();
const User=require('../models/User');
const bcrypt=require('bcryptjs');
const passport=require('passport');

//Login Page and Register Page
router.get('/login', (req, res) => res.render("login"))
router.get('/register', (req, res) => res.render("register"))

//Register Handle
router.post('/register', (req, res) => {
    const {name,email,password,age}=req.body;
    let errors = [];

    //Check for required fields
     if(!name ||!email || !password ||!age) {
        errors.push({ msg: 'Please enter all fields' });
       }
    
    //Checks password length
    if (password.length < 6) {
        errors.push({ msg: 'Password must be at least 6 characters' });
    }

    //Check sum for all errors
    if (errors.length > 0) {
        res.render('register', {
          errors,
          name,
          email,
          password,
          age
        });
    }
    else{
        // Validation passes
        User.findOne({email:email})
            .then(user=>{
                if(user){
                    //User exists
                    errors.push({msg:"Email already exists"});
                    res.render('register', {
                        errors,
                        name,
                        email,
                        password,
                        age
                      });
                }
                else{
                    const newUser=new User({
                        name,
                        email,
                        password,
                        age
                    });
                //    console.log(newUser);
                   //Hash Password
                   bcrypt.genSalt(10,(err,salt)=>
                    bcrypt.hash(newUser.password,salt,(err,hash)=>{
                        if(err) throw err;

                        //Set password to hashed
                        newUser.password=hash;
                        // console.log(newUser.password);
                        //Save user
                        newUser.save()
                        .then(user=>{
                            req.flash('success',"User is registered now and can login");
                            res.redirect('/users/login');
                        })
                        .catch(err=>console.log(err))
                   })) 
                }

            })
    }
    
   
});

//Login Handle
router.post('/login',(req,res,next)=>{
    passport.authenticate('local',{
        successRedirect:'/dashboard',
        failureRedirect:'/users/login',
        failureFlash:true
    })(req,res,next);
});

//Logout
router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success', 'Logged Out Successfully');
    res.redirect('/users/login');
  });

module.exports = router;  