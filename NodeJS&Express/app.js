const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { body, validationResult } = require('express-validator');
//const expressValidator = require('express-validator');
const flash = require('connect-flash');
const session = require('express-session');

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
var router = express.Router();


//Bring in Models
let Article = require('./models/article');

//Load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
//Body Parser Middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//Set public Folder

app.use(express.static(path.join(__dirname, 'public')));

//Express session Middleware
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}));

//Express Messages Middleware
app.use(require('connect-flash')());
app.use(function (req, res, next) {
    res.locals.messages = require('express-messages')(req, res);
    next();
});

//Express Validator Middleware
app.use(express.json());
app.post('/user', (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password,
    }).then(user => res.json(user));
});

app.post(
    '/user',
    // username must be an email
    body('username').isEmail(),
    // password must be at least 5 chars long
    body('password').isLength({ min: 5 }),
    (req, res) => {
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        User.create({
            username: req.body.username,
            password: req.body.password,
        }).then(user => res.json(user));
    },
);
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

})

//Get Single Article
app.get('/article/:id', (req, res) => {
    Article.findById(req.params.id, (err, article) => {
        res.render('article', {
            article: article
        });
    });
}
);

//Add Route
app.get('/articles/add', (req, res) => {
    res.render('add_article', {
        title: 'Add Article'
    });
});

//Add Submit POST Route
app.post('/articles/add', (req, res) => {
    req.checkBody('title', 'Title is required').notEmpty;
    req.checkBody('author', 'Author is required').notEmpty;
    req.checkBody('body', 'Body is required').notEmpty;
    //Get Errors
    let errors = req.validationErrors();
    if (errors) {
        res.render('add_article', {
            title: 'Add article',
            errors: errors
        });
    } else {

    }
    //submitting to db
    let article = new Article();
    article.title = req.body.title;
    article.author = req.body.author;
    article.body = req.body.body;
    article.save(function (err) {
        if (err) {
            console.log(err);
            return;

        } else {
            req.flash('success', 'Article Added');
            res.redirect('/');
        }
    });
});

//Load edit Form
app.get('/article/edit/:id', (req, res) => {
    Article.findById(req.params.id, (err, article) => {
        res.render('edit_article', {
            title: 'Edit Article',
            article: article
        });
    });
}
);

//Update Submit POST Route
app.post('/articles/edit/:id', (req, res) => {
    //submitting to db
    let article = {};
    article.title = req.body.title;
    article.author = req.body.author;
    article.body = req.body.body;
    let query = { _id: req.params.id }
    Article.updateOne(query, article, function (err) {
        if (err) {
            console.log(err);
            return;

        } else {
            req.flash('success', 'Article Updated');
            res.redirect('/');
        }
    });
});

//Delete
app.delete('/article/:id', (req, res) => {
    let query = { _id: req.params.id }
    Article.remove(query, err => {
        if (err) {
            console.log(err);
        }
        res.send('Success');
    });
});

//Start server

app.listen(3000, function () {
    console.log('Server started on port 3000');
});