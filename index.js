// All Requires at top
// we require the express module
// without ./ means global within project (-g global within VS Code)
const express = require('express');  // npm i express - this allows me to use express server in my project
const request = require('request');  // npm i request - API Calls, use request as fetch is very new - will be replaced
// express handlebars
// path is to setup the public folder
// install express-handlebars path
const path = require('path');   // npm i path
const hbs = require('express-handlebars');  // npm i express-handlebars 

const app = express();   // now a function we are calling - initialised express to use its features
const getWeather = require('./lib/getWeather')

// path is about to be set up
app.use(express.static(path.join(__dirname, 'public')));
// letting us use at the css file style.css but finds first public folder instead of phjysically writing location

// template engine
// Handlebars looks everywhere, thats how it finds index/about.hbs
app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: '.hbs'
}));
// set it to use engine
app.set('view engine', '.hbs')

// APPID="34ab9a0e7ae72e9609dc4e4d6dd8cb19" node index.js   // Paste this into console

// getWeather();    // was used when getWeather function was in index.js

// four http methods: GET, POST , PUT & DELETE - You may see CRUD for some other stacks (Create, Read, Update & Delete)

// get is a function inside of express - for more info look at module on NPMJS
// for each file you want to load, you need a get.
// app.get('/', (req, res) => {                    // each get method should have a req (Request) & res (Response). 
app.get('/', async (req, res) => {          // add async!
    // sendFile is for express only, no templating engine used.
    // res.sendFile(__dirname + '/index.html');    // double underscore '__' for directory name not to get confused with snake_case
    // dont need sendFile anymore as going to render instead
    let data = await getWeather()
    console.log(data);
    res.render('index')
})

app.get('/about', (req, res) => {
    // res.sendFile(__dirname + '/about.html');    // sendFile just sends, render renders the file
    res.render('about')
})

app.listen(3000, () => {    // listen is all about ports - creates a connection on a specified port (localhost:3000 - Response 'cannot GET /', looking for '/')
    console.log('I am listening on port 3000');
})      