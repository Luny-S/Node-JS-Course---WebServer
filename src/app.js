const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

// Define paths for express configs
const assetsPath = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

/**
 * app.com
 * app.com/help
 * app.com/about
 **/

// Setup handlebars engine and views location
app.set('view engine','hbs');
app.set('views',viewPath);
hbs.registerPartials(partialsPath);//

// Setup static directory to serve
app.use(express.static(assetsPath)); // customize server




app.get('',(req,res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Aleksander S.'
    });
});

app.get('/about', (req,res)=>{
    res.render('about',{
        title: "About me",
        content: "I'm learning some NodeJS"
    });
});

app.get('/help', (req,res)=>{
    res.render('help',{
        title: "Help",
        content: "Help page content should go here"
    });
});

app.get('/help/*', (req,res) => {
    res.render('404',{
        errorMessage: "Help page for this article does not exist"
    });
});

app.get('*', (req,res) => {
    res.render('404', {
        errorMessage: "Page not found"
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
}); // Starting the server.
