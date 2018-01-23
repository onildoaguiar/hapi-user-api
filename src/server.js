'use strict';

const Hapi = require('hapi');
const User = require('./user');
const AuthScheme = require('./authorization');
const Config = require('./config/env');

// Create a server with a host and port
const server = new Hapi.Server({
	host: Config.server.host,
	port: Config.server.port
});

// Add auth scheme
server.auth.scheme('hapi-user-api', AuthScheme);
server.auth.strategy('default', 'hapi-user-api');

// Add the routes
server.route(User.routes);

module.exports = server;

module.exports.listerner = () => server.listener;
