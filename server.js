const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/routes');
const port = 3002;
const app = express();

// Use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false,
}));

router(app);

const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
 
    console.log(`Server listening on port ${server.address().port}`);
});