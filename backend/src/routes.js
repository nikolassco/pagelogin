const express = require('express');
const { registerUser, login } = require('./controllers/users');
const routes = express();

routes.post('/register', registerUser);
routes.post('/login', login);

module.exports = routes;
