'use strict';

const express = require('express');
const { connect } = require('../src/db');
const { GET_USER } = require('./utils');

const client = express.Router();

module.exports = client;

const GET_EVENTS = `SELECT * FROM "Event"`;

const CREATE_PROPOSAL = `
INSERT INTO "Proposal" ("EventId", "HostId", "MusicianId") 
VALUES ($1, $2, $3)`;

const CREATE_VOTE = `
INSERT INTO "Vote" ("ProposalId", "ClientId") 
VALUES ($1, $2)`;

const getEvents = async (db, req, res) => {
  const { sessionId } = req.cookies;
  const { rows: [user] } = await db.query(getUser, [sessionId]);

  if (!user) {
    return 401;
  }

  const { rows: events } = await db.query(GET_EVENTS);
  res.json({ events });
};

const propose = async (db, req) => {
  const { sessionId } = req.cookies;
  const { rows: [user] } = await db.query(getUser, [sessionId]);
  const {
    eventId,
    hostId,
    musicianId
  } = req.body;

  if (!user) {
    return 401;
  }

  await db.query(CREATE_PROPOSAL, [eventId, hostId, musicianId]);
};

const vote = async (db, req) => {
  const { sessionId } = req.cookies;
  const { rows: [user] } = await db.query(getUser, [sessionId]);
  const { proposalId } = req.body;

  if (!user) {
    return 401;
  }

  await db.query(CREATE_VOTE, [proposalId, user.UserId]);
};

client.get('/events', async (req, res) => {
  const db = await connect(env.DATABASE_URL);
  getEvents(dv, req, res)
    .then(code => res.sendStatus(code || 200))
    .catch(() => res.sendStatus(500))
    .finally(() => db.end());
});

client.post('/propose', async (req, res) => {
  const db = await connect(env.DATABASE_URL);
  propose(db, req, res)
    .then(code => res.sendStatus(code || 200))
    .catch(() => res.sendStatus(500))
    .finally(() => db.end());
});

client.post('/vote', async (req, res) => {
  const db = await connect(env.DATABASE_URL);
  vote(db, req, res)
    .then(code => res.sendStatus(code || 200))
    .catch(() => res.sendStatus(500))
    .finally(() => db.end());
});
