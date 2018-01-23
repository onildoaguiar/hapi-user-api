'use strict';

const mongoose = require('mongoose');
const Config = require('./env');
const mongoDBUrl = Config.db.url;

const Console = console;

module.exports.connect = () => {
	mongoose.Promise = Promise;
	mongoose.connect(mongoDBUrl, { useMongoClient: true }).then(() => {
		Console.log('Connected to MongoDB');
	}, (err) => {
		Console.log(err);
	});
};
