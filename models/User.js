const mongoose = require('mongoose') ;
const passportLocalMongoose = require('passport-local-mongoose') ;


const userSchema = mongoose.Schema({
    email: {
        type : String ,
        required : true ,
        trim : true
    } ,

    post : {
        type : String ,
        required : true 
    } ,

    favourites : [
        {
            type : mongoose.Schema.Types.ObjectId ,
            ref : 'Recipe' 
        }
    ]
})

userSchema.plugin(passportLocalMongoose) ;

let User = mongoose.model('User', userSchema) ;
module.exports= User ;