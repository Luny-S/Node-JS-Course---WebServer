const express = require('express');
const path = require('path');

/**
 * app.com
 * app.com/help
 * app.com/about
 **/
const app = express();
const assetsPath = path.join(__dirname, '../public');
app.use(express.static(assetsPath)); // customize server


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
        forecast: "It's raining"
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
}); // Starting the server.
