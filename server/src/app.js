const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

PORT = process.env.PORT || 8080;

// morgan is a logger HTTP Req, HTTP Res
app.use(morgan('combined'));
// Body Parser is used for parse any body of json (HTTP POST)
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send({
        message: 'This is your first API'
    })
})

app.listen(PORT, () => {
    console.log(`Running in localhost:${PORT}`);
})

