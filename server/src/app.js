const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

PORT = process.env.PORT || 8080;

app.use(morgan('combined'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send({
        message: 'This is your first API'
    })
})

app.listen(PORT, () => {
    console.log(`Running in localhost:${PORT}`);
})

