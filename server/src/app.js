const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const config = require('./config/config');
const {sequelize} = require('./models');

const app = express();

// morgan is a logger HTTP Req, HTTP Res
app.use(morgan('combined'));
// Body Parser is used for parse any body of json (HTTP POST)
app.use(bodyParser.json());
app.use(cors());

require('./routes')(app);

sequelize.sync()
    .then(() => {
        app.listen(config.port);
        console.log(`Running in localhost:${config.port}`);
    });
