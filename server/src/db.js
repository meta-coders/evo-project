'use strict';

const fs = require('fs');
const { Client } = require('pg');

const SETUP_SQL = 'setup.sql';

const connect = async () => {
  const client = new Client({
    connectionString: config.databaseUrl,
  });

  const setup = fs.promises.readFile(SETUP_SQL);
  await client.connect();
  await client.query(setup);

  return client;
};

module.exports = { connect };
