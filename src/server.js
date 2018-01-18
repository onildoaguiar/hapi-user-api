'use strict';

const Hapi = require('hapi');
const User = require('./user/index');
const AuthScheme = require('./libs/authorization');

// Create a server with a host and port
const server = Hapi.server({
    host: 'localhost',
    port: 3000,
});

// Add auth
server.auth.scheme('hapi-user-api', AuthScheme);
server.auth.strategy('default', 'hapi-user-api');

// Add the routes
server.route(User.routes);

module.exports = server;
