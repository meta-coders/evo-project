'use strict';

const express = require('express');
const { connect } = require('../src/db');

const auth = express.Router();

module.exports = auth;

const userByEmail = email => `
SELECT *
FROM "User"
WHERE "Email" = ${email}`;

auth.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const db = await connect(env.DATABASE_URL);
  const query = userByEmail(email);

  try {
    const { rows } = await db.query(query);

  } catch (e) {
    res.sendStatus(500);
  }
});

