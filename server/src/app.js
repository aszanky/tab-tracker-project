const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

const PORT = process.env.PORT || 8080;

// morgan is a logger HTTP Req, HTTP Res
app.use(morgan('combined'));
// Body Parser is used for parse any body of json (HTTP POST)
app.use(bodyParser.json());
app.use(cors());

app.post('/register', (req, res) => {
    res.send({
        message: `Hello ${req.body.email} Your users was registered`
    });
});

app.listen(PORT, () => {
    console.log(`Running in localhost:${PORT}`);
});
