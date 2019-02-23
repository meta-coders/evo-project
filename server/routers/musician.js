'use strict';

const express = require('express');
const { connect } = require('../src/db');
const { GET_USER } = require('./utils');

const musician = express.Router();

module.exports = musician;
