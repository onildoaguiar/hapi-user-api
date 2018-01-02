const Server = require('./src/server');

const Console = console;

// Start the server
const start = async () => {
  try {
    await Server.start();
  } catch (err) {
    Console.log(err);
    process.exit(1);
  }

  Console.log('Server running at:', Server.info.uri);
};

start();
