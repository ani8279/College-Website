const express = require('express');
const fs = require('fs');
const app = express();

const path = require('path');
const bodyparser = require('body-parser');
const mongoClient = require('mongodb').MongoClient;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, 'public')));

const home = fs.readFileSync('../index.html');
const course = fs.readFileSync('../course/course.html');
const contact = fs.readFileSync('../contact/contact.html');
const download = fs.readFileSync('../download/download.html');
const login = fs.readFileSync('../login/login.html');

const style = fs.readFileSync('../style.css');
const courseCSS = fs.readFileSync('../course/course.css');
const contactCSS = fs.readFileSync('../contact/contact.css');
const loginCSS = fs.readFileSync('../login/login.css');

const index = fs.readFileSync('../index.js');
const loginJs = fs.readFileSync('../login/login.js');
const logo = fs.readFileSync('../images/logo.png');
const srchIcon = fs.readFileSync('../images/searchicon.png');
const a = fs.readFileSync('../images/a.jpg');
const b = fs.readFileSync('../images/b.jpg');
const c = fs.readFileSync('../images/c.jpg');

const ca = fs.readFileSync('../images/course/a.jpg');
const cb = fs.readFileSync('../images/course/b.jpg');
const cc = fs.readFileSync('../images/course/c.jpg');
const cd = fs.readFileSync('../images/course/d.jpg');
const login_img = fs.readFileSync('../images/login_photo.jpg');


app.get('/', (req, res) => {
    res.header('Content-Type', 'text/html');
    res.end(home);
    console.log(req.url);
})

app.get('/course', (req, res) => {
    res.header('Content-Type', 'text/html');
    res.end(course);
    console.log(req.url);
})

app.get('/course.css', (req, res) => {
    res.header('Content-Type', 'text/css');
    res.end(courseCSS);
    console.log(req.url);
})

app.get('/contact', (req, res) => {
    res.header('Content-Type', 'text/html');
    res.end(contact);
    console.log(req.url);
})

app.get('/contact.css', (req, res) => {
    res.header('Content-Type', 'text/css');
    res.end(contactCSS);
    console.log(req.url);
})

app.get('/download', (req, res) => {
    res.header('Content-Type', 'text/html');
    res.end(course);
    console.log(req.url);
})

app.get('/download.css', (req, res) => {
    res.header('Content-Type', 'text/css');
    res.end(courseCSS);
    console.log(req.url);
})

app.get('/login', (req, res) => {
    res.header('Content-Type', 'text/html');
    res.end(login);
    console.log(req.url);
})

app.get('/login.css', (req, res) => {
    res.header('Content-Type', 'text/css');
    res.end(loginCSS);
    console.log(req.url);
})

app.get('/style.css', (req, res) => {
    res.header('Content-Type', 'text/css');
    res.end(style);
    console.log(req.url);
})

app.get('/index.js', (req, res) => {
    res.header('Content-Type', 'text/js');
    res.end(index);
    console.log(req.url);
})

app.get('/images/logo.png', (req, res) => {
    res.header('Content-Type', 'image/png');
    res.end(logo);
    console.log(req.url);
})
app.get('/images/searchicon.png', (req, res) => {
    res.header('Content-Type', 'image/png');
    res.end(srchIcon);
    console.log(req.url);
})
app.get('/images/a.jpg', (req, res) => {
    res.header('Content-Type', 'image/jpg');
    res.end(a);
    console.log(req.url);
})

app.get('/images/b.jpg', (req, res) => {
    res.header('Content-Type', 'image/jpg');
    res.end(b);
    console.log(req.url);
})

app.get('/images/c.jpg', (req, res) => {
    res.header('Content-Type', 'image/png');
    res.end(c);
    console.log(req.url);
})

app.get('/images/course/a.jpg', (req, res) => {
    res.header('Content-Type', 'image/jpg');
    res.end(ca);
    console.log(req.url);
})

app.get('/images/course/b.jpg', (req, res) => {
    res.header('Content-Type', 'image/jpg');
    res.end(cb);
    console.log(req.url);
})

app.get('/images/course/c.jpg', (req, res) => {
    res.header('Content-Type', 'image/png');
    res.end(cc);
    console.log(req.url);
})

app.get('/images/course/d.jpg', (req, res) => {
    res.header('Content-Type', 'image/png');
    res.end(cd);
    console.log(req.url);
})

app.get('/images/login_photo.jpg', (req, res) => {
    res.header('Content-Type', 'image/png');
    res.end(login_img);
    console.log(req.url);
})

app.post('/login.js', (req, res) => {
    console.log(req.url);
    res.header('Content-Type', "text/js")
    res.send(loginJs);
})

app.post('/login', (req,res) => {
    res.header('Content-Type', "text/html");
    mongoClient.connect('mongodb://localhost:27017/dataBase', (err, db) => {
        var dbo = db.db('dataBase');
        dbo.collection('users').insertOne(req.body);
        res.send('DONE!!!!'+JSON.stringify(req.body));
    })
})


app.listen(80, () => {
    console.log("Running at localhost");
})

// html: 'text/html',
// txt: 'text/plain',
// css: 'text/css',
// gif: 'image/gif',
// jpg: 'image/jpeg',
// png: 'image/png',
// svg: 'image/svg+xml',
// js: 'application/javascript'



