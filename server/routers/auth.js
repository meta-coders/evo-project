'use strict';

const express = require('express');
const { connect } = require('../src/db');
const { generateSID } = require('./utils');

const auth = express.Router();

module.exports = auth;

const USER_BY_EMAIL = 'SELECT * FROM "User" WHERE "Email" = $1';
const CREATE_SESSION = 'INSERT INTO "Session" VALUES ($1, $2)';
const DROP_SESSION = `DELETE FROM "Session" WHERE "SessionId" = $1`;

const validateCredentials = (user, password) => {
  if (!user) return false;
  return user.Password === password;
};

const signin = async (db, req, res) => {
  const { email, password } = req.body;

  const { rows: [user] } = await db.query(USER_BY_EMAIL, [email]);
  const valid = validateCredentials(user, password);

  if (!valid) {
    return 403;
  }

  const sessionId = generateSID(env.SID_LENGTH);
  await db.query(CREATE_SESSION, [sessionId, user.UserId]);

  res.cookie('sessionId', sessionId);
  res.json({ role: user.Role });
};

const signout = async (db, req, res) => {
  const { sessionId } = req.cookies;
  await db.query(DROP_SESSION, [sessionId]);
  res.clearCookie('sessionId');
};

auth.post('/signin', async (req, res) => {
  const db = await connect(env.DATABASE_URL);
  signin(db, req, res)
    .then(code => res.status(code || 200))
    .catch(() => res.status(500))
    .finally(() => {
      res.end();
      db.end();
    });
});

auth.post('/signout', async (req, res) => {
  const db = await connect(env.DATABASE_URL);
  signout(db, req, res)
    .then(() => res.status(200))
    .catch(() => res.status(500))
    .finally(() => {
      res.end();
      db.end();
    });
});
