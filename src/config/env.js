'use strict';

const dotenv = require('dotenv');

dotenv.config();

module.exports = {
	server: {
		port: process.env.PORT,
		host: process.env.HOST
	},
	db: {
		url: process.env.DB_URL
	}
};
