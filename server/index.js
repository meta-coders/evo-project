'use strict';

const express = require('express');
const app = express();

const env = require('./env');
Object.assign(env, process.env);

console.log(env.DATABASE_URL);

// app.listen(env.PORT);
