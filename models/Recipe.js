const mongoose = require('mongoose') ;

const recipeSchema = new mongoose.Schema({
    name : {
        type: String ,
        trim: true ,
        required: true
    },

    img : {
        type: String ,
        trim: true ,
        required: true 
    },

    ingredients : {
        type: String ,
        trim: true ,
        required: true 
    },

    instructions : {
        type: String ,
        trim: true ,
        required: true  
    },

    author : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : 'User'
    }
})

let Recipe = mongoose.model('Recipe', recipeSchema) ;
module.exports = Recipe ; 