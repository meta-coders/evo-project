'use strict';

const express = require('express');
const { connect } = require('../src/db');
const { GET_USER } = require('./utils');
const roles = require('../config/roles');

const client = require('./client');
const musician = require('./musician');
const host = require('./host');

const user = express.Router();

user.use('/client', client);
user.use('/musician', musician);
user.use('/host', host);

module.exports = user;

const getDetails = role => `SELECT * FROM "${role}" WHERE "UserId" = $1`;

const getUserDetails = async (db, req, res) => {
  const { sessionId } = req.cookies;
  const { rows: [user] } = await db.query(GET_USER, [sessionId]);

  if (!user) {
    return 401;
  }

  const {
    rows: [details]
  } = await db.query(getDetails(user.Role), [user.UserId]);

  if (!details) {
    return 404;
  }

  res.json({ actions: roles[user.Role], details });
};

user.get('/details', async (req, res) => {
  const db = await connect(env.DATABASE_URL);
  getUserDetails(db, req, res)
    .then(code => res.status(code || 200))
    .catch(() => res.status(500))
    .finally(() => {
      res.end();
      db.end();
    });
});
