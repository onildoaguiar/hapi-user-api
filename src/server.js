'use strict';

const Hapi = require('hapi');
const User = require('./user/index');

// Create a server with a host and port
const server = Hapi.server({
    host: 'localhost',
    port: 3000,
});

// Add the routes
server.route(User.routes);

module.exports = server;
