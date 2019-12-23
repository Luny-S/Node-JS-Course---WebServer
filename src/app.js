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

app.get('/weather', (req, res) => {
    res.send({
        location: "Wroclaw",
        forecast: "It's raining"
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
}); // Starting the server.
