const express = require('express') ;
const router = express.Router() ;
const {isLoggedin} = require('../middleware') ;
const Recipe = require('../models/Recipe');
const User = require('../models/User');

router.get('/user/favourites', isLoggedin, async (req, res)=>{
    console.log(req.user._id);
    let user = await User.findById(req.user._id).populate('favourites') ;
    res.render('favourites', {user}) ;
})

router.post('/user/:recipeId/add', isLoggedin, async(req, res)=>{
    let {recipeId} = req.params ;
    let userId = req.user._id ;

    let recipe = await Recipe.findById(recipeId) ;
    let user = await User.findById(userId) ;
    user.favourites.push(recipe) ;
    user.save() ;
    res.redirect('/user/favourites') ;
})



module.exports = router