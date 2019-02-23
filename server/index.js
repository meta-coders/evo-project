'use strict';

const os = require('os');
const express = require('express');
const cookieParser = require('cookie-parser');
const db = require('./src/db');

global.env = require('./config/env');
Object.assign(env, process.env);

const auth = require('./routers/auth');
const user = require('./routers/user');

const app = express();
const api = express.Router();

app.use(express.json());
app.use(cookieParser());

app.use(api);
api.use('/auth', auth);
api.use('/user', user);

const setup = async () => {
  await db.setup(env.DATABASE_URL);
}

app.listen(env.PORT, env.HOST, () => {
  setup(env.DATABASE_URL)
    .then(() => {
      console.info({
        PORT: env.PORT,
        HOST: env.HOST,
        IP: os.networkInterfaces().wlp2s0[0].address,
      });
    })
    .catch(err => {
      console.error('Failed to setup.');
      console.error(err);
      process.exit(1);
    });
});
