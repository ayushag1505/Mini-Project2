const express = require('express') ;
const router = express.Router() ;
const Recipe = require('../models/Recipe') ;

const {isLoggedin} = require('../middleware') ;

router.get('/', async (req, res)=>{
    let recipes = await Recipe.find({}) ;
    res.render('index', {recipes}) ;
})

router.get('/recipes/:id', isLoggedin, async (req, res)=>{
    let {id} = req.params ;
    let foundRecipe = await Recipe.findById(id) ;
    res.render('recipe', {foundRecipe}) ;
})

router.get('/new', isLoggedin, (req, res)=>{
    res.render('new') ;
})

router.post('/', isLoggedin, async(req, res)=>{
    let {name, img, ingredients, instructions} = req.body ;
    await Recipe.create({name, img, ingredients, instructions}) ;
    res.redirect('/') ;
})

router.get('/:id/edit', isLoggedin, async(req, res)=>{
    let {id} = req.params ;
    let foundRecipe = await Recipe.findById(id) ;
    res.render('edit', {foundRecipe})
})

router.patch('/:id', isLoggedin, async(req, res)=>{
    let {id} = req.params ;
    let {name, img, ingredients, instructions} = req.body ;
    await Recipe.findByIdAndUpdate(id, {name, img, ingredients, instructions}) ;

    res.redirect(`/`) ;
})

router.delete('/:id', isLoggedin, async(req, res)=>{
    let {id} = req.params ;
    await Recipe.findByIdAndDelete(id) ;

    res.redirect('/') ;
})

module.exports = router ;