'use strict'

const mongoose = require('mongoose');
const Server = require('./src/server');

const Console = console;
const dbUrl = 'mongodb://admin:adm@123@ds133627.mlab.com:33627/user-api';

// Start the server
const start = async () => {
  try {
    await Server.start((error) => {
      if (error) {
        throw error;
      }
      // Once started, connect to Mongo through Mongoose
      mongoose.connect(dbUrl, { useMongoClient: true }, (error) => {
        if (error) {
          throw error;
        }
      });

      var db = mongoose.connection;
      db.on('error', console.error.bind(console, 'connection error:'));
      db.once('open', function () {
        Console.log('we are connected!');
      });
    });

  } catch (error) {
    Console.log(error);
    process.exit(1);
  }

  Console.log('Server running at:', Server.info.uri);
};

start();
