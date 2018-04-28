const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../config/config');
const db = {};

/* Sequelize will setup a connection pool on initialization
so you should ideally only ever create one instance per database
if you're connecting to the DB from a single process
*/

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
);

// const model = sequelize.import(path.join(__dirname, '/User'));
// db[model.name] = model;

fs.readdirSync(__dirname)
    .filter((file) => file !== 'index.js')
    .forEach((file) => {
        const model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
    });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
