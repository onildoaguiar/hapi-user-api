'use strict';

const Server = require('./src/server');
const Database = require('./src/config/database');

const Console = console;

// Start the server
const start = async () => {
	try {
		await Server.start();
		await Database.start();
	} catch (err) {
		Console.log(err);
		process.exit(1);
	}

	Console.log('Server running at:', Server.info.uri);
};

start();
