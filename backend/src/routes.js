const express = require('express');

const SessionController = require('./controllers/SessionController');
const AuthorController = require('./controllers/AuthorController');
const Token = require('./helpers/Token');

const routes = express.Router();

routes.get('/authors', Token.verify, AuthorController.index);
routes.post('/author', Token.verify, AuthorController.create);
routes.put('/author/:id', Token.verify, AuthorController.update);
routes.delete('/author/:id', Token.verify, AuthorController.destroy);

routes.post('/sessions/register', SessionController.register);
routes.post('/sessions/login', SessionController.login);

module.exports = routes;