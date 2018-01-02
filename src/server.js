const Hapi = require('hapi');

// Create a server with a host and port
const server = Hapi.server({
  host: 'localhost',
  port: 3000,
});

// Add the route
server.route({
  method: 'GET',
  path: '/',
  handler() {
    return 'hello hapi';
  },
});

module.exports = server;
