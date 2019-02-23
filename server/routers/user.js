'use strict';

const express = require('express');
const { connect } = require('../src/db');
const { GET_USER } = require('./utils');
const roles = require('../config/roles');

const client = require('./client');

const user = express.Router();

user.use('/client', client);

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
    .then(code => res.sendStatus(code || 200))
    .catch(() => res.sendStatus(500))
    .finally(() => db.end());
});
