const {Song} = require('../models');

module.exports = {
    async index (req, res) {
        try {
            const songs = await Song.findAll({
                limit: 10
            });
            res.send(songs);
        } catch (error) {
            res.status(500).send({
                error: 'An error was happened trying to fetch the songs'
            });
        };
    },
    async show (req, res) {
        try {
            const song = await Song.findById(req.params.id);
            res.send(song);
        } catch (error) {
            res.status(500).send({
                error: 'An error was happened trying to fetch the songs'
            });
        };
    },
    async post (req, res) {
        try {
            const song = await Song.create(req.body);
            res.send(song);
        } catch (error) {
            res.status(500).send({
                error: 'An error was happened trying to create the songs'
            });
        };
    }
};
