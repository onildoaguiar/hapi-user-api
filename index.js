'use strict';

const Server = require('./src/server');
const mongoose = require('mongoose');
const mongoDBUrl = 'mongodb://admin:adm123@ds133627.mlab.com:33627/user-api';

const Console = console;

// Start the server
const start = async () => {
  try {
    await Server.start();

    mongoose.Promise = Promise;
    mongoose.connect(mongoDBUrl, {useMongoClient: true}).then(() => { Console.log(`Connected to Mongo server`) }, err => { Console.log(err) });

  } catch (err) {
    Console.log(err);
    process.exit(1);
  }

  Console.log('Server running at:', Server.info.uri);
};

start();
