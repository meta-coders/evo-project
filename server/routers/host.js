'use strict';

const express = require('express');
const { connect } = require('../src/db');
const { GET_USER } = require('./utils');

const client = express.Router();

module.exports = client;

const GET_EVENTS = `
SELECT "Event".* 
FROM "Event" 
JOIN "Host" ON "Event"."HostId" = "Host"."HostId"
WHERE "Host"."UserId" = $1`;

const GET_MUSICIAN = `SELECT * FROM "Musician" WHERE "MusicianId" = $1`;

const GET_PROPOSALS = `
SELECT *
FROM "Proposal"
JOIN "Host" ON "Proposal"."HostId" = "Host"."HostId"
LEFT JOIN "Event" ON "Proposal"."EventId" = "Event"."EventId"
LEFT JOIN "Musician" ON "Proposal"."MusicianId" = "Musician"."MusicianId"
WHERE "Host"."UserId" = $1`;

const GET_VOTES = `SELECT COUNT(*) FROM "Votes" WHERE "ProposalId" = $1`;

const getEvents = async (db, req, res) => {
  const { sessionId } = req.cookies;
  const { rows: [user] } = await db.query(GET_USER, [sessionId]);

  if (!user) {
    return 401;
  }

  const { rows: events } = await db.query(GET_EVENTS, [user.UserId]);

  for (const event of events) {
    const musicianIds = event.MusicianIds;
    event.Musicians = [];
    for (const id of musicianIds) {
      const { rows: [musician] } = await db.query(GET_MUSICIAN, [id]);
      event.musicians.push(musician);
    }
    delete event.MusicianIds;
  }

  res.json({ events });
};

const getProposals = async (db, req, res) => {
  const { sessionId } = req.cookies;
  const { rows: [user] } = await db.query(GET_USER, [sessionId]);

  if (!user) {
    return 401;
  }

  const { rows: proposals } = await db.query(GET_PROPOSALS, [user.UserId]);

  for (const proposal of proposals) {
    proposal.Votes = await db.query(GET_VOTES, [proposal.ProposalId]);
  }

  res.json({ proposals });
};

host.get('/events', async (req, res) => {
  const db = await connect(env.DATABASE_URL);
  getEvents(db, req, res)
    .then(code => res.sendStatus(code || 200))
    .catch(() => res.sendStatus(500))
    .finally(() => db.end());
});

host.get('/proposals', async (req, res) => {
  const db = await connect(env.DATABASE_URL);
  getProposals(db, req, res)
    .then(code => res.sendStatus(code || 200))
    .catch(() => res.sendStatus(500))
    .finally(() => db.end());
});
