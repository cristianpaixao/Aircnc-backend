const express = require('express');
const SessionController = require('./controllers/SessionController')


const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({
        message: "Server is running"
    })
});

routes.post('/sessions', SessionController.store)

module.exports = routes;