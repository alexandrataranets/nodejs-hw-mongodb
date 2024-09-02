const { setupServer } = require('./server');

setupServer();

const { initMongoConnection } = require('./db/initMongoConnection');

initMongoConnection().then(setupServer);
