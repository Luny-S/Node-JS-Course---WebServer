const express = require('express');

const app = express();

/**
 * app.com
 * app.com/help
 * app.com/about
 **/

app.get('', (req, res) => {
    res.send('<h1>Weather App</h1>');
}); //gets partial URL (after app.com/)

app.get('/about', (req, res) => {
    res.send("About<br>This is my about page for Weather app webpage for NodeJS course");
});

app.get('/help', (req, res) => {
    res.send({
        name: 'Aleksander',
        age: 24
    });
});

app.get('/weather', (req, res) => {
    res.send({
        location: "Wroclaw",
        forecast: "Piździ"
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
}); // Starting the server.
