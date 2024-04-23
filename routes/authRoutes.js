const express = require('express') ;
const router = express.Router() ;
const passport = require('passport') ;

const User = require('../models/User') ;

router.get('/register', (req, res)=>{
    res.render('auth/signup') ;
})

router.post('/register', async (req, res)=>{
    let {username, email, password, post} = req.body ;
    const user = new User({email, username, post}) ;
    const newUser = await User.register(user, password) ;
    res.redirect('/login') ;
})


router.get('/login', (req, res)=>{
    res.render('auth/login') ;
})

router.post('/login', passport.authenticate('local', {failureRedirect : '/login'}), (req, res)=>{
    console.log(req.user);
    res.redirect('/') ;
})

router.get('/logout', (req, res)=>{
    () => {
        req.logout() ;
    }

    res.redirect('/login') ;
})


module.exports = router