const express = require('express') ;
const app = express() ;
const path = require('path') ;
const mongoose = require('mongoose') ;
const methodOverride = require('method-override') ;
const ejsMate = require('ejs-mate') ;

app.engine('ejs', ejsMate) ;
app.set('view engine', 'ejs') ;
app.set('views', path.join(__dirname, 'views')) ;

app.use(express.static(path.join(__dirname, 'public'))) ;
app.use(express.urlencoded({extended: true})) ;
app.use(methodOverride('_method')) ;

mongoose.connect('mongodb://127.0.0.1:27017/recipe')
.then(()=>{
    console.log('Database Connected');
})
.catch((err)=>{
    console.log(err);
})

app.get('/', (req, res)=>{
    // res.send('Hello') ;
    res.render('simple') ;
})

app.listen(3000, ()=>{
    console.log('Server Connected at 3000');
})