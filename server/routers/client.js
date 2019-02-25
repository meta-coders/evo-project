'use strict';

const express = require('express');
const { connect } = require('../src/db');
const { GET_USER } = require('./utils');

const client = express.Router();

module.exports = client;

const GET_EVENTS = `SELECT * FROM get_events`;
const GET_PROPOSALS = `SELECT * FROM client_get_proposals`;
const CREATE_PROPOSAL = `SELECT client_create_proposal($1, $2, $3)`;
const CREATE_VOTE = `SELECT client_create_vote($1, $2)`;
const GET_MUSICIAN = `SELECT * FROM get_musician($1)`;

const getEvents = async (db, req, res) => {
  const { sessionId } = req.cookies;
  const { rows: [user] } = await db.query(GET_USER, [sessionId]);

  if (!user) {
    return 401;
  }

  const { rows: events } = await db.query(GET_EVENTS);

  for (const event of events) {
    const musicianIds = event.musician_ids;
    event.musicians = [];
    for (const id of musicianIds) {
      const { rows: [musician] } = await db.query(GET_MUSICIAN, [id]);
      event.musicians.push(musician);
    }
    delete event.musician_ids;
  }

  res.json({ events });
};

const getProposals = async (db, req, res) => {
  const { sessionId } = req.cookies;
  const { rows: [user] } = await db.query(GET_USER, [sessionId]);

  if (!user) {
    return 401;
  }

  const { rows: proposals } = await db.query(GET_PROPOSALS);
  res.json({ proposals });
};

const propose = async (db, req) => {
  const { sessionId } = req.cookies;
  const { rows: [user] } = await db.query(GET_USER, [sessionId]);
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
  const { rows: [user] } = await db.query(GET_USER, [sessionId]);
  const { proposalId } = req.body;

  if (!user) {
    return 401;
  }

  await db.query(CREATE_VOTE, [proposalId, user.user_id]);
};

client.get('/events', async (req, res) => {
  const db = await connect(env.DATABASE_URL);
  getEvents(db, req, res)
    .then(code => res.status(code || 200))
    .catch(() => res.status(500))
    .finally(() => {
      res.end();
      db.end();
    });
});

client.get('/proposals', async (req, res) => {
  const db = await connect(env.DATABASE_URL);
  getProposals(db, req, res)
    .then(code => res.status(code || 200))
    .catch(() => res.status(500))
    .finally(() => {
      res.end();
      db.end();
    });
});

client.post('/propose', async (req, res) => {
  const db = await connect(env.DATABASE_URL);
  propose(db, req, res)
    .then(code => res.status(code || 200))
    .catch(() => res.status(500))
    .finally(() => {
      res.end();
      db.end();
    });
});

client.post('/vote', async (req, res) => {
  const db = await connect(env.DATABASE_URL);
  vote(db, req, res)
    .then(code => res.status(code || 200))
    .catch(() => res.status(500))
    .finally(() => {
      res.end();
      db.end();
    });
});
