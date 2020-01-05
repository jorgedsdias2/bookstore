const express = require('express');

const SessionController = require('./controllers/SessionController');
const AuthorController = require('./controllers/AuthorController');
const Token = require('./helpers/Token');

const routes = express.Router();

routes.post('/author', Token.verify, AuthorController.create);
routes.put('/author/:id', Token.verify, AuthorController.show);

routes.post('/register', SessionController.register);
routes.post('/login', SessionController.login);

module.exports = routes;