'use strict';

const express = require('express');
const { connect } = require('../src/db');

const user = express.Router();

module.exports = user;

const getUser = `
SELECT "User".*
FROM "User"
JOIN "Session" ON "User"."UserId" = "Session"."UserId"
WHERE "Session"."SessionId" = $1`;

const getDetails = role => `SELECT * FROM "${role}" WHERE "UserId" = $1`;

const getUserDetails = async (db, req, res) => {
  const { sessionId } = req.cookies;
  const { rows: [user] } = await db.query(getUser, [sessionId]);

  if (!user) {
    return 401;
  }

  const {
    rows: [details]
  } = await db.query(getDetails(user.Role), [user.UserId]);

  if (!details) {
    return 404;
  }

  res.json({ details });
};

user.get('/details', async (req, res) => {
  const db = await connect(env.DATABASE_URL);
  getUserDetails(db, req, res)
    .then(code => res.sendStatus(code || 200))
    .catch(() => res.sendStatus(500))
    .finally(() => db.end());
});
