const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/nodekb');
let db = mongoose.connection;

//check connection
db.once('open', function () {
    console.log('Connected to Mongodb');
})
//check for db errors
db.on('error', function (err) {
    console.log(err);
});

//Init App
const app = express();

//Bring in Models
let Article = require('./models/article');

//Load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
//Body Parser Middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//Home Route
app.get('/', (req, res) => {
    Article.find({}, (err, articles) => {
        if (err) {
            console.log(err);
        }
        else {
            res.render('index', {
                title: 'Articles',
                articles: articles
            });
        }

    });
    //let articles = [
    //         {
    //             id: 1,
    //             title: 'Article One',
    //             author: 'Tara Green',
    //             body: 'This is article One'
    //         },
    //         {
    //             id: 2,
    //             title: 'Article Two',
    //             author: 'Tara Green',
    //             body: 'This is article Two'
    //         },
    //         {
    //             id: 3,
    //             title: 'Article Three',
    //             author: 'Tara Green',
    //             body: 'This is article three'
    //         }
    //     ];

})

//Add Route
app.get('/articles/add', (req, res) => {
    res.render('add_article', {
        title: 'Add Article'
    });
});

//Add Submit POST Route
app.post('/articles/add', (req, res) => {
    //submitting to db
    let article = new Article();
    article.title = req.body.title;

});

//Start server

app.listen(3000, function () {
    console.log('Server started on port 3000');
});