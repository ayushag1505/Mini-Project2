const express = require('express') ;
const app = express() ;
const path = require('path') ;
const mongoose = require('mongoose') ;
const methodOverride = require('method-override') ;
const ejsMate = require('ejs-mate') ;
const session = require('express-session')

const passport = require('passport') ;
const LocalStrategy = require('passport-local')
const User = require('./models/User')


const recipeRoutes = require('./routes/recipeRoutes') ;
const authRoutes = require('./routes/authRoutes') ;
const favRoutes = require('./routes/favRoutes') ;

app.engine('ejs', ejsMate) ;
app.set('view engine', 'ejs') ;
app.set('views', path.join(__dirname, 'views')) ;

app.use(express.static(path.join(__dirname, 'public'))) ;
app.use(express.urlencoded({extended: true})) ;
app.use(methodOverride('_method')) ;

// express-session middleware
app.use(session({
    secret: 'Recipes',
    resave: false,
    saveUninitialized: true ,
    cookie : {
        httpOnly: true ,
        expires : Date.now() + 24*60*60*7*1000,
        maxAge : 24*60*60*7*1000
    }
}))

app.use(passport.initialize()) ;
app.use(passport.session()) ;
passport.serializeUser(User.serializeUser()) ;
passport.deserializeUser(User.deserializeUser()) ;

// middleware for every page
app.use((req,res,next)=>{
    res.locals.currentUser = req.user;
    next();
})

// passport middleware
passport.use(new LocalStrategy(User.authenticate()));

// const seed = require('./seed') ;

mongoose.connect('mongodb://127.0.0.1:27017/recipe')
.then(()=>{
    console.log('Database Connected');
})
.catch((err)=>{
    console.log(err);
})


// console.log('database seeded') ;
// seed() ;

app.use(recipeRoutes) ;
app.use(authRoutes) ;
app.use(favRoutes) ;

app.listen(3000, ()=>{
    console.log('Server Connected at 3000');
})