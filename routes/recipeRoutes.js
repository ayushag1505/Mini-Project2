const express = require('express') ;
const router = express.Router() ;
const Recipe = require('../models/Recipe') ;

router.get('/', async (req, res)=>{
    let recipes = await Recipe.find({}) ;
    res.render('index', {recipes}) ;
})

router.get('/recipes/:id', async (req, res)=>{
    let {id} = req.params ;
    let foundRecipe = await Recipe.findById(id) ;
    res.render('recipe', {foundRecipe}) ;
})

router.get('/new', (req, res)=>{
    res.render('new') ;
})

router.post('/', async(req, res)=>{
    let {name, img, ingredients, instructions} = req.body ;
    await Recipe.create({name, img, ingredients, instructions}) ;
    res.redirect('/') ;
})

module.exports = router ;