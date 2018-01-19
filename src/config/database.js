'use strict';

const mongoose = require('mongoose');
const Config = require('./env');
const mongoDBUrl = Config.db.url || 'mongodb://admin:adm123@ds133627.mlab.com:33627/user-api';

const Console = console;

module.exports.start = () => {
	mongoose.Promise = Promise;
	mongoose.connect(mongoDBUrl, { useMongoClient: true }).then(() => {
		Console.log(`Connected to Mongo server`);
	}, (err) => {
		Console.log(err);
	});
};
