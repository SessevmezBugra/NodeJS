const express       = require('express'),
      Blog = require('../models/blogModel'),
      router        = express.Router();


let posts = [
    {
        postTitle : 'Test1',
        postSubTitle : 'deneme1',
        image : 'https://images.unsplash.com/photo-1543363136-2ae17fd2efc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80'
    },
    {
        postTitle : 'Test2',
        postSubTitle : 'deneme2',
        image : 'https://images.unsplash.com/photo-1546418105-f9a6c687947e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80'
    },
    {
        postTitle : 'Test3',
        postSubTitle : 'deneme3',
        image : 'https://images.unsplash.com/photo-1546396360-b87fb5c5dd0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2219&q=80'
    }
];

router.get('/',(req,res)=>{
    Blog.find({}).then((foundBlogs)=>{
        console.log(foundBlogs);
        res.render('home',{foundBlogs : foundBlogs});
    }).catch((err)=>{
        console.log(err);
    });
});

router.get('/about',(req,res)=>{
    res.render('about');
});

router.get('/contact',(req,res)=>{
    res.render('contact');
});

router.get('/resume',(req,res)=>{
    res.render('resume');
});


module.exports = router;

