'use strict';

const express = require('express');
const cookieParser = require('cookie-parser');
const db = require('./src/db');

global.env = require('./env');
Object.assign(env, process.env);

const auth = require('./routers/auth');

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/auth', auth);

app.listen(env.PORT, env.HOST, async () => {
  try {
    await db.setup(env.DATABASE_URL);
    console.info({
      PORT: env.PORT,
      HOST: env.HOST,
    });
  } catch (err) {
    console.error('Failed to setup.');
    console.error(err);
  }
});
