'use strict';

const Hapi = require('hapi');
const User = require('./user');
const AuthScheme = require('./authorization');

// Create a server with a host and port
const server = Hapi.server({
	host: 'localhost',
	port: 3000
});

// Add auth scheme
server.auth.scheme('hapi-user-api', AuthScheme);
server.auth.strategy('default', 'hapi-user-api');

// Add the routes
server.route(User.routes);

module.exports = server;
