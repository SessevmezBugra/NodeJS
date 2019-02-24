const express       = require('express'),
      User          = require('../models/userModel'),
      passport      = require('passport'),
      router        = express.Router();

let adminActions = [
    {
        actionId : 1,
        actionName : 'changeHomeImage',
        displayName : 'Change Home Image'
    },
    {
        actionId : 2,
        actionName : 'changeAboutImage',
        displayName : 'Change About Image'
    },
    {
        actionId : 3,
        actionName : 'changeAboutText',
        displayName : 'Change About Text' 
    },
    {
        actionId : 4,
        actionName : 'addNewBlog',
        displayName : 'Add New Blog'
    },
    {
        actionId : 5,
        actionName : 'listAllBlogs',
        displayName : 'List All Blogs'
    }
];
router.get('/admin',isLoggedIn,(req,res)=>{
    res.render('admin/admin',{adminActions : adminActions});
});

router.get('/signIn',(req,res)=>{
    res.render('admin/signIn');
});

router.post('/signIn',passport.authenticate('local',{successRedirect:'/', failureRedirect:'signIn'}),
    (req,res)=>{

    }
);

router.get('/signUp',isLoggedIn,(req,res)=>{
    res.render('admin/signUp');
});

router.post('/signUp',(req,res)=>{
    console.log(req.body.username);
    let newUser = new User({username:req.body.username});
    User.register(newUser,req.body.password,(err,user)=>{
        if(err){
            console.log(err);
            res.redirect('signUp');
        }
        passport.authenticate('local')(req, res, ()=>{
            res.redirect('/');
        });
    });
});

router.get('/signOut',(req,res)=>{
    req.logOut();
    res.redirect('/');
});

function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/signIn');
}
module.exports = router;

