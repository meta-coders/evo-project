'use strict';

const fs = require('fs');
const path = require('path');
const util = require('util');
const { Client } = require('pg');

const SETUP_SQL = path.join(__dirname, '..', 'setup.sql');
const readFile = util.promisify(fs.readFile);

const connect = async url => {
  const client = new Client({ connectionString: url });
  await client.connect();
  return client;
};

const setup = async url => {
  const client = await connect(url);
  const setup = await readFile(SETUP_SQL, 'utf8');
  await client.query(setup);
};

module.exports = {
  connect,
  setup,
};
